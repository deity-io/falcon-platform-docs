---
id: dcloud
title: CLI Reference
sidebar_label: CLI Reference
---

## Build List

List your current builds.

```bash
dcloud build:list
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

**Example: show 30 results**

```bash
dcloud build:list -l 30
```

---

## Build Info

Get information on a build.

```bash
dcloud build [id]
```

**Options**
- `-w` Watch a build (if it's not finished)
- `-o` Show build output to the console

**Example: Watch the build with id 20**

```bash
dcloud build 20 -w
```

---

## Deployment List
List your deployments

```bash
dcloud deployment:list
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

---

## Deployment Info

Get information on a deployment.

```bash
dcloud deployment [id]
```

**Options**
- `-w` Watch a deployment (if it's not finished)
- `-o` Show deployment output to the console

---

## Deploy

Deploy a build

```bash
dcloud deployment:run [buildId] [environmentName]
```

**Options**
- `-y` Auto-confirm the deployment process. Useful if you're not deploying manually.

**Example: Deploy build 20 to the development environment**

```bash
dcloud deployment:run 20 development
```

---

## Environments List

List all available environments

```bash
dcloud env:list
```

**Options**
N/A

---

## Environment Info

Get info on a specific environment

```bash
dcloud env <env>
```

**Options**
N/A

---

## Environment Deployments

Get deployments for an environment

```bash
dcloud env:deployments <env>
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

---

## Environment Variable

Set a variable on an environment

```bash
dcloud env:var:set <env> <name> [value]
```

**Options**
- `-s` or `--secret` encrypt the variable being set

---

## Environment Set Domain

Set the domain for an environment

```bash
dcloud env:domain:set <env> [domainName]
```

**Options**
N/A

---

## Environment Variables Apply

Apply environment variable changes without redeploying your app.

```bash
dcloud env:var:apply ENV_NAME
```

**Options**
N/A

---

## Repositories List

Get a list of your current/active repositories

```bash
dcloud repo
```

**Options**
- `-i` Show setup instructions for each repository

---

## Project Info

Get your project information

```bash
dcloud project <name>
```

**Options**
N/A

---

## Projects List

Get a list of your projects

```bash
dcloud project:list
```

**Options**
N/A

---

## Project Current

Get the current project

```bash
dcloud project:current
```

**Options**
N/A

---

## Project Set Current

Set a project as current

```bash
dcloud project:current:set <name>
```

**Options**
N/A

---

## Login

:::note Deprecated
This is deprecated, please use <a href="#login-with-token">Login with Token</a> to log in.  Existing users will be promted to migrate to using a token for logging in.
:::

Logs into DEITY Falcon Cloud using credentials. If credentials aren't passed you will be prompted to add them.

```bash
dcloud login [email] [password]
```

**Options**
N/A

---

## Login with token

Logs into DEITY Falcon Cloud using a token. If a token isn't passed you will be prompted to add one.

```bash
dcloud login:token [token]
```

**Options**
N/A

---

## Logout

Logs the current user out

```bash
dcloud logout
```

**Options**
N/A

---

## Who am I

Get the current logged in user

```bash
dcloud whoami
```

**Options**
N/A
