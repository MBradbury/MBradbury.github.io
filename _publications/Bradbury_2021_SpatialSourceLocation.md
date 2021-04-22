---
title: "A Spatial Source Location Privacy-Aware Duty Cycle for Internet of Things Sensor Networks"
citation: "**Matthew Bradbury**, Arshad Jhumka, and Carsten Maple. A Spatial Source Location Privacy-Aware Duty Cycle for Internet of Things Sensor Networks. *ACM Transactions on Internet of Things*, 2(1):1–32, February 2021. [doi:10.1145/3430379](https://doi.org/10.1145/3430379)."
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/TIOT2021.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/TIOT2021.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Bradbury_2021_SpatialSourceLocation.bib
---

## Summary

Source Location Privacy (SLP) is an important problem when monitoring valuable assets with wireless sensors. It is important that sensitive context information, such as the location of an asset, is not revealed to adversaries. These wireless sensors are typically deployed with a limited energy source, so protection approaches need to consider their energy cost. In order to save energy, applications deployed on these devices perform duty cycling, where they aim to spend the majority of their lifetime sleeping. However, arbitrary duty cycling algorithms can lead to delays in messages being sent and received. For SLP algorithms that involve time sensitive messages an arbitrary duty cycle will impact the ability to provide SLP. So this paper proposed a duty cycling algorithm that uses knowledge of the SLP protocol to calculate when to wake up and when to sleep.

## Importance

Without an effective duty cycle algorithm wireless sensors will have a very short lifetime, making them costly to deploy and maintain. So it is vital that algorithms developed for wireless sensor are evaluated with appropriate duty cycles and the impact duty cycling has on the efficacy of the protocols is evaluated. This work is the first to investigate the impact of duty cycling on SLP techniques against an adversary with local visibility. Existing technqiues against an adversary with global visibility tend to lend themselves naturally to duty cycles techniques which perform Time-division multiple access.

## Perspectives

Existing technqiues to provide source location privacy in wireless sensor networks usually do not consider that sensor nodes sleep for the majority of their lifetime. Instead energy cost is measured in terms of messages sent and received. This approach was used as sending and receiving messages tends to be the most expensive individual operation that a wireless sensor node will perform, however, it ignores the continuous [cost of keeping the CPU and other peripherals active](/publications/Bradbury_2019_ImpactDecreasingTransmit) instead of sleeping which can dominate the energy cost to send and receive messages over time. Future work evaluating the energy cost of applications on equivalent hardware needs to ensure appropriate evaluation techniques are used.
