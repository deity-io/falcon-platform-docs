---
id: mailer
title: Mail component
sidebar_label: Mail component
---
import Badge from '@site/src/components/Badge';

<Badge variant="green">NEW V3 DOC</Badge><br/><br/>

Out of the box Deity Composer allows emails to be sent easily using our `@deity/falcon-mailer` package. Under the hood this uses [Node Mailer →](https://nodemailer.com/about/).

## Configuration

:::note Each mail service is different
Depending on the service you're using your **smtp** config might vary. Please refer to the [nodemailer docs](https://nodemailer.com/smtp/). We pass the config object as is.
:::

To configure our mailer component add it to your `server` config as a component. This config might vary depending on your setup.

**`server/config/default.json`**
```json
"components": {
    "mailer": {
      "package": "@deity/falcon-mailer",
      "config": {
        "transport": {
          "service": "[MAILER_SERVICE]",
          "auth": {
            "user": "[MAILER_USER]",
            "pass": "[MAILER_PASSWORD]"
          },
        },
        "send": {
          "from": "[MAILER_FROM_ADDRESS]"
        }
      }
    }
  }
}
```

- `MAILER_SERVICE` - this is the service you'd like to use. See a list of [supported values here →](https://nodemailer.com/smtp/well-known/).
- `MAILER_USER` - the username for the service above
- `MAILER_PASSWORD` - the password for the service above
- `MAILER_FROM_ADDRESS` - the from address, e.g `Falcon Shop <deity.falcon.mailer@gmail.io>`

## Usage

Out of the box we use the mailer packages `sendEmail` method to handle password reset requests when the integrated shop doesn't offer this functionality out of the box.
For now this only includes **BigCommerce** and **commercetools** integrations.

### Loading the mailer component

You can easily inject the mailer component into your data source package by injecting it into the classes constructor.

**`server/src/your-custom-module/index.ts`**
```ts
import { injectable, inject, optional } from 'inversify';
...
@injectable()
export class YourCustomDataSource extends FalconRESTDataSource {
  constructor(
      ...
      @inject('mailer') @optional() protected mailer: any
    ) {
      ...
    }
    ...
}
```

### Using the mailer component

Once injected you can easily use the `sendEmail` method.

```ts
this.mailer.sendEmail(
  [TO_EMAIL],
  [SUBJECT],
  [CONTENT]
);
```
