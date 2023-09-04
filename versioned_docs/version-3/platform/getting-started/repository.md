---
id: repository
title: 6. Code repository
sidebar_label: 6. Code repository
---

The last step is to deploy your changes. For that our cloud platform will need access to your code repository. We use an **SSH key** for access and **web hooks** to allow us to watch for code changes.

We currently support <a href="https://github.com/" target="_blank" rel="noreferrer noopener">GitHub</a>, <a href="https://bitbucket.org/" target="_blank" rel="noreferrer noopener">BitBucket</a> or <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer noopener">GitLab</a>.

We'll only need **read access** to your repo.

## 1. Getting your details

You can get your **SSH key** and **web hook** details using `dcloud`.

Simply run the following command from a terminal window when logged into `dcloud`:

```bash
dcloud repo -i
```

---

### GitHub

#### Adding an SSH Key

- Go to `https://github.com/<accountName>/<repoName>/settings/keys/new`
- Add your key

![GitHub SSH access](/img/docs/cloud/github-ssh-key.png)

#### Adding a web hook

- Go to `https://github.com/<accountName>/<repoName>/settings/hooks/new`
- Add the webhook provided by `dcloud repo:list -i`.

![GitHub WebHook](/img/docs/cloud/github-webhook.png)

---

### Bitbucket

#### Adding an SSH Key

- Go to `https://bitbucket.org/<accountName>/<repoName>/admin/access-keys/`
- Add your key

![BitBucket SSH access - add](/img/docs/cloud/bitbucket-ssh-key-2.png)

#### Adding a web hook

Coming soon

---

### GitLab

#### Adding an SSH Key

- Go to `https://gitlab.com/<accountName>/<repoName>/-/settings/repository`
- Open the **Deploy keys** section
- Add your key

![GitLab SSH access](/img/docs/cloud/gitlab-ssh-key.png)

#### Adding a web hook

Coming soon

### Setup Complete

That's everything done. You're now ready to start using Deity Cloud. View the full list of `dcloud` [commands](../cloud/dcloud).

Next step, [deploy](/platform/deployment/overview) your code.

---

## 2. Check your connection

To check your repository and cloud instance are linked run the following command. Your repo URL should be returned

```bash
dcloud repo
```

## 3. View your builds

Every time you push a commit, a build is triggered. These builds are not 'deployed' automatically but are made available to deploy once they are finished.

To view your builds run

```bash
dcloud build:list
```

## 4. Deploy your code

To deploy a build you can run the command

```bash
dcloud deployment:run [buildId] [environmentName]
```

[More details can be found here](/platform/cloud/dcloud#deploy)
