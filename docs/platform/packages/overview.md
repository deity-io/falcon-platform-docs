---
id: overview
title: Our Packages
sidebar_label: Our Packages
---

Falcon Platform Ships with various `@deity` packages.

- [create-falcon-app](/docs/platform/packages/create-falcon-app)
- [falcon-blog-data](/docs/platform/packages/falcon-blog-data)
- [falcon-blog-extension](/docs/platform/packages/falcon-blog-extension)
- [falcon-client](/docs/platform/packages/falcon-client)
- [falcon-data](/docs/platform/packages/falcon-data)
- [falcon-dev-tools/babel-preset-falcon-client](/docs/platform/packages/babel-preset-falcon-client)
- [falcon-dev-tools/eslint-config-falcon](/docs/platform/packages/eslint-config-falcon)
- [falcon-dev-tools/falcon-i18n-webpack-plugin](/docs/platform/packages/falcon-i18n-webpack-plugin)
- [falcon-dev-tools/falcon-scripts](/docs/platform/packages/falcon-scripts)
- [falcon-dev-tools/normal-module-override-webpack-plugin](/docs/platform/packages/normal-module-override-webpack-plugin)
- [falcon-errors](/docs/platform/packages/falcon-errors)
- [falcon-front-kit](/docs/platform/packages/falcon-front-kit)
- [falcon-i18n](/docs/platform/packages/falcon-i18n)
- [falcon-logger](/docs/platform/packages/falcon-logger)
- [falcon-magento2-api](/docs/platform/packages/falcon-magento2-api)
- [falcon-payment-plugin](/docs/platform/packages/falcon-payment-plugin)
- [falcon-server-env](/docs/platform/packages/falcon-server-env)
- [falcon-server](/docs/platform/packages/falcon-server)
- [falcon-service-worker](/docs/platform/packages/falcon-service-worker)
- [falcon-shop-data](/docs/platform/packages/falcon-shop-data)
- [falcon-shop-extension](/docs/platform/packages/falcon-shop-extension)
- [falcon-theme-editor](/docs/platform/packages/falcon-theme-editor)
- [falcon-ui-kit](/docs/platform/packages/falcon-ui-kit)
- [falcon-ui](/docs/platform/packages/falcon-ui)
- [falcon-wordpress-api](/docs/platform/packages/falcon-wordpress-api)
- [payment/falcon-adyen-plugin](/docs/platform/packages/falcon-adyen-plugin)
- [payment/falcon-paypal-plugin](/docs/platform/packages/falcon-paypal-plugin)

There are a few naming convensions that will help you understand each package.

- `[PACKAGE]-[SERVICE]-api` Packages named this way connect to APIs. An example is `falcon-wordpress-api`
- `[PACKAGE]-[TYPE]-extension` These packages handle data from APIs. `TYPE` referes to the data type e.g. `blog` or `shop`.
- `[PACKAGE]-[TYPE]-data` These packages handle the data from `extension` packages. They usually contain components that pass a GraphQL query to the extension package. `TYPE` is the data type, e.g. `blog`.
- `[PACKAGE]-[TYPE/SERVICE]-plugin` These packages usually extend their corresponding extension. 
