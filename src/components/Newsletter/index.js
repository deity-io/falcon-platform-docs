import React from "react";
import Mailchimp from "react-mailchimp-form";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Newsletter = () => {
  const context = useDocusaurusContext();
  const {
    siteConfig: {
      themeConfig: {
        mailchimp: { submitUrl = null },
      },
    },
  } = context;

  if (!submitUrl) {
    return null;
  }
  return (
    <section>
      <h3>Stay up to date</h3>
      <p>
        Do you want to be informed when we release new features or fixes? Sign
        up to our newsletter to stay in the loop.
      </p>
      <Mailchimp
        action={submitUrl}
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          }
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
    </section>
  );
};

export default Newsletter;
