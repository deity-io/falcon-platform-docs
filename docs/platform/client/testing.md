---
id: testing
title: Testing
sidebar_label: Testing
---

## Mocking `falcon-client`

`falcon-client` exposes `FalconClientMock` component which allows you to setup application context inside unit test environment.
`FalconClientMock` can receive props for mock version of React context provider components used by `falcon-client` internally:

- `apollo: object` - props for `MockProvider` component from `react-apollo`
- `router: object` props for `MemoryRouter` component from `react-router-dom`
- `asyncComponent: object` - props for `AsyncComponentProvider` component from `react-async-component`
- `i18next: object` - props for `I18nextProvider` component from `react-i18next`

example unit test with `FalconClientMock` :

```jsx
import { FalconClientMock } from '@deity/falcon-client/test-utils';

describe('<Component />', () => {
  test('renders without exploding', () => {
    ReactDOM.render(
      <FalconClientMock>
        {
          // your <Component />
        }
      </FalconClientMock>,
      document.createElement('div')
    );
  });
});
```
