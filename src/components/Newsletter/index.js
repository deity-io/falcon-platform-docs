import React from 'react';
import Mailchimp from 'react-mailchimp-form';

const Newsletter = () => {
  return (
    <>
      <h3>Stay up to date</h3>
      <p>
        Do you want to be informed when we release new features or fixes? Sign
        up to our newsletter to stay in the loop.
      </p>
      <Mailchimp
        action="https://Deity.us16.list-manage.com/subscribe/post?u=6c94229e24ca6964641a9d054&amp;id=f7e67a2b7d"
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "REFERRER",
            value: "docs.deity.io",
            type: "text",
            required: false,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Subscribe!",
        }}
        // Add a personalized class
        className="<YOUR_CLASSNAME>"
      />
    </>
  );
}

export default Newsletter
