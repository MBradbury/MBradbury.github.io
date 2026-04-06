---
title: "Classes of Cyber Physical System Observation Privacy Techniques"
citation: "Chathuranga Sampath Kalutharage and **Matthew Bradbury**. Classes of Cyber Physical System Observation Privacy Techniques. In *12th ACM Cyber-Physical System Security Workshop*. Bangalore, India, 2 June 2026."
publishDate: 2026-06-02
abstract: "Content privacy protects data confidentiality through encryption during storage and transmission or via privacy-preserving transformations. However, as Cyber Physical Systems act in a physical space they are also vulnerable to direct observations on the actions taken by the system, its state, and the context in which those actions occur. In such a case, content privacy is insufficient (but often necessary) to provide privacy and additional techniques are required. Across multiple areas, many approaches have been taken to reduce information loss to direct adversary observations, however, research across these different cyber physical system domains has not typically interacted. Therefore, this work deconstructs and systematises existing context privacy techniques into three classes: (i) Add Noise, (ii) Decorrelate, and (iii) Change Observability. We also speculate on class of (iv) Make Sensitive Commonplace techniques. Each class captures a distinct strategy to mitigate information leakage from adversary observations. We illustrate this taxonomy using an example where an adversary observes public transport interactions, showing how each class can be instantiated with a representative context privacy technique. We classify a broad range of past work protecting cyber physical systems from observing adversaries and identify potential gaps in areas where classes of techniques have not been explored in depth."
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/CPSS2026.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/CPSS2026.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Kalutharage_2026_ClassesCPSObservation.bib
project: project-8-GCP
type: paper
paper_type: workshop
---

Across a wide range of different Cyber Physical System (CPS) domains there has been much work on addressing observation privacy threats to CPSs. However, an issue is that much of this work has been siloed in that specific domain and there has been little opportunity to take advantage of the approaches used in different domains. In this paper we present a classification of different observation privacy *techniques* to understand what work has been peformed and where gaps may exist across domains in underutilised classes of observation privacy techniques.

<!-- readmore -->

## Importance

Developing observation privacy techniques is challenging and time consuming. Existing data privacy techniques are typically necessary, but they are insufficient to protect against direct observation of a CPS, its state, the actions it takes and the context in which it takes those actions. It is important that different approaches across CPS domains are used to inform observation privacy techniques in new CPS domains or to address new observation privacy threats, such that techniques can be developed faster.

## Perspectives

We classified observation privacy techniques into three classes:

1. Add Noise --- Which introduces behavioural change that acts as noise to the adversary. For example, this may be to introduce unneeded actions in addition to the actions needed for the system to achieve its goals.
2. Decorrelate --- Which try to break the link between observations made by an adversary and an underlying sensitive context. For example, this might be to break a correlation between cause and effect by delaying an actuation.
3. Change Observability --- Which changes how the system acts to prevent it from being observed by the adversary. This tends to be challenging to achieve in practice.

Additionally, we considered a fourth speculative class:

<ol start="4">
    <li>Make Sensitive Commonplace --- Which has the system commonly perform sensitive actions alongside non-sensitive actions in order to obscure an underlying change in goal or motivation of the system. The intuition is that the *suprise* an adversary has in observing an event is decreased when it is more common, making it a less useful event to observe.</li>
</ol>

We saw that most techniques applied (i) Add Noise or (ii) Decorrelated and fewer considered (iii) Change Observability. No works considered (iv) Make Sensitive Commonplace, indicating that there is a potential for new scope of techniques here. We also identified that some domains were already using information from other CPS domains. For example, [UAVs](https://dl.acm.org/doi/10.1145/3479239.3485712) taking inspiration from [Connected Vehicles](https://doi.org/10.1109/VNC.2009.5416380).
