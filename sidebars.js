module.exports = {
      "home": [
    {
      "type": "category",
      "label": "Platform",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "platform"
        },
        {
          "type": "doc",
          "id": "platform/key-concepts"
        },
        {
          "type": "doc",
          "label": "Getting Started",
          "id": "platform/getting-started/overview"
        }
      ]
    },
    {
      "type": "category",
      "label": "Sections",
      "items": [
        {
          "type": "doc",
          "label": "Commerce Composer",
          "id": "composer",
          "customProps": {
            "icon": "composer"
          }
        },
        {
          "type": "doc",
          "label": "PWA & Native Storefronts",
          "id": "storefront",
          "customProps": {
            "icon": "storefront"
          }
        },
        {
          "type": "doc",
          "label": "Payment Orchestrator",
          "id": "payments",
          "customProps": {
            "icon": "payments"
          }
        },
        {
          "type": "doc",
          "label": "Cloud Console",
          "id": "console",
          "customProps": {
            "icon": "console",
            "label": "new"
          }
        },
        {
          "type": "doc",
          "label": "Orchestrator",
          "id": "orchestrator",
          "customProps": {
            "icon": "orchestrator"
          }
        },
        {
          "type": "doc",
          "label": "Integrations",
          "id": "integrations",
          "customProps": {
            "icon": "integrations",
            "count": 14
          }
        }
      ]
    },
    {
      "type": "category",
      "label": "Resources",
      "items": [
        {
          "type": "doc",
          "id": "storefront/resources/app-store"
        },        
        {
          "type": "doc",
          "label": "Tutorials",
          "id": "platform/support/tutorials"
        },
        {
          "type": "doc",
          "label": "Video Guides",
          "id": "platform/support/guides"
        },
        {
          "type": "doc",
          "id": "platform/support/faqs"
        },
        {
          "type": "html",
          "value": "<hr/>"
        },
        {
          "type": "doc",
          "label": "Changelog",
          "id": "platform/changelog",
          "className": "gray-link"
        },
        {
          "type": "doc",
          "id": "platform/support/contact",
          "className": "gray-link"
        },
        {
          "type": "link",
          "label": "Deity.com",
          "href": "https://www.deity.com/",
          "className": "gray-link"
        }
      ]
    }
  ],
  "platform": [
    {
      "type": "category",
      "label": "Platform",
      "className": "icon platform",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "platform"
        },
        {
          "type": "doc",
          "id": "platform/key-concepts"
        }
      ]
    },
    {
      "collapsed": false,
      "collapsible": true,
      "link": {"type": "doc", "id": "platform/getting-started/overview"},
      "type": "category",
      "label": "Getting Started",
      "items": [
        {
          "type": "doc",
          "id": "platform/getting-started/sign-up"
        },
        {
          "type": "doc",
          "id": "platform/getting-started/new-project"
        },
        {
          "type": "doc",
          "id": "platform/getting-started/access-packages"
        },
        {
          "type": "doc",
          "id": "platform/getting-started/create-application"
        },
        {
          "type": "doc",
          "id": "platform/getting-started/link-repository"
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "doc", "id": "platform/integrations"},
      "collapsed": true,
      "label": "Integrations",
      "items": [
        {
          "type": "doc",
          "label": "All Integrations",
          "id": "platform/integrations"
        }
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "category",
      "label": "Resources",
      "collapsible": true,
      "collapsed": true,
      "link": {"type": "generated-index", "slug": "/platform/resources", "title":"Deity Platform resources", "description": "Please select a topic."},
      "items": [
        {
          "type": "doc",
          "label": "Cloud Console",
          "id": "platform/configuration"
        },
        {
          "type": "doc",
          "id": "platform/resources/upgrading"
        },
        {
          "type": "doc",
          "id": "platform/resources/redirects"
        },
        {
          "type": "category",
          "link":{"type":"doc", "id": "platform/resources/packages/overview"},
          "collapsible": true,
          "collapsed": true,   
          "label": "Packages",       
          "items": [
            {
              "type": "doc",
              "id": "platform/resources/packages/babel-preset-falcon-client"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/create-falcon-app"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/eslint-config-falcon"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-adyen-plugin"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-blog-data"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-blog-extension"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-client"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-data"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-errors"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-front-kit"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-i18n-webpack-plugin"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-i18n"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-logger"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-magento2-api"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-payment-plugin"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-paypal-plugin"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-scripts"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-server-env"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-server"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-service-worker"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-shop-data"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-shop-extension"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-theme-editor"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-ui-kit"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-ui"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/falcon-wordpress-api"
            },
            {
              "type": "doc",
              "id": "platform/resources/packages/normal-module-override-webpack-plugin"
            }
          ]
        },
        {
          "type": "doc",
          "label": "Tutorials",
          "id": "platform/support/tutorials"
        },
        {
          "type": "doc",
          "id": "platform/support/faqs"
        }
      ]
    },
    {
      "type": "category",
      "label": "Release changelog",
      "collapsible": true,
      "collapsed": true,
      "link": {"type": "generated-index", "slug": "/platform/releases", "title": "Deity Platform release changelog", "description": "Please select a topic."},
      "items": [
        {
          "type": "doc",
          "label": "V3.x.x",
          "id": "platform/changelog"
        },
        {
          "type": "category",
          "label": "V2.x.x",
          "link": {"type":"doc", "id": "platform/release/full-changelog"},
          "collapsible": true,
          "collapsed": true,       
          "items": [
            {
              "type": "doc",
              "id": "platform/release/2-7-18"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-17"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-16"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-15"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-14"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-13"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-12"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-11"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-10"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-9"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-8"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-7"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-6"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-5"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-4"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-3"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-2"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-1"
            },
            {
              "type": "doc",
              "id": "platform/release/2-7-0"
            },
            {
              "type": "doc",
              "id": "platform/release/2-6-5"
            },
            {
              "type": "doc",
              "id": "platform/release/2-6-4"
            },
            {
              "type": "doc",
              "id": "platform/release/2-6-2"
            },
            {
              "type": "doc",
              "id": "platform/release/2-6-0"
            },
            {
              "type": "doc",
              "id": "platform/release/2-5-0"
            },
            {
              "type": "doc",
              "id": "platform/release/2-4-8"
            },
            {
              "type": "doc",
              "id": "platform/release/2-4-6"
            },
            {
              "type": "doc",
              "id": "platform/release/2-4-2"
            },
            {
              "type": "doc",
              "id": "platform/release/2-4-0"
            },
            {
              "type": "doc",
              "id": "platform/release/2-3-1"
            },
            {
              "type": "doc",
              "id": "platform/release/2-3-0"
            }
          ]
        }
      ]
    }
  ],
  "composer": [
    {
      "type": "category",
      "label": "Commerce Composer",
      "className": "icon composer",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "composer"
        },
        {
          "type": "doc",
          "id": "composer/key-concepts"
        }
      ]
    },
    {
      "collapsed": false,
      "collapsible": true,
      "link": {"type": "doc", "id": "composer/getting-started/overview"},
      "type": "category",
      "label": "Getting started",
      "items": [
        {
          "type": "doc",
          "id": "composer/getting-started/sign-up"
        },
        {
          "type": "doc",
          "id": "composer/getting-started/new-project"
        },
        {
          "type": "doc",
          "id": "composer/getting-started/access-packages"
        },
        {
          "type": "doc",
          "id": "composer/getting-started/create-application"
        },
        {
          "type": "doc",
          "id": "composer/getting-started/link-repository"
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/composer/core", "title": "Commerce Composer core concepts", "description": "Please select a topic."},
      "collapsed": true,
      "label": "Core",
      "items": [
        {
          "type": "doc",
          "id": "composer/core/configuration"
        },
        {
          "type": "doc",
          "id": "composer/core/inversion-of-control"
        },
        {
          "type": "doc",
          "id": "composer/core/caching"
        },        
        {
          "type": "doc",
          "id": "composer/core/dynamic-routes"
        },
        {
          "type": "doc",
          "id": "composer/core/mailer"
        },
        {
          "type": "doc",
          "id": "composer/core/geoip"
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "composer/extensions", "title": "Commerce Composer extensions", "description": "Please select a topic."},
      "collapsed": true,
      "label": "Extensions",
      "items": [
        {
          "type": "doc",
          "id": "composer/extensions/about"
        },
        {
          "type": "doc",
          "id": "composer/extensions/extension-scopes"
        },
        {
          "type": "doc",
          "id": "composer/extensions/shop-extension"
        },
        {
          "type": "doc",
          "id": "composer/extensions/search-extension"
        },
        {
          "type": "doc",
          "id": "composer/extensions/blog-extension"
        },
        {
          "type": "doc",
          "id": "composer/extensions/geolocation-extension"
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/composer/common-services", "title": "Commerce Composer common services", "description": "Please select a topic."},
      "collapsed": true,
      "label": "Common services",
      "items": [
        {
          "type": "doc",
          "id": "composer/modules/common-services/data-sources"
        },
        {
          "type": "doc",
          "id": "composer/modules/common-services/event-handlers"
        },
        {
          "type": "doc",
          "id": "composer/modules/common-services/rest-endpoints"
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/composer/modules", "title":"Modules in Commerce Composer", "description": "Please select a topic."},
      "collapsed": true,
      "label": "Modules",
      "items": [
        {
          "type": "doc",
          "id": "composer/modules/about"
        },
        {
          "type": "doc",
          "id": "composer/modules/module-api"
        },
        {
          "type": "doc",
          "id": "composer/modules/bigcommerce-module"
        },
        {
          "type": "doc",
          "id": "composer/modules/magento2-module"
        },
        {
          "type": "doc",
          "id": "composer/modules/algolia-search-module"
        },
        {
          "type": "doc",
          "id": "composer/modules/contentful-module"
        },
        {
          "type": "doc",
          "id": "composer/modules/wordpress-module"
        },
        {
          "type": "doc",
          "id": "composer/modules/custom-module"
        },
        {
          "type": "doc",
          "id": "composer/modules/injectable-services"
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "doc", "id": "composer/integrations"},
      "collapsed": true,
      "label": "Integrations",
      "items": [
        {
          "type": "doc",
          "label": "All Integrations",
          "id": "composer/integrations"
        }
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/composer/resources", "title": "Commerce Composer resources", "description": "Please select a topic."},
      "collapsed": true,
      "label": "Resources",
      "items": [
        {
          "type": "doc",
          "label": "Tutorials",
          "id": "platform/support/tutorials"
        },
        {
          "type": "doc",
          "label": "F.A.Q.",
          "id": "platform/support/faqs"
        }
      ]
    }
  ],
  "storefront": [
    {
      "type": "category",
      "label": "PWA & Native Storefronts",
      "collapsible": false,
      "className": "icon storefront",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "storefront"
        },
        {
          "type": "doc",
          "id": "storefront/key-concepts"
        }
      ]
    },
    {
      "collapsed": false,
      "collapsible": true,
      "link": {"type": "doc", "id": "storefront/getting-started/overview"},
      "type": "category",
      "label": "Getting started",
      "items": [
        {
          "type": "doc",
          "id": "storefront/getting-started/sign-up"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/new-project"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/access-packages"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/create-application"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/link-repository"
        }
      ]
    },
    {
      "type": "category",
      "label": "Building an app",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/storefront/building-an-app", "title": "Building an app", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "storefront/getting-started/cli-commands"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/files"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/configuration"
        },
        {
          "type": "doc",
          "id": "storefront/getting-started/webpack"
        }
      ]
    },
    {
      "type": "category",
      "label": "Creating themes",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/storefront/theming", "title": "Creating themes", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "storefront/theming/overview"
        },
        {
          "type": "doc",
          "id": "storefront/theming/css-mapping"
        },
        {
          "type": "doc",
          "id": "storefront/theming/components"
        },
        {
          "type": "doc",
          "id": "storefront/theming/fonts"
        },
        {
          "type": "doc",
          "id": "storefront/theming/icons"
        },
        {
          "type": "doc",
          "id": "storefront/theming/css-sass"
        }
      ]
    },
    {
      "type": "category",
      "label": "Building experiences",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/storefront/building-experiences", "title": "Building experiences", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "storefront/menu-navbar"
        },
        {
          "type": "doc",
          "id": "storefront/overrides"
        },
        {
          "type": "doc",
          "id": "storefront/routing"
        },
        {
          "type": "doc",
          "id": "storefront/meta-data"
        },
        {
          "type": "doc",
          "id": "storefront/schema-json"
        },
        {
          "type": "doc",
          "id": "storefront/browser-support"
        }
      ]
    },
    {
      "type": "category",
      "label": "Advanced features",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/storefront/advanced", "title": "Advanced features", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "storefront/data"
        },
        {
          "type": "doc",
          "id": "storefront/state"
        },
        {
          "type": "doc",
          "id": "storefront/translations"
        },
        {
          "type": "doc",
          "id": "storefront/code-splitting"
        },
        {
          "type": "doc",
          "id": "storefront/testing"
        },
        {
          "type": "doc",
          "id": "storefront/static-files"
        },
        {
          "type": "doc",
          "id": "storefront/caching"
        }
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/storefront/resources", "title": "PWA & Native Storefronts resources", "description":"Please select a topic."},
      "collapsed": true,
      "label": "Resources",
      "items": [
        {
          "type": "doc",
          "id": "storefront/resources/technical"
        },    
        {
          "type": "doc",
          "id": "storefront/resources/app-store"
        },
        {
          "type": "link",
          "href": "https://falcon-ui.docs.deity.io/",
          "label": "Falcon UI",
          "description": "A library of composable, themable, design-system-driven UI components for React."
        },
        {
          "type": "doc",
          "id": "platform/support/tutorials/storefront/overview"
        },
       {
          "type": "doc",
          "label": "F.A.Q.",
          "id": "platform/support/faqs/storefront"
        }
      ]
    }
  ],
  "payments": [
    {
      "type": "category",
      "label": "Payment Orchestrator",
      "collapsible": false,
      "className": "icon payments",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "payments"
        },
        {
          "type": "doc",
          "id": "payments/key-concepts"
        }
      ]
    },
    {
      "collapsed": false,
      "collapsible": true,
      "link": {"type": "doc", "id": "payments/getting-started/overview"},
      "type": "category",
      "label": "Getting started",
      "items": [
        {
          "type": "doc",
          "id": "payments/getting-started/sign-up"
        },
        {
          "type": "doc",
          "id": "payments/getting-started/new-project"
        },
        {
          "type": "doc",
          "id": "payments/getting-started/access-packages"
        },
        {
          "type": "doc",
          "id": "payments/getting-started/create-application"
        },
        {
          "type": "doc",
          "id": "payments/getting-started/link-repository"
        }
      ]
    },
    {
      "type": "category",
      "label": "Configuration",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/payments/configuration", "title": "Payment Orchestrator configuration", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "payments/configuration/integration-options"
        },
        {
          "type": "doc",
          "id": "payments/configuration/installation"
        },
        {
          "type": "doc",
          "id": "payments/configuration/config"
        },
        {
          "type": "doc",
          "id": "payments/configuration/connect"
        }
      ]
    },
    {
      "type": "category",
      "label": "Payment providers",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/payments/providers", "title": "Configuring payment providers", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "payments/providers/stripe"
        },
        {
          "type": "doc",
          "id": "payments/providers/adyen"
        },
        {
          "type": "doc",
          "id": "payments/providers/mollie"
        },
        {
          "type": "doc",
          "id": "payments/providers/humm"
        },
        {
          "type": "link",
          "label": "Wpay",
          "description": "Documentation coming soon!",
          "href": "#",
          "customProps": {
            "disabled": true,
            "label": "soon!"
          }
        }
      ]
    },
    {
      "type": "category",
      "label": "Payment methods & features",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/payments/methods", "title": "Payment methods & features", "description":"Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "payments/methods/overview"
        },
        {
           "type": "category",
           "label": "Feature configuration",
           "link": {"type": "generated-index", "slug": "/payments/methods/features", "title": "Payment Orchestrator features", "description":"Please select a topic."},
           "collapsible": true,
           "items": [
            {
              "type": "doc",
              "id": "payments/methods/features/currencies"
            },
            {
              "type": "doc",
              "id": "payments/methods/features/locations"
            },
            {
              "type": "doc",
              "id": "payments/methods/features/surcharges"
            },
            {
              "type": "doc",
              "id": "payments/methods/features/min-max-amounts"
            },
            {
              "type": "doc",
              "id": "payments/methods/features/sort"
            }
          ]
         }
      ]
    },
    {
      "type": "category",
      "label": "Usage",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/payments/usage", "title":"Using Payment Orchestrator", "description": "Please select a topic."},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "payments/usage/overview"
        },
        {
          "type": "doc",
          "id": "payments/usage/payment-list"
        },
        {
          "type": "doc",
          "id": "payments/usage/payment-update"
        },
        {
          "type": "doc",
          "id": "payments/usage/stored-payment-list"
        },
        {
          "type": "doc",
          "id": "payments/usage/ui-components"
        }
      ]
    },
    {
      "type": "category",
      "label": "Upgrading",
      "collapsible": true,
      "link": {"type": "doc", "id": "payments/upgrading/overview"},
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "payments/upgrading/overview"
        }
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "category",
      "label": "Releases",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/payments/releases", "title":"Releases & changelog", "description": "Please select a topic."},      
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "label": "Full Changelog",
          "id": "payments/releases/full-changelog"
        },
        {
          "type": "doc",
          "id": "payments/releases/1-0-0"
        }
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "link",
      "label": "API Reference",
      "href": "https://dpsg.deity.cloud/",
      "className": "gray-link"
    }
  ],
  "integrations": [
    {
      "type": "category",
      "label": "Integrations",
      "collapsible": false,      
      "className": "icon integrations",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "integrations"
        }
      ]
    },
    {
      "type": "category",
      "label": "Ecommerce",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/integrations/ecommerce", "title": "Ecommerce integrations", "description": "Please select a topic."},
      "items": [
        {
          "type": "category",
          "label": "Adobe Commerce CE",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/adobe"},
          "items": [
            {
              "type": "doc",
              "id": "integrations/adobe/getting-started"
            },
            {
              "type": "doc",
              "id": "integrations/adobe/features"
            }
          ]
        },
        {
          "type": "category",
          "label": "Commercetools",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/commercetools"},
          "items": [
            {
              "type": "doc",
              "id": "integrations/commercetools/getting-started"
            },
            {
              "type": "doc",
              "id": "integrations/commercetools/features"
            },
            {
              "type": "category",
              "label": "Configuration",
              "collapsible": true,
              "collapsed": true,
              "link": {"type": "generated-index", "slug": "/integrations/commercetools/configuration", "title": "Configuring the Commercetools integration", "description": "Please select a topic."},
              "items": [
                {
                  "type": "doc",
                  "id": "integrations/commercetools/configuration/getting-started"
                },
                {
                  "type": "doc",
                  "id": "integrations/commercetools/configuration/payments"
                }
              ]
            },
            {
              "type": "category",
              "label": "Extending",
              "collapsible": true,
              "collapsed": true,
              "link": {"type": "generated-index", "slug": "/integrations/commercetools/extending", "title":"Extending the Commercetools integration", "description": "Please select a topic."},
              "items": [
                {
                  "type": "doc",
                  "id": "integrations/commercetools/extending/getting-started"
                },
                {
                  "type": "doc",
                  "id": "integrations/commercetools/extending/ctp-client"
                },
                {
                  "type": "doc",
                  "id": "integrations/commercetools/extending/ctp-session"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "BigCommerce",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/bigcommerce"},
          "items": [
            {
              "type": "doc",
              "id": "integrations/bigcommerce/getting-started"
            },
            {
              "type": "doc",
              "id": "integrations/bigcommerce/features"
            },
            {
              "type": "doc",
              "id": "integrations/bigcommerce/technical"
            },
            {
              "type": "doc",
              "id": "integrations/bigcommerce/manual"
            },
            {
              "type": "doc",
              "id": "integrations/bigcommerce/embedded-checkout"
            }
          ]
         
        },
        {
          "type": "link",
          "href": "#",
          "label": "Shopware",
          "description": "Documentation coming soon!",
          "customProps": {
            "disabled": true,
            "label": "soon!"
          }
        }
      ]
    },
    {
      "type": "category",
      "label": "Search",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/integrations/search", "title": "Search engine integrations", "description": "Please select a topic."},      
      "collapsed": true,
      "items": [
        {
        "type": "category",
          "label": "Algolia",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/algolia"},
          "items": [
            {
            "type": "doc",
            "id": "integrations/algolia/getting-started"
            },
            {
            "type": "doc",
            "id": "integrations/algolia/indexing"
            }
          ]
        },
        {
        "type": "category",
          "label": "Unbxd",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/unbxd"},
          "items": [
            {
            "type": "doc",
            "id": "integrations/unbxd/getting-started"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Payments",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/integrations/payments",  "title": "Integrations with payment service providers", "description": "Please select a topic."},        
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "integrations/mollie"
        },
        {
          "type": "doc",
          "id": "integrations/stripe"
        },
        {
          "type": "doc",
          "id": "integrations/adyen"
        },
        {
          "type": "doc",
          "id": "integrations/humm"
        },
        {
          "type": "link",
          "href": "#",
          "label": "Wpay",
          "description": "Documentation coming soon!",
          "customProps": {
            "disabled": true,
            "label": "soon!"
          }
        }
      ]
    },
    {
      "type": "category",
      "label": "Promotions & loyalty",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/integrations/promotions", "title": "Integrations with promotion & loyalty platforms", "description": "Please select a topic."},         
      "collapsed": true,
      "items": [
        {
          "type": "category",
          "label": "Talon.One",
          "link": {"type": "doc", "id": "integrations/talonone"},
          "collapsible": true,
          "collapsed": true,
          "items": [
            {"type":"doc","id":"integrations/talonone/getting-started"},
            {"type":"doc","id":"integrations/talonone/features"},
            {"type":"doc","id":"integrations/talonone/configuration"},
            {
              "type": "category",
              "label": "Extending Talon.One",
              "collapsible": true,
              "link": {"type": "generated-index", "slug": "/integrations/talonone/extending", "title":"Extending the Talon.One integration", "description": "Please select a topic."},
              "items": [
                {"type":"doc","id":"integrations/talonone/extending/module"},
                {"type":"doc","id":"integrations/talonone/extending/client"},
                {"type":"doc","id":"integrations/talonone/extending/datasource"},
                {"type":"doc","id":"integrations/talonone/extending/data-mappers"},
                {"type":"doc","id":"integrations/talonone/extending/event-handlers"},
                {"type":"doc","id":"integrations/talonone/extending/track-events"}
              ]
            }
          ]
        }
      ]
    },       
    {
      "type": "category",
      "label": "CMS",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/integrations/cms", "title": "CMS integrations", "description": "Please select a topic."},       
      "collapsed": true,
      "items": [
        {
          "type": "category",
          "label": "Contentful",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/contentful"},
          "items": [
            {
              "type": "doc",
              "id": "integrations/contentful/getting-started"
            },
            {
              "type": "doc",
              "id": "integrations/contentful/content-models"
            }
          ]
        },
        {
          "type": "category",
          "label": "Wordpress",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc", "id": "integrations/wordpress"},
          "items": [
            {
              "type": "doc",
              "id": "integrations/wordpress/getting-started"
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Custom integration",
      "collapsible": true,
      "link": {"type": "doc", "id": "integrations/custom"},       
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "label": "Example integration",
          "id": "integrations/custom/jsonplaceholder"
        }
      ]
    },
    {
      "type": "html",
      "value": "<hr/>"
    },

    {
      "type": "category",
      "collapsible": true,
      "link": {"type": "generated-index", "slug": "/integrations/resources", "title":"Integration resources", "description": "Please select a topic."},         
      "collapsed": true,
      "label": "Resources",
      "items": [
        {
          "type": "doc",
          "id": "platform/support/tutorials/integrations/overview"
        },
        {
          "type": "doc",
          "id": "platform/support/faqs"
        }
      ]
    }
  ],
  "console": [
    {
      "type": "category",
      "label": "Cloud Console",
      "collapsible": false,
      "className": "icon console",
      "items": [
        {
          "type": "doc",
          "label": "Overview",
          "id": "console"
        },
        {
          "type": "doc",
          "id": "console/key-concepts"
        }
      ]
    },
    {
      "type": "category",
      "label": "Getting started",
      "collapsible": true,
      "collapsed": false,
      "items": [
        {
          "type": "doc",
          "id": "console/getting-started/sign-up"
        },
        {
          "type": "doc",
          "id": "console/getting-started/new-project"
        },
        {
          "type": "doc",
          "id": "console/getting-started/access-packages"
        },
        {
          "type": "doc",
          "id": "console/getting-started/create-application"
        },
        {
          "type": "doc",
          "id": "console/getting-started/link-repository"
        }
      ]
    },
    
    {
      "type": "category",
      "label": "Projects",
      "collapsible": true,
      "collapsed": true,
      "link": {
          "type": "doc", "id": "console/project-settings"
      },   
      "items": [
        {
          "type": "doc",
          "id": "console/project-settings/overview"
        },
        {
          "type": "doc",
          "id": "console/project-settings/environments"
        },
        {
          "type": "doc",
          "id": "console/project-settings/codebase"
        }
      ]
    },
    {
      "type": "category",
      "label": "Commerce Composer",
      "collapsible": true,
      "collapsed": true,  
      "link": {
          "type": "doc", "id": "console/composer"
      },     
      "items": [
        {
          "type": "doc",
          "id": "console/composer/integrations"
        },
        {
          "type": "doc",
          "id": "console/composer/variables"
        }
      ]
    },
    {
      "type": "category",
      "label": "Payment Orchestrator",
      "collapsible": true,
      "collapsed": true,
      "link": {
          "type": "doc", "id": "console/payments"
      },       
      "items": [
        {
          "type": "doc",
          "id": "console/payments/profiles"
        },
        {
          "type": "doc",
          "id": "console/payments/providers"
        },
        {
          "type": "doc",
          "id": "console/payments/payment-methods"
        }   
      ]
    },
    {
      "type": "category",
      "label": "PWA & Native Storefronts",
      "collapsible": true,
      "collapsed": true,
      "link": {
          "type": "doc", "id": "console/storefront"
      },       
      "items": [
        {
          "type": "doc",
          "id": "console/storefront/domains"
        }
      ]
    },    
    {
      "type": "category",
      "label": "Builds & deployments",
      "collapsible": true,
      "collapsed": true, 
      "link": {
          "type": "doc", "id": "console/builds-deployments"
      },
      "items": [
        {
          "type": "doc",
          "id": "console/builds-deployments/builds"
        },
        {
          "type": "doc",
          "id": "console/builds-deployments/deployments"
        }
      ]
    },  
    {
      "type": "category",
      "label": "Logs",
      "collapsible": true,
      "collapsed": true,  
      "link": {
          "type": "doc", "id": "console/logs"
      },     
      "items": [
        {
          "type": "doc",
          "id": "console/logs/log-entries"
        }
      ]
    },
    {
      "type": "category",
      "label": "Organization",
      "collapsible": true,
      "collapsed": true,
      "link": {
          "type": "doc", "id": "console/organization"
      },
      "items": [ 
        {
          "type": "doc",
          "id": "console/organization/projects"
        },
        {
          "type": "doc",
          "id": "console/organization/billing-details"
        },
        {
          "type": "doc",
          "id": "console/organization/invoices"
        },
        {
          "type": "doc",
          "id": "console/organization/users"
        }
      ]
    },         
    {
      "type": "html",
      "value": "<hr/>"
    },
    {
      "type": "category",
      "label": "Deity Cloud",
      "collapsible": true,
      "collapsed": true,
      "link": {"type": "doc", "id": "console/cloud/about"},
      "items": [
        
        {
          "type": "doc",
          "id": "console/cloud/dcloud"
        }
      ]
    }
  ],
  "support": [
    {
      "type": "category",
      "label": "Support",
      "className": "icon resources",
      "items": [
        {
          "type": "category",
          "label": "Video guides",
          "collapsible": true,
          "collapsed": true,
          "link": {"type": "doc",  "id": "platform/support/guides"},
          "items": [ 
            {
              "type": "doc",
              "id": "platform/support/guides/client"
            },
            {
              "type": "doc",
              "id": "platform/support/guides/cloud"
            }
          ]
        },
        {
          "type": "category",
          "collapsible": true,
          "link": {"type": "doc", "id": "platform/support/tutorials"},
          "collapsed": true,
          "label": "Tutorials",
          "items": [
             {
              "type": "category",
              "collapsible": true,
              "link": {"type": "doc", "id": "platform/support/tutorials/storefront/overview"},
              "collapsed": true,
              "label": "PWA & Native Storefronts",
              "items": [
                {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/change-logo"
                },
                {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/analytics"
                },
                {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/icon"
                },
                {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/themeable-component"
                },
                 {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/scss-global"
                },
                {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/post-css-support"
                },
                {
                  "type": "doc",
                  "id": "platform/support/tutorials/storefront/testing"
                }
              ]
            },
            {
              "type": "category",
              "collapsible": true,
              "link": {"type": "doc", "id": "platform/support/tutorials/integrations/overview"},         
              "collapsed": true,
              "label": "Integrations",
              "items": [
                  {
                    "type": "doc",
                    "id": "platform/support/tutorials/integrations/jsonplaceholder"
                  },
                  {
                    "type": "doc",
                    "id": "platform/support/tutorials/integrations/contentful"
                  },
                  {
                    "type": "doc",
                    "id": "platform/support/tutorials/integrations/contentful2"
                  }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "F.A.Q.",
          "collapsible": true,
          "collapsed": true,
          "link": {
              "type": "doc", "id": "platform/support/faqs"
          },
          "items": [ 
            {
              "type": "doc",
              "label": "General Questions",
              "id": "platform/support/faqs/general"
            },
            {
              "type": "doc",
              "label": "PWA & Native Storefronts",
              "id": "platform/support/faqs/storefront"
            },
            {
              "type": "doc",
              "label": "Commerce Composer",
              "id": "platform/support/faqs/server"
            },
            {
              "type": "doc",
              "label": "Cloud Console",
              "id": "platform/support/faqs/cloud"
            },
            {
              "type": "doc",
              "label": "Integrations",
              "id": "platform/support/faqs/config"
            },
            {
              "type": "doc",
              "label": "Troubleshooting",
              "id": "platform/support/faqs/misc"
            }
          ]
        },
        {
            "type": "html",
            "value": "<hr/>"
          },
           {
            "type": "doc",
            "id": "platform/support/contact",
            "className": "gray-link"
          },
          {
            "type": "link",
            "label": "Deity.com",
            "href": "https://www.deity.com/",
            "className": "gray-link"
          }

      ]
    }
     
  ]
}
