---
id: sort
title: Sort order in Deity Payments
sidebar_label: Sort order
---

# Sort order

## Overview

The sort order can be configured per method, per environment and per country.

## How to configure sort orders

All payment method config can be done via our `dcloud` cli tool.

### Configuration Options

Sort orders should be passed as an array.  Each sort order can have a `countries` argument associated with it. This means you can make the sort order country specific. 

Sort orders go from low to high, meaning 0 will appear first. If no sort order data is passed `999` is assumed. This will push non configured methods behind configured methods.

`*` represents all countries.


```json
"sortOrder": [
  {
    "countries": [
      "NL"
    ],
    "sortOrder": 0
  },
  {
    "countries": [
      "FR"
    ],
    "sortOrder": 10
  }
],
```
In the example above the method has a sort order of 0 for the Netherlands, 10 in France and 999 everywhere else. 
