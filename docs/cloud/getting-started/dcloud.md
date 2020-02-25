---
id: dcloud
title: CLI Commands
sidebar_label: CLI Commands
---

## Build List

List your current builds.

```javascript
dcloud build:list
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

**Example: show 30 results**

```javascript
dcloud build:list -l 30
```

---

## Build Info

Get information on a build.

```javascript
dcloud build:info [id]
```

**Options**
- `-w` Watch a build (if it's not finished)
- `-o` Show build output to the console

**Example: Watch build 20**

```javascript
dcloud build:info 20 -w
```

---

## Deployment List
List your deployments

```javascript
dcloud deployment:list
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

---

## Deployment Info

Get information on a deployment.

```javascript
dcloud deployment:info [id]
```

**Options**
- `-w` Watch a deployment (if it's not finished)
- `-o` Show deployment output to the console

---

## Deploy

Deploy a build

```javascript
dcloud deploy [buildId] [environmentName]
```

**Options**
- `-y` Auto-confirm the deployment process. Useful if you're not deploying manually.

**Example: Deploy build 20 to the development environment**

```javascript
dcloud deploy 20 development
```

---

## Environments List

List all available environments

```javascript
dcloud env:list
```

**Options**
N/A

---

## Environment Info

Get info on a specific environment

```javascript
dcloud env:info <env>
```

**Options**
N/A

---

## Environment Deployments

Get deployments for an environment

```javascript
dcloud env:deployments <env>
```

**Options**
- `-l <limit>` Limit the results
- `-p <page>` Which page of results to show

---

## Environment Variable

Set a variable on an environment

```javascript
dcloud env:var <env> <name> [value]
```

**Options**
N/A

---

## Environment Set Domain

Set the domain for an environment

```javascript
dcloud env:setDomain <env> [domainName]
```

**Options**
N/A

---

## Environment Remove Domain

Remove the domain for an environment

```javascript
dcloud env:removeDomain <env>
```

**Options**
N/A

---

## Repositories List

Get a list of your current/active repositories

```javascript
dcloud repo:list
```

**Options**
- `-i` Show setup instructions for each repository

---

## Login

Logs into DEITY Falcon Cloud using provided credentials. If credentials aren't passed you will be prompted to add them.

```javascript
dcloud login [email] [password]
```

**Options**
N/A

---

## Logout

Logs the current user out

```javascript
dcloud logout
```

**Options**
N/A

---

## Change Password

Change the account password

```javascript
dcloud change-password
```

**Options**
N/A

---

## Who am I

Get the current logged in user

```javascript
dcloud whoami
```

**Options**
N/A
