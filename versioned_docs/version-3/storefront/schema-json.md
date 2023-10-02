---
id: schema-json
title: Schema markup / rich results
description: Deity Storefront offers components to provide your app with Schema markup in the form of JSON.
sidebar_label: Schema markup / rich results
---

## Overview

Falcon UI Kit comes complete with a few handy components to provide your app with Schema markup in the form of JSON.

To test your app you can use [Googles rich results testing tool](https://search.google.com/test/rich-results).

For full schema markup docs please see [schema.org](https://schema.org/docs/gs.html).


## Featues

- Organisation
- Product
- Product list
- Blog post
- Blog list


### Organisation schema

[Full docs](https://schema.org/Organization)

Ideally the organisation schema component will be added to your route `App.js` file so it exists on all page.

```js
import { OrganizationSchema } from '@deity/falcon-ui-kit';
import logo from 'src/assets/logo.png';

...

<OrganizationSchema
  logo={logo}
  name="Deity"
  url="https://deity.com"
  sameAs={[
    'https://twitter.com/Deity_pwa',
    'https://www.linkedin.com/company/deity-bv/',
    'https://www.instagram.com/deity_pwa/',
    'https://medium.com/deity-io',
    'https://github.com/deity-io'
  ]}
/>
```

The props expected are:

- `logo` - Path to site logo
- `name` - Site / App name
- `url` - Organisation URL (probably your sites URL)
- `sameAs` - Array or organisation URLs (normally social network links)

### Product schema

[Full docs](https://schema.org/Product)

The product schema should be added to your route product component (`client/src/pages/shop/Product.js` in our example apps).

The product schema expects a `product` prop. This should be an object:

```ts
type product = {
  name: string,
  description: string
  thumbnail: string
  price: string
  sku: string
  urlPath: string
}
```

```js
import { ProductSchema } from '@deity/falcon-ui-kit';
...
<ProductSchema product={product} />
```

### Product list schema

[Full docs](https://schema.org/Product)

The product list uses the product schema but is imported into our `ProductCard` component.

### Blog post schema

[Full docs](https://schema.org/Blog)

The blog post component is added to the root blog post component (`client/src/pages/blog/Post.js` in our example).

It expects 1 prop, `blog`. This should be an object with blog post information:

```ts
type blogSchemaInfo = { 
  title: string,
  image: string,
  date: Date,
  modified: Date,
  excerpt: string,
  author: string,
  slug: string,
  content: string
};
```

```js
import { FormattedDate, Image, BlogPostSchema } from '@deity/falcon-ui-kit';
...
<BlogPostSchema blog={blogSchemaInfo} />
```

### Blog list schema

[Full docs](https://schema.org/Blog)

The blog list schema uses the same component as the blog post but is added to the `BlogPostCard` component.
