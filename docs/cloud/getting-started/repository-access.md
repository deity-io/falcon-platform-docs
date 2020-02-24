---
id: repository-access
title: Code repository access
sidebar_label: Code repository access
---

Our cloud platform will need access to your code base.

We currently support <a href="https://github.com/" target="_blank" rel="noreferrer noopener">GitHub</a>, <a href="https://bitbucket.org/" target="_blank" rel="noreferrer noopener">BitBucket</a> or <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer noopener">GitLab</a>.

When you set up a cloud account you will be given an **SSH key**, we will use this to gain access to your repository.

We'll only need **read access** to do our thing. 

## How to add access with GitHub

To add our **SSH key** to <a href="https://github.com/" target="_blank" rel="noreferrer noopener">GitHub</a>, simply visit Settings -> Deploy Keys and add it. The title doesn't matter but you might want to reference it later so we recommend using `Deity Cloud`.

![GitHub SSH access](/static/img/docs/cloud/github-ssh-key.png)


## How to add access with Bitbucket

To add our **SSH key** to <a href="https://bitbucket.org/" target="_blank" rel="noreferrer noopener">BitBucket</a>, visit Settings -> Access Keys -> Add Key. The label doesn't matter but you might want to reference it later so we recommend using `Deity Cloud`.

![BitBucket SSH access settings](/static/img/docs/cloud/bitbucket-ssh-key-1.png)

![BitBucket SSH access - add](/static/img/docs/cloud/bitbucket-ssh-key-2.png)

## How to add access with GitLab

To add our **SSH key** to <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer noopener">GitLab</a> visit Settings -> Repository -> Deploy Keys. The title doesn't matter but you might want to reference it later so we recommend using `Deity Cloud`.

![GitLab SSH access](/static/img/docs/cloud/gitlab-ssh-key.png)
