---
id: content-models
title: Content models
sidebar_label: Content models
---

To make your contentful space work with the `@deity/falcon-blog-extension` some content models have to be created in your space, those are `Author`, `BlogPost`, `BlogPage` and lastly `BlogCategory`.

To get started login to your contentful space and navigate to **Content Model** in the topbar navigation. Here you can add the following content models;

### Author

Create a content type named `Author` and check if the generated content type id equals `author`. If this is not the case adjust to match `author` and save the model. Add the following fields and save again.

  | Name | Field ID | Field Type | Validation
  | ---- | -------- | ---------- | -
  | Name | name | Short text | -
  | Slug | slug | Short text | -


### Blog Category

Create a content type named `Blog Category` and check if the generated content type id equals `blogCategory`. If this is not the case adjust to match `blogCategory` and save the model. Add the following fields and save again.

  | Name | Field ID | Field Type | Validation
  | ---- | -------- | ---------- | -
  | Name | name | Short text | -

### Blog Page

Create a content type named `Blog Page` and check if the generated content type id equals `blogPage`. If this is not the case adjust to match `blogPage` and save the model. Add the following fields and save again.

  | Name | Field ID | Field Type | Validation
  | ------- | -------- | ---------- | --
  | Title | title | Short text | -
  | Slug | slug | Short text | -
  | Content | content | Rich text | -
  | Image | image | Media | Set accept only specified file types to `Image`
  | Author | author | Reference | Set accept only specified entry type to `Author`

### Blog Post

Create a content type named `Blog Post` and check if the generated content type id equals `blogPost`. If this is not the case adjust to match `blogPost` and save the model. Add the following fields and save again.

  | Name | Field ID | Field Type | Validation
  | ---------- | ---------- | ---------------- | --
  | Title | title | Short text | -
  | Slug | slug | Short text | -
  | Content | content | Rich text | -
  | Image | image | Media | Set accept only specified file types to `Image`
  | Author | author | Reference | Set accept only specified entry type to `Author`
  | Categories | categories | References, many | Set accept only specified entry type to `Blog Category`

