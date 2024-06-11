---
id: overview
title: Our Packages
sidebar_label: Our Packages
---

Falcon Platform Ships with various `@deity` packages.

- [create-falcon-app](/platform/resources/packages/create-falcon-app)
- [falcon-blog-data](/platform/resources/packages/falcon-blog-data)
- [falcon-blog-extension](/platform/resources/packages/falcon-blog-extension)
- [falcon-client](/platform/resources/packages/falcon-client)
- [falcon-data](/platform/resources/packages/falcon-data)
- [falcon-dev-tools/babel-preset-falcon-client](/platform/resources/packages/babel-preset-falcon-client)
- [falcon-dev-tools/eslint-config-falcon](/platform/resources/packages/eslint-config-falcon)
- [falcon-dev-tools/falcon-i18n-webpack-plugin](/platform/resources/packages/falcon-i18n-webpack-plugin)
- [falcon-dev-tools/falcon-scripts](/platform/resources/packages/falcon-scripts)
- [falcon-dev-tools/normal-module-override-webpack-plugin](/platform/resources/packages/normal-module-override-webpack-plugin)
- [falcon-errors](/platform/resources/packages/falcon-errors)
- [falcon-front-kit](/platform/resources/packages/falcon-front-kit)
- [falcon-i18n](/platform/resources/packages/falcon-i18n)
- [falcon-logger](/platform/resources/packages/falcon-logger)
- [falcon-magento2-api](/platform/resources/packages/falcon-magento2-api)
- [falcon-payment-plugin](/platform/resources/packages/falcon-payment-plugin)
- [falcon-server-env](/platform/resources/packages/falcon-server-env)
- [falcon-server](/platform/resources/packages/falcon-server)
- [falcon-service-worker](/platform/resources/packages/falcon-service-worker)
- [falcon-shop-data](/platform/resources/packages/falcon-shop-data)
- [falcon-shop-extension](/platform/resources/packages/falcon-shop-extension)
- [falcon-theme-editor](/platform/resources/packages/falcon-theme-editor)
- [falcon-ui-kit](/platform/resources/packages/falcon-ui-kit)
- [falcon-ui](/platform/resources/packages/falcon-ui)
- [falcon-wordpress-api](/platform/resources/packages/falcon-wordpress-api)
- [payment/falcon-adyen-plugin](/platform/resources/packages/falcon-adyen-plugin)
- [payment/falcon-paypal-plugin](/platform/resources/packages/falcon-paypal-plugin)

There are a few naming convensions that will help you understand each package.

- `[PACKAGE]-[SERVICE]-api` Packages named this way connect to APIs. An example is `falcon-wordpress-api`
- `[PACKAGE]-[TYPE]-extension` These packages handle data from APIs. `TYPE` referes to the data type e.g. `blog` or `shop`.
- `[PACKAGE]-[TYPE]-data` These packages handle the data from `extension` packages. They usually contain components that pass a GraphQL query to the extension package. `TYPE` is the data type, e.g. `blog`.
- `[PACKAGE]-[TYPE/SERVICE]-plugin` These packages usually extend their corresponding extension.
