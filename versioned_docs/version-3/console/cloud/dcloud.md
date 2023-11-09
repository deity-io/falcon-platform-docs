---
id: dcloud
title: CLI reference
sidebar_label: CLI reference
---

## Build list

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

## Build info

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

## Deployment list
List your deployments

```bash
dcloud deployment:list
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

**Example: show 30 results on the second page**

```bash
dcloud deployment:list -l 30 -p 2
```

---

## Deployment info

Get information on a deployment.

```bash
dcloud deployment [id]
```

**Options**
- `-w` Watch a deployment (if it's not finished)
- `-o` Show deployment output to the console

**Example: show the output of deployment 2**

```bash
dcloud deployment -o 2
```

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

## Environments list

List all available environments

```bash
dcloud env:list
```

**Options**
N/A

---

## Environment info

Get info on a specific environment

```bash
dcloud env <env>
```

**Options**
N/A

---

## Environment deployments

Get deployments for an environment

```bash
dcloud env:deployments <env>
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

---

## Environment variable

Set a variable on an environment

```bash
dcloud env:var:set <env> <name> [value]
```

**Options**
- `-s` or `--secret` encrypt the variable being set

**Example: set the variable API_KEY to 12345 on the test environment and encrypt it**

```bash
dcloud env:var:set -s test API_KEY 12345
```

---

## Environment set domain

Set the domain for an environment

```bash
dcloud env:domain:set <env> [domainName]
```

**Options**
N/A

---

## Environment variables apply

Apply environment variable changes without redeploying your app.

```bash
dcloud env:var:apply ENV_NAME
```

**Options**
N/A

---

## Repositories list

Get a list of your current/active repositories

```bash
dcloud repo
```

**Options**
- `-i` Show setup instructions for each repository

---

## Project info

Get your project information

```bash
dcloud project <name>
```

**Options**
N/A

---

## Projects list

Get a list of your projects

```bash
dcloud project:list
```

**Options**
N/A

---

## Project current

Get the current project

```bash
dcloud project:current
```

**Options**
N/A

---

## Project set current

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

Logs into Deity Falcon Cloud using credentials. If credentials aren't passed you will be prompted to add them.

```bash
dcloud login [email] [password]
```

**Options**
N/A

---

## Login with token

Logs into Deity Falcon Cloud using a token. If a token isn't passed you will be prompted to add one.

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

## Log list

List log including error, warnings and info

```bash
dcloud log:list
```

**Options**
- `--severity=<severity>` Choose the severity of logs you wish to log (`info`, `warning`, `error` or `critical`)
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

**Example: Get the second page of critical logs**

`dcloud log:list --severity=critical -p 2`

---

## Log watch

Watch the logs for an environment

```bash
dcloud log:watch
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
