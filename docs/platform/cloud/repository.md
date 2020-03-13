---
id: repository
title: Code repository
sidebar_label: Code repository
---

Our cloud platform will need access to your code repository.  We use an **SSH key** for access and **web hooks** to allow us to watch for code changes.

We currently support <a href="https://github.com/" target="_blank" rel="noreferrer noopener">GitHub</a>, <a href="https://bitbucket.org/" target="_blank" rel="noreferrer noopener">BitBucket</a> or <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer noopener">GitLab</a>.

We'll only need **read access** to do our thing.

## Getting your details

Running `repo:list -i` will list all your linked repositories and the **web hook** & **SSH key** you'll need to add.

```javascript
dcloud repo:list -i
```
---
## GitHub

### Adding an SSH Key

- Go to `https://github.com/<accountName>/<repoName>/settings/keys/new`
- Add your key

![GitHub SSH access](/img/docs/cloud/github-ssh-key.png)

### Adding a web hook

- Go to `https://github.com/<accountName>/<repoName>/settings/hooks/new`
- Add the webhook provided by `dcloud repo:list -i`.

![GitHub WebHook](/img/docs/cloud/github-webhook.png)

---
## Bitbucket

### Adding an SSH Key

- Go to `https://bitbucket.org/<accountName>/<repoName>/admin/access-keys/`
- Add your key

![BitBucket SSH access - add](/img/docs/cloud/bitbucket-ssh-key-2.png)

### Adding a web hook

Coming soon

---
## GitLab

### Adding an SSH Key

- Go to `https://gitlab.com/<accountName>/<repoName>/-/settings/repository`
- Open the **Deploy keys** section
- Add your key

![GitLab SSH access](/img/docs/cloud/gitlab-ssh-key.png)

### Adding a web hook

Coming soon

## Setup Complete

That's everything done. You're now ready to start using Deity Cloud. View the full list of `dcloud` [commands](dcloud).
