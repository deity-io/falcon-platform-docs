import React, { useState } from 'react';
import jsonp from 'jsonp';
import clsx from 'clsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './styles.module.css';

// Mailchimp returns HTML in it's response so we return out own messages. We are doing string comparison here which is a bit nasty. Especially if the Mailchimp language changes.
const handleResponse = (err, data) => {
  if (data && data.msg.includes('already subscribed')) {
    return {
      message: 'This email address is already subscribed to our list.',
      result: 'error'
    };
  }
  if (err || data.result === 'error') {
    return {
      message: 'Something went wrong, please try again.',
      result: 'error'
    };
  }
  return {
    message: 'Thank you for subscribing.',
    result: data.result
  };
};

function ResponseMessage({ response }) {
  return <p style={{ color: response.result === 'error' ? 'red' : 'green' }}>{response.message}</p>;
}

function Mailchimp({ action }) {
  const [response, setResponse] = useState(null);

  const handleSubmit = values => {
    // Unset reponse data
    setResponse(null);

    const params = Object.entries(values)
      .map(([key, val]) => `${key.toUpperCase()}=${val}`)
      .join('&');
    const path = `${action}&${params}`;

    return new Promise(resolve => {
      jsonp(path, { param: 'c' }, (err, data) => {
        const formattedResponse = handleResponse(err, data);
        setResponse(formattedResponse);
        resolve(response);
      });
    });
  };

  return (
    <Formik
      initialValues={{ email: '', referrer: 'docs.deity.io' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Please enter your email address';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'This email address is invalid';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.inputs}>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email address"
              aria-label="Email Address"
              className={styles.input}
            />
            <button type="submit" disabled={isSubmitting} className={clsx(styles.button, 'button')}>
              Sign Up
            </button>
          </div>
          {response ? (
            <ResponseMessage response={response} />
          ) : (
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          )}
        </Form>
      )}
    </Formik>
  );
}

export default Mailchimp;
