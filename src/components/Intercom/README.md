# Intercom Live Chat

## Overview

Live chat widget for [Intercom](https://www.intercom.com/).


## Usage

This component requires the Intercom AppId to be set in the config.

**local.json**
```json
"intercom": {
  "appId": "YOUR_APP_ID"
}
```

**ENV Var**
`INTERCOM_APP_ID`

```js
import { Chat } from './Intercom'

...

<Chat userData={...} loadOnClick="false" />
```

### Options

- `userData` optional object containing user data. `{ firstName, lastName, email, returnUrl }`
- `loadOnClick` optional boolean value. If this is true a fake button will be displayed and Intercom scripts will only be loaded when the button is clicked.
