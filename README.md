# 🏡 InnerSource for Newbies 🤷‍♂️

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./docs/CODE_OF_CONDUCT.md)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/rmarting/innersource-for-newbies)
[![👷 Markdown Link](https://github.com/rmarting/innersource-for-newbies/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/rmarting/innersource-for-newbies/actions/workflows/markdown-lint.yml)
[![🔖 Publish Release 🔖](https://github.com/rmarting/innersource-for-newbies/actions/workflows/publish-release.yml/badge.svg)](https://github.com/rmarting/innersource-for-newbies/actions/workflows/publish-release.yml)

## 🌟 Mission

Do you know anything about InnerSource? Or are you newbie in this space?

The mission of this repository is to serve as a comprehensive resource for individuals new to InnerSource concepts.
We aim to provide a clear and accessible introduction to the principles, patterns, and practices of InnerSource
collaboration. Our goal is to empower beginners to understand the fundamentals of InnerSource,
its relevance in modern software development environments, and the benefits it offers.
We welcome contributions that enhance clarity, expand content coverage, and offer practical insights
to support newcomers on their journey to mastering InnerSource methodologies.

![InnerSource for Newbies](./docs/images/innersource-for-newbies.jpeg)

## 🏁 Getting Started

This repository was created on top of two amazing frameworks to publish content easily:

* [docsify](https://docsify.js.org/) - Building the main content site
* [reveal.js](https://revealjs.com/) - Presenting professional content

The content of this site is located at [docs](./docs/) folder following the standard configuration of both frameworks.

To start locally your own server and serve the content:

```shell
npm install -g docsify-cli@latest
docsify serve docs
```

The content will be available at [http://localhost:3000](http://localhost:3000).

## 🛈 Further information

The content is mostly created using [Markdown](https://www.markdownguide.org/) syntax, so you do not need
to use HTML, JavaScript or other languages to prepare the content of this site. Easy, right?

**docsify** is used to generate the main structure of the content, including a sidebar with links to the
main sections, and **reveal.js** is used to create slides for some topics linked from the main site. Both
frameworks are integrated creating an unique experience for the reader improving the quality of the learning
and presenting the content easily and usefully for anyone.

Upgrading the frameworks to the latest versions should be done following the official documentation.

## 🆘 Getting help

If you are in troubles, do not worry, we are an InnerSource community that means that we are here
to support you. Please, open an issue describing your issue and we will take care of it.

## ⛙ Getting Involved

**Want to contribute?** Great! We try to make it easy, and all contributions, even
the smaller ones, are more than welcome. This includes bug reports, fixes, documentation, examples...
But first, read our [Contribution Guide](./docs/CONTRIBUTING.md).

We are interested in building the community; we would welcome any thoughts or patches. You can
reach us on by our [communication channels](./docs/CONTACT.md).

## 📍 Releases

This project follows the [Semantic Versioning](https://semver.org/spec/v2.0.0.html) to release
versions of this repository. The [changelog](./CHANGELOG.md) file contains a curated,
chronologically ordered list of notable changes for each version of this project.

Realising a new version only requires to push a new tag following the
`v[0-9]+.[0-9]+.[0-9]+` pattern (e.g: `v0.1.0`, `v0.1.1`...).

The [release-drafter.yml](.github/workflows/release-drafter.yml) workflow is triggered once
the new tag is pushed and create the new release. This workflow is based on the
[Release Drafter](https://github.com/marketplace/actions/release-drafter) GitHub action, automating
the creation of the release, including the update of the Change Log file.

## Publishing content

The content of this repo is designed to be published easily using capabilities as [GitHub Pages](https://pages.github.com/).

In the case those capabilities are not available, there is a [`Containerfile`](./Containerfile)
to build an image and deploy that image as an application in any container orchestrator such
as [Kubernetes](https://kubernetes.io/) or [Red Hat OpenShift](https://developers.redhat.com/products/openshift/overview).

## Using this content internally

This is a repository that it can be used as a template, just download it as a zip file and integrate into your
internal infrastructure. Don't hesitate to contact us to get help or support.
