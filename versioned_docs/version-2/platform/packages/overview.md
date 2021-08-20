---
id: overview
title: Our Packages
sidebar_label: Our Packages
---

Falcon Platform Ships with various `@deity` packages.

- [create-falcon-app](create-falcon-app)
- [falcon-blog-data](falcon-blog-data)
- [falcon-blog-extension](falcon-blog-extension)
- [falcon-client](falcon-client)
- [falcon-data](falcon-data)
- [falcon-dev-tools/babel-preset-falcon-client](babel-preset-falcon-client)
- [falcon-dev-tools/eslint-config-falcon](eslint-config-falcon)
- [falcon-dev-tools/falcon-i18n-webpack-plugin](falcon-i18n-webpack-plugin)
- [falcon-dev-tools/falcon-scripts](falcon-scripts)
- [falcon-dev-tools/normal-module-override-webpack-plugin](normal-module-override-webpack-plugin)
- [falcon-errors](falcon-errors)
- [falcon-front-kit](falcon-front-kit)
- [falcon-i18n](falcon-i18n)
- [falcon-logger](falcon-logger)
- [falcon-magento2-api](falcon-magento2-api)
- [falcon-payment-plugin](falcon-payment-plugin)
- [falcon-server-env](falcon-server-env)
- [falcon-server](falcon-server)
- [falcon-service-worker](falcon-service-worker)
- [falcon-shop-data](falcon-shop-data)
- [falcon-shop-extension](falcon-shop-extension)
- [falcon-theme-editor](falcon-theme-editor)
- [falcon-ui-kit](falcon-ui-kit)
- [falcon-ui](falcon-ui)
- [falcon-wordpress-api](falcon-wordpress-api)
- [payment/falcon-adyen-plugin](falcon-adyen-plugin)
- [payment/falcon-paypal-plugin](falcon-paypal-plugin)

There are a few naming convensions that will help you understand each package.

- `[PACKAGE]-[SERVICE]-api` Packages named this way connect to APIs. An example is `falcon-wordpress-api`
- `[PACKAGE]-[TYPE]-extension` These packages handle data from APIs. `TYPE` referes to the data type e.g. `blog` or `shop`.
- `[PACKAGE]-[TYPE]-data` These packages handle the data from `extension` packages. They usually contain components that pass a GraphQL query to the extension package. `TYPE` is the data type, e.g. `blog`.
- `[PACKAGE]-[TYPE/SERVICE]-plugin` These packages usually extend their corresponding extension. 
