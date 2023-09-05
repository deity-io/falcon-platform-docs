---
id: files
title: File structure
sidebar_label: File structure
---

## Key Files and Folders

This is **not** a **complete list** of files and folders. Just the **key files** you'll need to know about to get started.

<div class="codeBlock">
client/<br />
    |- <a href="#build">build</a><br />
    |- <a href="#config">config</a><br />
    |- <a href="#i18n">i18n</a><br />
    <a href="#indexjs">index.js</a><br />
    <a href="#moduleOverridejs">moduleOverride.js</a><br />
    |- <a href="#node_modules">node_modules</a><br />
    <a href="#packagejson">package.json</a><br />
    <a href="#prettierconfigjs">prettier.config.js</a><br />
    |- <a href="#public">public</a><br />
    |- src<br />
        <a href="#srcappjs">App.js</a><br />
        |- <a href="#srcassets">assets</a><br />
        |- <a href="#srccomponents">components</a><br />
        <a href="#srcmanifestwebmanifest">manifest.webmanifest</a><br />
        |- <a href="#srcpages">pages</a><br />
        |- styling<br />
            <a href="#srcstylingiconjs">icon.js</a><br />
            <a href="#srcstylingthemejs">theme.js</a><br />
    <a href="#swjs">sw.js</a>
</div>

---

### build
The build directory contains the built assets for your site. This should not be committed to your git repo.

### config
The config directory contains Falcon Client config json files (`default.json`, `production.json` etc). In these files you'll be able to configure things like the port Falcon Client is running on. 

### i18n
This directory contains your sites translations. The structure is `<language>/translations.json`. e.g. `en/translations.json` for english translations.

### index.js
This is where everything starts. Other that exporting the app and client state nothing much happens here.

### moduleOverride.js
From this file you can override components from within node packages. This is create if you want to change a component from `@deity/falcon-ui-kit` for example. [Find out more about overriding](./overrides).

### node_modules
This is where npm packages are installed to.

### package.json
This defines project details including package requirements.

### prettier.config.js
Falcon Platform uses <a href="https://prettier.io/" target="_blank" rel="noreferrer noopener">Prettier</a> for code formatting. You can change the config in this file.

### public
This folder is publicly accessible. You can use it for files such as `robots.txt`.

### src/App.js
This file contains your app. Everything in Falcon Client starts here. A lot happens in this file including mapping components to routes.

### src/assets
This is where static assets live. It's a great place to put files like touch icons and other similar images.

### src/components
This is the home to your global components such as the header.

### src/manifest.webmanifest
This file contains your sites `manifest.json` config.

### src/pages
This is the home to page & page specific components. You'll find most of the checkout and shop components in here.

### src/styling/icon.js
This file exports SVG icons to be used throughout the site. 

### src/styling/theme.js
This file contains your theme variables such as colors and spacing. [More information on theming](./theming/overview). 

### sw.js
This is compiled into your sites service worker. You can add to this if you need custom service worker code.
