# DEITY Documentation

## Overview

This repository contains the documentation for DEITY services, including DEITY cloud, Falcon Client and Falcon Server.


## How the docs work

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn

# or

$ pnpm i
```

### Local Development

```
$ yarn start

# or

$ pnpm start 
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build

# or 

$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy

# or 

$ GIT_USER=<Your GitHub username> USE_SSH=true pnpm deploy

```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
