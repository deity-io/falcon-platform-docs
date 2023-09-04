---
id: static-files
title: Static Files
sidebar_label: Static Files
---

If you want a static file, such as `robots.txt` or your `favicon.png` to be added to your build directory you simply need to  add it to the `client/public` directory. This will then be accessible from your root directory e.g. `https://your-site/robots.txt`.


```
Your_App
  |-client
    |-public
      robots.txt
      favicon.png
  |-server
```
