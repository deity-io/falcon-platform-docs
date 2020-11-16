---
title: Search and filtering
---

> NOTE: at this point filters are implemented only in listings of category products, we're actively working on search api which will provide full search capabilities

> NOTE: this section will be updated in the near feature because we're going to provide more options so you'll be able to configure search on a more granular level, including custom serializing of search state to url, enabling and disabling search based on custom rules (e.g. when user navigates between pages) and much more.

## Overview

Falcon provides 2 main components that allow you to integrate filters:

- `SearchProvider` which takes care of the management of the search state. It provides search-related API as `SearchConfig`, keeps track of search configuration, used filters, sort order and pagination. It also updates url and history state when search parameters change, and restores search configuration when user navigates back/forward. All those things give us the possibility to perform search requests without page reloading while keeping url synchronized with the current state of the search.
- `SearchConsumer` which exposes the API provided by `SearchProvider`

## SearchConfig data

SearchConfig data is the object that `SearchProvider` provides via `SearchConsumer`. That object contains API that allows you to interact with search. It contains the following entries:

### `setFilter(field: string, value: string[], operator: string)`

Enables filtering by passed field.

- `field` - name of the field that should be used for filtering
- `value` - array of string values for the field (single values should be passed as array with one entry)
- `operator` - search operator (`eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `in`, `nin`, `range`)

### `removeFilter(field: string)`

Removes filter for passed field

- `field` - name of the field

### `setPagination(pagination: { page: number; perPage: number })`

Sets pagination for the search

### `setSortOrder(sort: { field: string; direction: string })`

Sets sort order for the search

### `availableSortOrders: { name: string; field: string; direction: field }[]`

Array of available search orders

### `state`

Current search configuration containing the following fields:

- `filters: { field: string; operator: string; value: string[] }[]` - array with currently enabled filters
- `sort: { name: string; field: string; direction: field }` - currently set sort option (if nothing was set yet then it will contain default sort option)
- `pagination: { page: number; perPage: number }` - current pagination configuration

## Usage

`SearchProvider` and `SearchConsumer` are directly related to GraphQL queries sent to the backend to fetch the data. So the following list outlines search/filtering relations:

1. GraphQL client fetches products list for particular category. Results of the execution of that query contains also field `aggregations` that inform you about available filters for particular category.
2. Based on those results you should render UI for filers
3. When user presses a filter (e.g. selects a color) you need to set filter value via `search.setFilter()` provided by `SearchConsumer`
4. To mark currently selected filters you have to combine data from `aggregations` with data provided by `SearchConsumer`

### Code samples

We recommend to put `SearchProvider` component in the way that it wraps all the components that might want to use search and filters.

```jsx
import { SearchProvider, AppLayout } from "@deity/falcon-ecommerce-uikit";

<SearchProvider>
  <AppLayout>{/* rest of your application */}</AppLayout>
</SearchProvider>;
```

Then render `SearchConsumer` in the place where you need to read current search state, or modify it:

```jsx
import { SearchConsumer, CategorySearchQuery } from '@deity/falcon-ecommerce-uikit';
import { Checkbox, Label } from '@deity/falcon-ui';

<SearchConsumer>
  { search =>
    <CategorySearchQuery
      variables={
        categoryId: '25',
        filters: search.state.filters // passing filters to category query
      }
    >
      { category => {
        const { products: { items, aggregations } } = category;

        console.log('category products', items);
        console.log('available aggregations', aggregations);
        console.log('currently enabled filters:', search.state.filters);

        return (
          <div>
            { /* checkbox that toggles color filter */ }
            <Checkbox
              id="color-filter"
              onChange={ ev => ev.target.checked ? search.setFilter('color', '10', 'eq') : search.removeFilter('color') } />
            <Label htmlFor="color-filter">color filter</Label>
            {/* category view code - rendering products, aggregations etc */}
          </div>
        );
      }}
    </CategorySearchQuery>
  }
</SearchConsumer>
```

#### Explanation:

When user clicks on checkbox then `search.setFilter('color', '10', 'eq')` or `search.removeFilter('color')` is called (based on the checkbox state). That sets or removes filter value inside `SearchProvider`. `SearchProvider` updates url, browser history and properties that will be passed to `SearchConsumer`. `SearchConsumer` exposes updated properties which are passed to `CategoryProductsQuery` (so filtered products are fetched) and to the rendering code (so filters can be rendered correctly).
