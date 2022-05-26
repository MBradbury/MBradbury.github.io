---
title: "Information Management for Trust Computation on Resource-constrained IoT Devices"
citation: "**Matthew Bradbury**, Arshad Jhumka, and Tim Watson. Information Management for Trust Computation on Resource-constrained IoT Devices. *Future Generation Computer Systems*, 135:348–363, 2022. [doi:10.1016/j.future.2022.05.004](https://doi.org/10.1016/j.future.2022.05.004)."
publishDate: 2022-05-01
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/FGCS2022.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/FGCS2022.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Bradbury_2022_InformationManagementTrust.bib
dataset: https://doi.org/10.5281/zenodo.4353611
project: project-6-TEAM
type: paper
---

There is increasing interest in using highly resource-constrained IoT devices to perform complex tasks. These resource might include limited processing power (e.g., 32MHz CPU), RAM (e.g., 32 KiB to 256 KiB), ROM (512 KiB), and potentially no stable storage. However, because of the limited resources an IoT device may need to offload expensive tasks to resource-rich devices. These might be a Cloud server or an Edge node if the latency of task responses is important.

These Cloud or Edge servers may not always perform tasks correctly or timely. One approach in deciding who to select is to calculate a value of *behavioural trust* which acts as a predictor for whether the Cloud or Edge will behave well. This could be via [a proactive trust assessment](/papers/Bradbury_2021_TrustTrackersComputation), or [a reactive trust assessment](/papers/Bradbury_2022_ThreatModellingGuided). However, the same limited resources that necessitate offloading tasks also means that there needs to be a strategy to decide which historical information used to calculate behavioural trust should be kept in memory and which information should be discarded when memory is full.

<!-- readmore -->

## Importance

Resource-constrained &mdash; and particularly memory-constrained &mdash; devices are being widely used in a variety of scenarios from monitoring to actuating cyber-physical systems. Limited resources mean that an adversary may find attacking such devices easier than more resource-rich devices. If an adversary is able to fill up memory used to calculate trust values, it means they have the potential to manipulate which Cloud or Edge a task is offloaded to. This is why an appropriate mechanisms that decides what information to keep and what to discard is important.

We find in this paper that making that decision is a difficult problem, which is proven by mapping the decision of which information to keep in memory to the [0-1 Knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem#Definition). Because of this we investigated alternate ways in which to structure data in memory, so instead focused on grouping this information by type and not by subject.

<div style="display: flex;">
  <div style="flex: 50%; padding: 5px;">
    <figure>
        <img src="/images/FGCS2022-1.svg" alt="..." style="width:100%">
        <figcaption>Information used to evaluate behavioural trust is grouped by the subject of the information.</figcaption>
    </figure>
  </div>
  <div style="flex: 50%; padding: 5px;">
    <figure>
        <img src="/images/FGCS2022-2.svg" alt="..." style="width:100%">
        <figcaption>Information used to evaluate behavioural trust is grouped by the type of information. Different types of information is stored in different memory regions.</figcaption>
    </figure>
  </div>
</div>

By having the second memory layout it allows removing a single piece of a specific type of information instead of all the information on a single agent. This allows a much finer-grained eviction and replacement strategy. Which is presented in the paper.

<figure>
    <img src="/images/FGCS2022-3.svg" alt="..." style="width:100%">
    <figcaption>
        A visualisation of the information stored in the memory of agent 3 used to evaluate a measure of behavioural trust. Here agent 3 needs to interact with another agent's service 0 and agents 0, 4 and 7 would behave incorrectly.
    </figcaption>
</figure>

## Perspectives

Considering resource-constraints such as memory is an important task when designing complex systems that involve constrained devices. However, we see that lots of academic literature has focused on highly scalable systems with vast quantities of compute and memory available. Not all systems have the luxury of being able to scale this easily. This is a problem when considering past work that has assumed unlimited resources, as it is unlikely to be appropriate without significant changes. This paper is intended to act as a starting point to being able to effectively use trust and reputation systems on IoT devices. A naive strategy to remove and add information used to calculate behaviour trust could potentially be manipulated, so we still need to make further improvements into how an IoT devices makes these decisions.
