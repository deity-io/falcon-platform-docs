---
id: data
title: Data Management
sidebar_label: Data Management
---


This page covers how to query and update data. If you're looking for information about local state managemment or ways to combine queries to the server with client-side queries, you can read more about that [here](../falcon-client/local-state-management).

Falcon comes with [Apollo Client](https://www.apollographql.com/docs/react/v2.5/api/apollo-client/) for client-side state management when you use [`create-falcon-app`](../getting-started/installation#create-falcon-app) to generate a new application. Apollo Client will be pre-configured and does not require any additional setup. You can start using it right away.

## The short version

If you already know how to use Apollo Client, you pretty much know how to use it with Falcon. If you need a refresher, continue to the [long version](#the-long-version) or the [Apollo documentation](https://www.apollographql.com/docs/react/v2.5/essentials/get-started/). We also provide a few [additional components](#falcons-additional-components) you can use.

### Fetching and sending data from and to the server

Falcon extends and is compatible with Apollo's standard `Query` and `Mutation` components.

## Falcon's additional components

Falcon comes with a few pre-defined queries and mutations when you create a project with [`create-falcon-app`](../getting-started/installation#create-falcon-app). These are primarily from our `@deity/falcon-front-kit` package and can be of great use when starting out with an eCommerce application with an integrated blog.

Something you will see in our optional components is a custom `Query` component with the query added as a default prop. This can come in handy if you use the same query in multiple files.

```jsx
export class CustomerQuery extends Query {
  static defaultProps = {
    query: GET_CUSTOMER
  };
}
```

You can also use our wrapper `Query` component, which extends Apollo's `Query` component. The wrapper component will handle loading and error states for you. You can use our `Query` component in the same way you would use the Apollo Client version.

```jsx
import { GET_BLOG_POST } from "./my-queries";
import { Query } from "@deity/falcon-data";

export class BlogPostQuery extends Query {
  static defaultProps = {
    query: GET_BLOG_POST
  };
}
```

## The long version

This will go in-depth about how to use Apollo for managing the client state of your Falcon application.

If you're unfamiliar with GraphQL queries it is recommended to check out [this guide](https://graphql.org/learn/queries/).

### Fetching data (Query component)

The `Query` API is pretty simple if you're familiar with React and the [Render Props](https://reactjs.org/docs/render-props.html) pattern.

React will call the render prop function you provide with an object from Apollo Client containing `loading`, `error`, and `data` properties that you can use to render your UI.

```jsx
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_PRODUCT = gql`
  query Product($id: ID!, $path: String!) {
    product(id: $id) {
      name
      description
      price {
        regular
        special
      }
      gallery {
        full
        thumbnail
      }
    }
  }
`;

class ProductQuery extends Query<ProductResponse> {
  static defaultProps = {
    query: GET_PRODUCT,
    fetchPolicy: "cache-and-network"
  };
}

const Product = ({ id, path }) => (
  <ProductQuery variables={{ id, path }}>
    {({ loading, error, data: { product } }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <ProductGallery items={product.gallery} />
          <H1>{product.name}</H1>
          <p>{product.description}</p>
          <ProductPrice {...product.price} fontSize="xl" />
          <ProductTierPrices items={product.tierPrices} />
        </div>
      );
    }}
  </ProductQuery>
);
```

The `Query` component subscribes to the data through an observable. The result is first checked in the Apollo Client cache. If the result isn't in the cache, it will make a request to the server. When the data is received from the server, it will be stored in the cache.

If you need near real-time data you can read more about that in the [Apollo documentation](https://www.apollographql.com/docs/react/v2.5/essentials/queries/#polling-and-refetching).

If you need to notify the user when you are refetching data or if their network status has changes, you can read more about that in the [Apollo documentation](https://www.apollographql.com/docs/react/v2.5/essentials/queries/#loading-and-error-state).

#### Manually firing a query

```jsx
import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";

class DelayedQuery extends Component {
  state = { product: null };

  onProductFetched = product => this.setState(() => ({ product }));

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.state.product && (
              <img src={this.state.product.gallery.thumbnail} />
            )}
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: GET_PRODUCT,
                  variables: { id: this.props.id, path: this.props.path }
                });
                this.onProductFetched(data.product);
              }}
            >
              Get product photo!
            </button>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}
```

### Sending data (Mutation component)

Here is [a guide about GraphQL mutations](http://graphql.org/learn/queries/#mutations) if you're unfamiliar with GraphQL mutations or would like a refresher. The `Mutation` component uses [render props](https://reactjs.org/docs/render-props.html) just like the `Query` component. If you prefer video, you can also watch [this video about the `Mutation` component by Sara Vieira](https://www.youtube.com/watch?v=2SYa0F50Mb4&feature=youtu.be).

React will call the render prop function you provide with a mutate function and an object with your mutation result containing loading, error, called, and data properties

```jsx
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = "";
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      )}
    </Mutation>
  );
};
```

The mutate function (`addTodo`) optionally takes `variables`, [`optimisticResponse`](https://www.apollographql.com/docs/react/v2.5/features/optimistic-ui/#gatsby-focus-wrapper), `refetchQueries`, and `update`; however, you can also pass in those values as props to the `Mutation` component.

By default mutated data is not immediately reflected in Query components that depend on that piece of data. This is because the `Query` component does not know the `Mutation` component has changed the data. The Apollo cache needs to be updated after a mutation.

Sometimes when you perform a mutation, your GraphQL server and your Apollo cache become out of sync. This happens when the update you're performing depends on data that is already in the cache; for example, deleting and adding items to a list. We need a way to tell Apollo Client to update the query for the list of items.

This is where the `update` function comes in. The `update` function is called with the Apollo cache as the first argument. The cache has several utility functions such as `cache.readQuery` and `cache.writeQuery` that allow you to read and write queries to the cache with GraphQL as if it were a server.

Note: In case of the `update` function, when you call `cache.writeQuery`, the `update` internally calls `broadcastQueries`, so queries listening to the changes will update. Anywhere else, `cache.writeQuery` would just write to the cache, and the changes would not be immediately broadcasted.

See the detailed [caching guide](https://www.apollographql.com/docs/react/v2.5/advanced/caching/) by Apollo for more information about cache methods.

The second argument to the update function is an object with a data property containing your mutation result. If you specify an [optimistic response](https://www.apollographql.com/docs/react/v2.5/features/optimistic-ui/), your update function will be called twice: once with your optimistic result, and another time with your actual result. You can use your mutation result to update the cache with cache.writeQuery.

Here's an example from Apollo's documentation:

```jsx
const GET_TODOS = gql`
  query GetTodos {
    todos
  }
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([addTodo]) }
        });
      }}
    >
      {addTodo => (
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = "";
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      )}
    </Mutation>
  );
};
```

Not every mutation requires an update function. If you're updating a single item, you usually don't need an update function as long as you return the item's `id` and the property you updated. While this may seem like magic, this is actually a benefit of Apollo's normalized cache, which splits out each object with an `id` into its own entity in the cache. If you try updating a todo, you'll notice that the UI updates immediately. Even though we don't plan on using the mutation return result in our UI, we still need to return the `id` and the property we updated in order for our UI to update reactively.

If you'd like to dive deeper into the Apollo cache's normalization strategy, check out their [advanced caching guide](https://www.apollographql.com/docs/react/v2.5/advanced/caching/).

```jsx
const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;
```

#### Loading and error states

In the render prop function, we can destructure `loading` and `error` properties off the mutation result. The `Mutation` component also has `onCompleted` and `onError` props in case you would like to provide callbacks instead. Additionally, the mutation result object also has a `called` boolean that tracks whether or not the mutate function has been called.

## Local state management

Continue reading about managing your local state [here](../falcon-client/local-state-management).

## Additional resources

### Learning GraphQL

- [How to GraphQL](https://www.howtographql.com/)

- [Official GraphQL Learn section](https://graphql.org/learn/)

- [Official GraphQL specification](https://graphql.github.io/graphql-spec/)

