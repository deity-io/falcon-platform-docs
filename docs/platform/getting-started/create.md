---
id: create
title: Creating your application
sidebar_label: Creating your application
---

To generate a new application based on Falcon Platform, use the following command:

```javascript
npx @deity/create-falcon-app <my-project>
```

In order to start with the <a href="https://demo.deity.io" target="_blank" rel="noreferrer noopener">latest demo</a> theme, use the `--example` flag:

```javascript
npx @deity/create-falcon-app --example new-theme <my-project>
```

:::note Using the new theme?
by default the demo based on "new-theme" assumes it's connected to a **BigCommerce** instance, which uses **Algolia** and **Stripe**. Without these credentials the application will not start (you'll see the errors in the console)
:::
