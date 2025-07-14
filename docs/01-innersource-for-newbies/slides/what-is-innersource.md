<!-- markdownlint-disable -->
# What is InnerSource

*Understanding a technique for building open organizations*

------

### First, some background

To understand InnerSource, you must first understand **Open Source**.

Note:
So let's take a few moments to review the concept of open source.
For some, this might be review; for others, this may be entirely new. Either way, this knowledge will help you better acclimate to InnerSource.

------

### What is Open Source?

The term **Open Source** refers to something people can **modify** and **share** because its design is publicly accessible.

Open Source software is software which source code that anyone can **inspect** and **enhance**.

Note:
That's a fairly straightforward set of statements, but it has significant implications.
https://opensource.com/resources/what-open-source

---

### Open Source Implications

<div class="left">

#### Use
Anyone can execute the software for any purpose.
#### View
Anyone can see the source code and understand how the software works.
</div>
<div class="right">

#### Modify
Enhancements, modifications, and solutions can come from anywhere-even outside the organization.
#### Share
Uniting contributors around a common vision, shared purpose, and collaborative spirit leads to new development faster.
</div>

Note:
Those implications relate to certain freedoms that open source grants people who work with source code.
People who create open source software license it in a way that specifically grants users those freedoms.

---

#### Why choose open source development?
* Attract and retain better talent
* Enhance business agility and time to market
* Increase software security and reliability
* Provide a framework for collaboration
* Increase code quality
* Influence direction of technological innovation
* Interact directly with users
* Scale development effort in a community
* Become aware of changes to project roadmaps
* Achieve freedom from vendor lock-in
* Industry Leadership and Credibility

Note:
Those organizations are realizing that when they "open up" — when they start collaborating with others outside their own walls, when they share what they know, when they let others help them build things — they can reap significant benefits.
And it also helps them rethink how they operate.
Open source tools can serve as a gateway to a broader ecosystem of innovation done the open source way.

---

🪧 You are not just selecting software. You are choosing **how to work**. 🪧

Note:
The truth is that when you're making technology decisions, you're not just selecting a software stack.
You're not just picking the tools your organization is using. You're choosing how you're going to work.
How will your organization operate?
How will your organization's tools encourage or discourage certain forms of engagement, actions, behaviors, principles, and practices?

---

What if we built our organizations on the **same principles** that power open source communities?

---

#### Open Organizations Characteristics

transparency <!-- .element class="fragment" -->

inclusivity <!-- .element class="fragment" -->

collaboration <!-- .element class="fragment" -->

community <!-- .element class="fragment" -->

adaptability <!-- .element class="fragment" -->

Note:
transparency - Share how decisions are made, distribute materials broadly or let people know what information you can and can’t give them and why
inclusivity - Gather input for plans, when creating solutions or get more extended stakeholder input to insure diverse perspectives or seek feedback as plans or solutions are being created
collaboration - Lead/influence others to work closely together, share vs. working on something on their own, or help give visibility for others to be able to collaborate
community - Increase shared purpose, value, goals, language, etc.., demonstrate consciousness, empowered execution and responsibility to the community
adaptability - Be a role model, encourage people to release early & often, make rapid iterations, to share what you create so it can be modified or solicit feedback and make changes to enhance regularly

Open organizations can exist in any industry, in any context.
There's no specific (or magic) formula for becoming an open organization, because every organization is a different size, has a different mission, and operates in a different context.
Simply put, an open organization is one that embraces and expresses a specific set of characteristics—regardless of what that organization may eventually "look like," or which set of techniques it ultimately adopts.
These principles manifest in different practices and behaviors, depending on the context— industry, organizational constraints, legal frameworks, etc.
They're not a prescription; you can't "apply" them. But taken together, they represent a particular ethos or spirit that guides organizational practice and leads to change.
The five principles are guiding statements of intent that lead to a culture of psychological safety, a key organizational attribute that facilitates innovation and passion.

---

### From open **principles** to open **practices**

Agile, Scrum, Kanban, DevOps, InnerSource

------

## What is InnerSource

🪧 The use of **open source software development best practices** and the establishment of an
**open source-like culture** **within organizations** for the development of its non-open source and/or proprietary software. 🪧

> Practicing open source methods inside the organizational firewall. <!-- .element class="fragment" -->

Note:
It is a set of _practices_, derived from open source development _methods_, and it is a set of _principles_, also derived from open source _culture_.

------

#### Why InnerSource?

* **Accelerate development and encourage collaboration** - Working together increases development velocity and helps avoid duplication of efforts internally.
* **Increase transparency and accountability** - When everyone can view the code, everyone knows when and where changes have occurred.
* **Enhance employee engagement** - Developers like working the open source way, even when they are working on software they cann't release publicly.

Note:
Organizations adopt InnerSource when they wish to reap select benefits of open source methods.

---

<!-- .slide: data-transition="slide-in fade-out" -->
##### Pros of InnerSource

* **Collaboration** - Projects benefit from resources and talent from multiple sources.
* **Reuse** - Processes, code and techniques are reused across the enterprise for greater returns while mitigating complexity.
* **Increase Innovation** - Create a vibrant cross-project ecosystem which can share ideas, code and techniques.

---

<!-- .slide: data-transition="fade-in slide-out" -->
##### Pros of InnerSource

* **Faster cadence** - The “release-early-release-often” style of open source development means that innovation relevant to the enterprise could happen at a faster pace.
* **Communication** - Cross-organizational sharing of information and assets is highly increased when implemented effectively.
* **Asynchronous contribution** - Geographically-distributed development is much easier to accomplish, as contributors can work on the same project more easily.

------

#### Why **NOT** InnerSource

* **Technical debt and potential re-work** - Working on internal forks instead of mainline branches can lead to duplication of upstream work in-house and add maintenance costs.
* **Lack of influence in upstream communities** - Innovations generated internally do not benefit external contributors.
* **Limited innovation and cross-industry collaboration** - An organization does not easily benefit from ideas, enhancements, and talent from communities and peers outside its own walls.

Note:
Because InnerSource only partially implements open source models and methods, some organizations encounter limitations and drawbacks.

---

<!-- .slide: data-transition="slide-in fade-out" -->
##### Cons of InnerSource

* **Redundancy of work** - InnerSource projects may not take full advantage of pre-existing open source projects’ efforts and thus can needlessly *reinvent the wheel*.
* **Fueling proprietary capabilities** - The capabilities built out will be proprietary to the organization and are not likely to have the same level of adoption as their open source equivalents.

---

<!-- .slide: data-transition="fade-in slide-out" -->
##### Cons of InnerSource

* **Reduced availability of talent** - Adoption drives availability of talent. Organizations adopting the Inner Source model are less likely to have ready access to next-generation talent.
* **More technical debt** - Without contributing changes back upstream, an organization will carry the full burden of maintaining those changes.
* **Lack of cultural fit** - An organization with an entrenched-team mentality may not easily accept an InnerSource model of development.

------

### Key Factors for Adoption

🌱 Seed Product

🛠️ Processes and Tools

🏢 Organization

---

#### 🌱 Seed Product
* A shared asset with a significant value to attract a community
* Multiple stakeholders
* Modularity to attract contributors

---

#### 🛠️ Processes and Tools
* Standardization of tools to facilitate collaboration
* Practices that support _Bazaar-style_ development & quality assurance

Note:
[Baazar-style](https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar)

---

#### 🏢 Organization
* Coordination and leadership to support the emergence of an internal meritocracy
* Transparency to open up the organization
* Management support and motivation to involve people

------

### Typical Target Scenarios

<div class="left">

Cross-region organisation

Multiple teams engaged in the same project, lots of reusable components

Suffered from traditional top-down approach, inefficient communication
</div>
<div class="right">

Duplicate or similar function module in different applications

Solution requires fast Time-to-Market

Rapid innovation by exploiting the broad expertise and creativity
</div>

------

### Making the choice

**Open Source** <!-- .element: class="text-centered" -->

vs

**InnerSource** <!-- .element: class="text-centered" -->

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
You are releasing **general purpose software** or software that is not part of your key market differentiation
</div>
<div class="right text-centered">

#### THEN

**Open Source**
</div>

Note:
**General purpose / non-differentiating software.**

Improvements made to software that is commonly used in an industry should be done as open source, even if the organization believes it may benefit a competitor.

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
You are collaborating on **high-valuable intellectual property**
</div>
<div class="right text-centered">

#### THEN

**InnerSource**
</div>

Note:
**High-value intellectual property.**

Software that is considered high-value intellectual property, contains trade secrets, or otherwise generates significant revenue for the organization should be InnerSource.
Example: the formula used by a soft drink manufacturer.

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
Your goal is to **increase** partner or industry **adoption**
</div>
<div class="right text-centered">

#### THEN

**Open Source**
</div>

Note:
**Increase adoption.**

If an organization wants more people to use their software, releasing it as open source makes it generally available and makes it much more likely people will use it.

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
You are working with **sensitive data** in a risk-averse industry

</div>
<div class="right text-centered">

#### THEN

**InnerSource**
</div>

Note:
**Legally encumbered / highly regulated.**

If it’s not legal for an organization to share the code, either due to customer contract commitment or because the company is working in a highly regulated environment, choose InnerSource.
If it makes sense, open source can be explored as an option later.

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
Your goal is to **generate revenue through ecosystem** offerings
</div>
<div class="right text-centered">

#### THEN

**Open Source**
</div>

Note:
**Create revenue through ecosystem offerings.**

If the organization makes its money by providing value-added services, consulting, or other ways beyond charging for software licenses, consider open source to increase chances of adoption.

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
Your goal is to **build an external** contributor **community**
</div>
<div class="right text-centered">

#### THEN

**Open Source**
</div>

Note:
**Build a contributor community.**

If an organization wished to leverage the wisdom of the crowds—including working with other companies—go open source.

---

<!-- .slide: data-transition="zoom" -->
#### Use Case

<div class="left">

#### IF <!-- .element: class="text-centered" -->
You would like to **experiment** with **a new way of working internally**, or gain experience with a new innovation method
</div>
<div class="right text-centered">

#### THEN

**InnerSource**
</div>

Note:
InnerSource allows people in your organization to "test out" ways of working, new methodologies, etc., before adopting them more broadly.
And because InnerSource is a more innovative way to develop software, you'll likely be able to encourage new forms of innovation inside your organization by running these controlled experiments.
It can effectively help you avoid some of the "red tape" associated with testing externally-facing innovation methods (like open source), and help senior leaders see more clearly the benefits of working in a new way (increasing their confidence in adopting something new).

------

#### Learn More

![The Open Source Way](../../images/logos/osw-logo.png 'The Open Source Way')
https://theopensourceway.org

![The Open Org](../../images/logos/openorg-logo.png 'The Open Org')
https://theopenorganization.org

Note:
- The Open Source Way - The open source way is a way of thinking about how people collaborate within a community to achieve common goals and interests. The community is home to open source community managers and architects all exploring and sharing best practices for working openly.
- The Open Org - The Open Organization is a community-driven project leading a global conversation about the ways open principles change how people work, manage, and lead. Community members generate knowledge and share strategies for building organizational cultures on principles like transparency, adaptability, collaboration, inclusivity, and community.

---

![The Open Practice Library](../../images/logos/opl-logo.png 'The Open Source Way')
https://openpracticelibrary.com

![InnerSource Commons](../../images/logos/innersourcecommons-logo.png 'InnerSource Commons')
https://innersourcecommons.org

Note:
- The Open Practice Library is an open source, community-driven and community-inspired library of best practices and tools. It helps individuals, teams, and entire businesses figure out the optimal ways to get to the best outcome via open practices.
- InnerSource Commons - A growing community of practitioners with the goal of creating and sharing knowledge about InnerSource
