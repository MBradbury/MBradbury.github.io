---
title: "Trading Appliance Liveness for Home Electricity Consumption Privacy"
citation: "Chathuranga Sampath Kalutharage, Brendon Fowley, Cason Brady, and **Matthew Bradbury**. Trading Appliance Liveness for Home Electricity Consumption Privacy. In *Computer Security. ESORICS 2026 International Workshops*. Rome, Italy, 14-18 September 2026. Springer Nature Switzerland."
publishDate: 2026-09-14
abstract: "Homes have been equipped with smart meters in recent years to automate the monitoring of energy usage to facilitate better scheduling of electricity generation and offer better billing of customers. This has increased the time resolution of energy consumption, which leads to privacy threats such as occupancy monitoring, pattern of live analysis, and device identification. Much work has been performed on using energy storage and renewable generation to obfuscate observations made via a smart meter. In this paper, we consider how appliance liveness can be traded-off to reduce behavioural distinguishability. We identify that liveness can be traded-off by undertaking an analysis of the REFIT smart home dataset and transforming the energy consumption of each day using a mixed integer programming model to and investigate all 512 combinations of liveness constraints of 9 appliances. The Pareto frontier is found for each subset of combinations where a single appliance must be live in order to demonstrate the trade-offs that occupants would need to make in order to reduce behavioural distinguishability. We identify that while it is possible to trade-off liveness for privacy, appliances which have a high usage in a day can limit the ability to reduce behavioural distinguishability. We also find a strong positive correlation between energy consumption and behavioural distinguishability, where reducing behavioural distinguishability leads to a reduction in energy consumption. This analysis helps identify which appliance categories have the greatest influence on behavioural distinguishability and highlights the trade-offs between appliance liveness and observability in smart meter data."
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/MIST2026.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/MIST2026.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Kalutharage_2026_TradingApplianceLiveness.bib
project: project-8-GCP
type: paper
paper_type: workshop
---

With the deployment of smart meters high time resolution data about power consumption of users is available, leading to [privacy threats](https://ieeexplore.ieee.org/abstract/document/7093120) including the ability to [predict the appliances owned by homes](https://dl.acm.org/doi/abs/10.1145/3575813.3595198). Much past work has investigated shaping the power consumption of a home by using [batteries](https://doi.org/10.1145/2382196.2382242), [renewables](https://doi.org/10.1016/j.segan.2023.101039), [flexible thermal loads](https://doi.org/10.1016/j.apenergy.2020.116075) and other techniques. However, changes in user behaviour are less well studied. So, in this work we set out to explore if users could trade-off their ability to use a device (i.e., its *liveness*) to obtain greater privacy.

<!-- readmore -->

Using the [REFIT Smart Home Dataset](https://doi.org/10.1038/sdata.2016.122) we used linear programming to transform the dataset to speculate on potential energy consumption. The dataset was transformed multiple times to explore all the different combinations of liveness constraints of the appliances in a home.

<figure class="threequarters">
    <img src="/images/MIST26-Day1_ScatterPlusParetoPrivacy.svg" alt="Scatter plot with Pareto Fronteirs for different appliances whose liveness is enforced." class="align-center" />
    <figcaption class="align-center">
    The results of 512 different liveness transformations of Day 1 for House 6
    </figcaption>
</figure>

Our results showed that the energy consumption can be transformed to reduce the amount of information revealed to an adversary and that some appliances have a greater impact when users are willing to tolerate a loss of liveness to gain privacy.

## Importance

Existing approaches have focused on techniques that require a monetary cost (batteries/renewables) or scheduling of appliances which are flexible in when they use power. This work considers the problem from a different approach, where user behaviour is changed. This gives users another dimension along which change can be made to improve privacy.

## Perspectives

This work has investigated if users could trade-off appliance liveness to obtain greater privacy. In general, this is feasible with some appliances having a greater impact. However, what we have not investigated is users' willingness to accept needing to not use an appliance at specific times in order to obtain this privacy gain. Such inconvenience may not be worth suffering to gain privacy, especially as batteries and renewables could be used instead where the trade-off is a financial cost instead of a cost to convenience. It would be useful for future works to explore whether users are willing to engage with behavioural change such as this to gain privacy.
