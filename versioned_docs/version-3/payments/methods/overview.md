---
id: overview
title: Payment methods in Deity Payments
sidebar_label: Payment methods
---

# Payment methods

Every payment provider has a specific set of payment methods that it supports. The available methods are listed in the respective `Payment Providers` documentation page. Some payment methods are available for more than one payment provider, which allows you to choose the provider that better fits your needs.


## Payment method configuration

The easiest way to configure a payment method is by using `dcloud` CLI and the `dcloud payments:method:configure` command. If you want to configure it manually, this can be achieved using [this endpoint →](https://dpsg.deity.cloud/#/Payment%20Method/EnvironmentPaymentMethodController_add).


```json
{
  "methodId": "string",
  "enabled": true,
  "config": {
    "title": "string",
    "currencies": [
      "*"
    ],
    "countries": [
      "NL"
    ],
    "sortOrder": [
      {
        "countries": [
          "NL"
        ],
        "sortOrder": 0
      }
    ],
    "surcharge": [
      {
        "countries": [
          "NL"
        ],
        "percentage": 0,
        "fixed": [
          {
            "currency": "*",
            "amount": 0
          }
        ]
      }
    ],
    "minMaxAmounts": [
      {
        "currency": "*",
        "min": 0,
        "max": 0
      }
    ]
  }
}