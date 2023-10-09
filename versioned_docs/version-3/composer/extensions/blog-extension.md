---
id: blog-extension
title: Blog extension in Deity Composer
description: Blog extension
sidebar_label: Blog extension
enterprise_only: true
---

import CodePackage from '@site/src/components/CodePackage';
import Badge from '@site/src/components/Badge';

import { Card, CardContent } from '@site/src/components/Card';
import LogoImg from '/img/logo.svg';

import NoticeV3 from "../../includes/upgrade-to-v3.mdx"

# Blog extension



<CodePackage name="@deity/falcon-blog-extension" /> 


This extension provides basic features for blog implementation:

- Posts
- Pages
- Categories
- Authors

## Available integrations

<div className="flex">
  <Card to="/docs/integrations/contentful">
    <div className="round-icon">
      <img src="/docs/img/icons/contentful.svg" />
    </div>
    <h4>Contentful</h4>
    <p>Build captivating experiences that stand out with the intelligent composable content platform.</p>
  </Card>
  <Card to="/docs/integrations/wordpress">
    <div className="round-icon">
      <img src="/docs/img/icons/wordpress.svg" />
    </div>
    <h4>Wordpress</h4>
    <p>Build and grow your website with the best way to WordPress. </p>
  </Card>
</div>


## Usage

To add this extension to your Falcon-based app install it in the server directory:

<!--DOCUSAURUS_CODE_TABS-->

<!--npm-->

```bash
# installs blog extension
npm install --save @deity/falcon-blog-extension
```

<!--Yarn-->

```bash
# installs blog extension
yarn add @deity/falcon-blog-extension
```

<!--END_DOCUSAURUS_CODE_TABS-->

and add extension and module (in this example it's [WordPress module](../modules/wordpress-module)) to the configuration of the server:

```js
{
  "extensions": {
    // enable blog extension by adding it under "extensions"
    "blog": {
      "package": "@deity/falcon-blog-extension",
      "module": "foo-module", // must match an API Provider name set in "apis" object below
      "config": {
      }
    }
  },
  "modules": {
    "wordpress": { // must match "extension.module" from blog extension configuration
      "package": "@deity/falcon-wordpress-module",
      "config": {
        "host": "your-wordpress-host.com"
      }
    }
  }
}
```