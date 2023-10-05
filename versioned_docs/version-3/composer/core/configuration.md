---
id: configuration
title: Falcon Server configuration
sidebar_label: Configuration
enterprise_only: true
---

Accessing server config is simple.

As your `APIs`, `payments`, `components` and `extensions` are all defined in the config files themselves you are able to pass config variables at that point.

**`server/config/default.json`**
```json
{
  "package": "your-package",
  "config": {
    "title": "MY METHOD"
  }
}
```

This config is available within the constructor method:

**`your-package/index.js`**
```js
module.exports = class YourPackage {

  constructor(code, config) {
    this.config = config;
  }

  get title() {
    return this.config.title; // returns 'MY METHOD'
  }
}
```
