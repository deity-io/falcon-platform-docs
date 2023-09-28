---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

## 1. Prerequisites

You must have a wordpress instance up and running.

## 2. Install our plugin

Now you must install our Wordpress Plugin. If you download the code into your `plugins` directory you should then be able to **activate** it in the admin.

<img src="/docs/img/docs/platform/wordpress-admin-2.png" alt="Wordpress Admin" width="300" style={{marginBottom: 20}}/>

If it's working you should see our handy 'Clean API cache' button in your admin panel.

## 3. Create your Falcon app

Using `create-falcon-app` you now need to create a falcon instance. We recommend using `demo-v2` as a starting point.

## 4. Add your Wordpress configuration

All you need to do is add your sites URL and you're away.

```json
{
  "apis": {
    "wordpress": {
      "config": {
        "host": "WORDPRESS_API_HOST",
        "protocol": "WORDPRESS_API_PROTOCOL",
        "apiPrefix": "WORDPRESS_API_PREFIX"
      }
    }
  }
}

```

### Deity Cloud Environment Variables

- `WORDPRESS_API_HOST` - defaults to our demo instance `wordpress.deity.io`
- `WORDPRESS_API_PROTOCOL` - defaults to `https`
- `WORDPRESS_API_PREFIX` - defaults to `/wp-json/wp/v2`


## 5. Finished

That's it. If you're using our example app (`demo-v2`) then you should see your latest posts appear on your Falcon Platform apps homepage.
