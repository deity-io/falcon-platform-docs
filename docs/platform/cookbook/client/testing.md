---
id: testing
title: Adding a component test
sidebar_label: Testing a component
---

## Overview

We are going to mock a **Falcon Client** component that grabs data from `Apollo`.

## 1. Create your component

We our going to create a simple component that grabs store configuration (using `Apollo`) and renders it on the page.

**`client/src/components/Banner.js`**
```js
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { APP_NAME } from './graphql/appName.gql';

export const Banner = () => {
  const { loading, error, data = {} } = useQuery(APP_NAME);

  if (loading) return 'loading...';
  if (error) return `Error! ${error.message}`;

  const { config = {} } = data;
  const { appName } = config;

  if (appName) {
    return <h1>{appName}</h1>;
  }
  return null;
}
```

**`client/src/components/graphql/appName.gql`**
```js
query APP_NAME {
  config @client {
    appName
  }
}
```

It's worth checking this works on your site. I added the `<Banner />` component and saw the text `falcon-client-demo`.

If that's not working, check you have the config `appName` in your `client/config/default.json`.

**`client/config/default.json`**
```json
{
  "appName": "falcon-client-demo",
  ...
}
```

## 2. Write your first test

### Create the test

Create the file `client/src/components/Banner.test.js`.

Now we are going to add our first test. This test won't test the component but we just want to check out tet file is being run.

**`client/src/components/Banner.test.js`**
```js
describe('<Banner />', () => {
  test('Check test is run', () => {});
})
```

### Run the test

Now from your client directory run the `test` command (`yarn test` or `npm test`).

You should see the following text:

```console
PASS src/components/Banner.test.js
```

Now type `o` from in the same command line window. That will watch for tests that have changed. 

Change the description of the text, save it and you should see the test run again automatically, this time with a little more detail.

```conosle
 PASS  src/components/Banner.test.js
  <Banner />
    ✓ Check test is run
```

## 3. Test our component

Now we are going to test our component and check it does what's expected.

### Test the loading state

The first thing we need to do is check the loading state.  If you're familiar with `Jest` this will look very similar.

**`client/src/components/Banner.test.js`**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { FalconClientMock } from '@deity/falcon-client/test-utils';
import { Banner } from './Banner';

describe('<Banner />', () => {
  let container;

  // Runs before each test https://jestjs.io/docs/en/api#beforeeachfn-timeout
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  // Runs after each test https://jestjs.io/docs/en/api#aftereachfn-timeout
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('Check Loading State', () => {
    const mocks = [
      {
        request: {
          query: gql`
            query APP_NAME {
              config @client {
                appName
              }
            }
          `
        },
        result: {
          data: {},
          error: null,
          loading: true
        }
      }
    ];
    ReactDOM.render(
      <FalconClientMock apollo={{ mocks }}>
        <Banner />
      </FalconClientMock>,
      container
    );
    expect(container.innerHTML).toEqual(expect.stringContaining('loading...'));
  });
});

```

We are testing that the text `loading...` is rendered. In reality you might want to test something less specific.

We use the `apollo` prop with our `<FalconClientMock />` component to **map our GraphQL queries**. This means that we don't need to rely on an API to test our component, it's completely seperated....a **unit test**.

```js
const mocks = [
  {
    request: {
      query: gql`
        query APP_NAME {
          config @client {
            appName
          }
        }
      `
    },
    result: {
      data: {},
      error: null,
      loading: true
    }
  }
];
<FalconClientMock apollo={{ mocks }}>
```

You will notice the mock passes both the query and the result. 

If you go back to your terminal window you should see this test **passing**.

If you want to check it's behaving how you expect you could change the test to make sure it fails if the text **isn't** `loading...`.

```js
expect(container.innerHTML).toEqual(expect.stringContaining('not loading'));
```

### Testing the loaded state

We will also want to write a test to check the loaded state.

You'll notice we are now adding `data` to the `result` in our mock.

```js
...
import { act } from 'react-dom/test-utils';

describe('<Banner />', () => {
  ...
  test('Check rendered content', async () => {
    const wait = require('waait');
    const mocks = [
      {
        request: {
          query: gql`
            query APP_NAME {
              config @client {
                appName
              }
            }
          `
        },
        result: {
          data: { config: { appName: 'hey' } },
          error: null,
          loading: false
        }
      }
    ];
    ReactDOM.render(
      <FalconClientMock apollo={{ mocks }}>
        <Banner />
      </FalconClientMock>,
      container
    );
    await act(async () => {
      await wait(100);
    });
    expect(container.innerHTML).toEqual(expect.stringContaining('<h1>hey</h1>'));
  });
});

```

A few things to note here are the use of [`act`](https://reactjs.org/docs/test-utils.html#act) and [`waait`](https://github.com/wesbos/waait).

`waait` resolves a promise after a set timeout. This allows us to wait for the data to be fetched correctly so we don't get our loading state.

`act` is required when a components state changes / re-render occurs. Without this your test will work but will throw a horrible warning.

You will notice we are testing the `appName` added to `result` in the mock not the true `appName` from our config. This allows us a control and means we can be very specific about what we expect.

```js
expect(container.innerHTML).toEqual(expect.stringContaining('<h1>hey</h1>'));
```

## Finished

That's it, our test is now ready.

## Full Code

Here is the final code for the test file. 

**`client/src/components/Banner.test.js`**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import gql from 'graphql-tag';
import { FalconClientMock } from '@deity/falcon-client/test-utils';
import { Banner } from './Banner';

describe('<Banner />', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('Check test is run', () => {});

  test('Check Loading State', () => {
    const mocks = [
      {
        request: {
          query: gql`
            query APP_NAME {
              config @client {
                appName
              }
            }
          `
        },
        result: {
          data: {},
          error: null,
          loading: true
        }
      }
    ];
    ReactDOM.render(
      <FalconClientMock apollo={{ mocks }}>
        <Banner />
      </FalconClientMock>,
      container
    );
    expect(container.innerHTML).toEqual(expect.stringContaining('loading...'));
  });

  test('Check rendered content', async () => {
    const wait = require('waait');
    const mocks = [
      {
        request: {
          query: gql`
            query APP_NAME {
              config @client {
                appName
              }
            }
          `
        },
        result: {
          data: { config: { appName: 'hey' } },
          error: null,
          loading: false
        }
      }
    ];
    ReactDOM.render(
      <FalconClientMock apollo={{ mocks }}>
        <Banner />
      </FalconClientMock>,
      container
    );
    await act(async () => {
      await wait(100);
    });
    expect(container.innerHTML).toEqual(expect.stringContaining('<h1>hey</h1>'));
  });
});

```
