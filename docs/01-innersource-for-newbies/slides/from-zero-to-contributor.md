<!-- markdownlint-disable -->
# From Zero to Contributor

*The first step of the InnerSource Journey*

------

#### What is a Contributor?

> An individual who participates in an InnerSource project by contributing code, documentation, or expertise to enhance collaboration and innovation

Note:
The Contributor role describes a person that makes contributions to the repos of an InnerSource community project. This person may or may not be part or see themselves as part of the community.
However, for quite a few people there is a sort of journey that contributors can make from just knowing about the community to using the community’s product to interacting with members of the community
and finally starting to contribute.

So is InnerSource only about Source Code? Of course not. If your team’s business depends on an outside component, you want to make sure it’s well maintained and well run.
As an InnerSource Contributor, you can help the core team in multiple ways. Reporting issues you see when using the component is a valuable contribution.
Creating or fixing test cases that show that the code isn’t working as expected is valuable. So is improving documentation, so others spend less time using it and contributing to it.
Supporting other users, helping with bug triage can be valuable contributions. Improving builds is another example of a valuable contribution.

To summarize no contribution is too small to contribute.

---

#### Main Functions

* Key participant in InnerSource project discussions
* Contributes code, documentation, or expertise (by issues, bugs, enhancements...)
* Enhances collaboration and innovation by reviews and providing feedback on others' contributions

---

#### Behaviors Expected

* A sharing mindset
* Active in conversations or express their opinion on the project's direction
* Open to contribute to the product community following the guides, rules, and processes

Note:
A sharing mindset means that you usually ask yourself questions such as:

- Does this functionality reflect a general issue?
- Is it something that other teams in your organization face as well due to the shared business domain?
- Is this functionality orthogonal to the domain of your project?

If any of that applies, then start looking beyond your own team: is there a shared solution that you can use or improve to fit your needs? Should there be one?

---

#### Relationship to InnerSource project

**Trusted Committer**

* Your host for your stay in the InnerSource project
* Mentoring on your way to contribute successfully
* Take care of the quality, and sustainability of your contributions

**Product Owner or Core Team**

* Discussions about the product and its roadmap
* Working on general aspects of the documentation, or consistency
* Involving the contributor in bringing the project benefits

Note:
As a Contributor in an InnerSource community you will interact with people playing other roles of InnerSource, such as Trusted Committer, Product Owner or Core Team and possibly with other contributors.
At times, these roles can be played by the same person, such as Trusted Committer and Product Owner in small grassroots style projects.

------

#### Mechanisms of Contributing

##### Contribution Guide

Rules and guidelines to contribute into the InnerSource project describing the processes, roles, and workflows for a successful contribution

##### Code of Conduct

Rules and guidelines to build a safe space for the community members, allowing to include any conversation, idea, discussion to build a collaborate and open space to contribute

Note:
Both mechanisms must be included in the repository and publicly accessible for any contributor.

Usually they both are implemented as:

- `CONTRIBUTING.md` file as the Contribution Guide
- `CODE_OF_CONDUCT.md` file as the Code of Conduct

---

#### Stages of a Contribution Process

1. **Report** a problem or task by an issue. <!-- .element class="fragment" -->
2. **Fork and Branch** to create an isolated development environment. <!-- .element class="fragment" -->
3. **Implement** the solution or feature. <!-- .element class="fragment" -->
4. Open a **Pull or Merge Request** to propose changes to main project. <!-- .element class="fragment" -->
5. Peer **review** for quality and correctness. <!-- .element class="fragment" -->
6. **Approval and merge** changes into main project. <!-- .element class="fragment" -->

---

#### Contribution Artifacts

##### Repository

Shared resource with the content (source, documentation...) of the InnerSource project

##### Issues

Mechanism to report bugs, enhancements, ideas, and other tasks within the project

---

##### Fork

Contributor's copy of the InnerSource project's repository to work on changes in an isolated environment

##### Branch

A pointer to a snapshot of your fork to encapsule your changes

##### Pull or Merge Request

A request to merge changes made in a contributor's forked repository back into the main project repository

---

#### Creating an Issue

Check the list of `Issues` of the repository before opening one:

![Issues Tab](../../images/github/issues-tab.png 'Issues tab')

Click the `New issue` button to create a new one.

![New issue button](../../images/github/new-issue.png 'New issue button')

A issue template (bug, doc, feature...) could be offered. Fulfil the form and save it.

Good job! 👏 This is the first step to contribute! 🎊 <!-- .element class="fragment" -->

---

#### Creating a Fork

Click the `Fork` button to create your own local copy of the repository.

![Fork Button](../../images/github/fork-repository.png 'Fork Button')

After some seconds a new repository is created under your profile where you can work isolated from the original one.

Note:
Review this article [about forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) for more details.

---

#### Creating a Branch

This menu from the `main` branch presents the branches and allows create a new one:

![Repository branches](../../images/github/branches.png 'Repository branches')

This command does the same from your terminal.

```shell
git branch -b <branch-name>
```

Note:
This menu helps us to switch between different branches.
Review this article [about branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) for more details.

---

#### Creating a Pull or Merge Request

Once new changes are pushed into your branch, a Pull Request can be created from the UI:

![Create a Pull Request](../../images/github/new-pull-request.png 'Create a Pull Request')

The process will compare your changes with the current status of the target branch (usually the `main`) and present a form to describe your changes.

Note:
Review this article [about pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) for more details.

The article [crating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) provides more deeper details about this process.

---

#### How to contribute successfully

---

#### Lead times

* Get to know the code base, technologies, and development environment
* Differences in communication (mostly asynchronous)
* Changes or evolutions in the core team
* Unexpected lead times

Note:
One key difference is the turnaround time.

Give yourself enough lead time. Start early enough, so that your work is available for you to leverage at the time you need it.
It’s better to add more slack time initially - you’ll get a feeling about the turnaround times once you work with the host team.
Often, you will notice a reduction in turnaround time per host team after making a few successful contributions to that host team.

---

#### Expectation management

* Understand the unexpected lead times to prevent frustration
* Be patience

Note:
In your classic teams everyone had an idea of the expected lead times. Within an InnerSource context this might not be the case, either due to large time-zone differences or you not being available full-time as with your original team, even if they are in the same physical location as you are.

---

#### Building trust

* Be transparent providing very-well documented information (including estimations)
* Established trust will allow you to overcome uncertainty bumps
* Try to meet with people behind the names

Note:
While written communication shines when it comes to archiving and searchability, in-person communication shines when it comes to communication bandwidth.
Try to make time to meet with people behind the names.
When you’re able to hear people speak, when you know their idiosyncrasies, remote collaboration will become easier.

---

#### Avoiding rejection

* Contribute earlier, do not waste time!
* Get agreement from the core team of your contribution before working on the changes
* Interact with a Trusted Committer to get support about the proposal

Note:
Do you have a large feature that you want to contribute? Wouldn’t it be horrible if all your work would be wasted?

That can happen when the host team is already building something very similar, is planning to deprecate the software, or does not see what you are proposing to be a fit for their project.
Make yourself and the host team happy (and possibly save some work) by getting agreement from the host team on the user/technical design of the contribution before working on the changes.

------

#### Benefits of Being a Contributor

What would motivate an **individual developer** to spend time on a project that is not under the direction of their manager? 🤔

What would motivate a **manager** to make time for their developers to improve projects that are not under their purview? 🤔

---

#### 🧑‍💻 Individual Motivation

* Personal growth and professional development
* Learn new skills and technologies
* Enhances problem-solving and collaboration abilities
* Visibility within the community and industry
* Networking and career advancement opportunities

Note:
The most obvious motivation is what typically draws early contributors into open source as well.

---

#### 🧑‍🤝‍🧑 Team and Company Motivation

* Project impact
* Contributes to the success and sustainability of InnerSource projects
* Consolidate duplicated efforts and standardize tools and practices
* Drives innovation and continuous improvement

Note:
How many times your project is impacted by bugs from an internal dependencies? Why should your team spend an extra effort to contribute that fat fix to the upstream project?
For one, contributing in upstream projects used in your managed project will provide a better sustainability and reduce your maintenance cost. Every new upstream release will keep your
modifications and requirements.

Having team members work as active contributors in projects your team depends on means that they may get to have a say in the project direction and timelines, which can be beneficial for your team.

As company the maintenance of dozen buggy implementation of a functionality that's specific to the company domain is a huge waste of resources. Merging them into a shared asset and encouraging cross team collaboration
at the corporate level can drive central innovation and continuous improvement from the edges of your organization.

------

#### Learn More

[Contributor - Learning Path](https://innersourcecommons.org/learn/learning-path/contributor/)

[About Forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

[About Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

[About commits](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits)

[About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

[Creating a Pull Request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
