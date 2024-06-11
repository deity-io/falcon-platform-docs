---
id: falcon-blog-data
title: '@deity/falcon-blog-data'
sidebar_label: '@deity/falcon-blog-data'
---

This extension get data from [`@detiy/falcon-blog-extension`](platform/resources/packages/falcon-blog-extension).

It includes GraphQL queries for blog data (Post and PostList)

## PostQuery

This expects `path` which is the path of the blog post

```js
query BlogPost($path: String!) {
  blogPost(path: $path) {
    title
    date
    content
    image {
      url
      description
    }
  }
}
```

## PostListQuery

The blog list expects, but doesn't require a pagniation object as a parameter.

**Pagination Object**

```js
const pagination = {
  perPage: [ITEMS_PER_PAGE],
  page: [CURRENT_PAGE]
};
```

```js
query BlogPosts($pagination: PaginationInput) {
  blogPostList(pagination: $pagination) {
    items {
      title
      date
      slug
      excerpt
      image {
        url
        description
      }
    }
    pagination {
      currentPage
      nextPage
      prevPage
      perPage
      totalPages
    }
  }
}
```
