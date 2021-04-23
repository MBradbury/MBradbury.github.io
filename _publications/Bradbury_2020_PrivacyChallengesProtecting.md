---
title: "Privacy Challenges with Protecting Live Vehicular Location Context"
citation: "**Matthew Bradbury**, Phillip Taylor, Ugur Ilker Atmaca, Carsten Maple, and Nathan Griffiths. Privacy Challenges with Protecting Live Vehicular Location Context. *IEEE Access*, 8:207465–207484, 2020. [doi:10.1109/ACCESS.2020.3038533](https://doi.org/10.1109/ACCESS.2020.3038533)."
publishDate: 2020-11
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/Access2020.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/Access2020.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Bradbury_2020_PrivacyChallengesProtecting.bib
type: paper
---

## Summary

Previous work on live location privacy protection for vehicle-to-vehicle (V2V) communication has rarely considered multiple sources of identity leakage. This is problematic as vehicles will exhibit multiple sources of identifying information. However, not all of this information will be available to all threat actors. Some identifying information will be easier and cheaper to obtain (e.g., via a sensor network listening for V2V communications) compared to other approaches (e.g., deploying a network of cameras). This paper identified the numerous sources of identity leakage from a vehicle and devices which may be present in it, the threat actors trying to violate the vehicle's live location privacy, the techniques used to protect privacy, and ways in which identity sources and protection mechanisms can interact.

![Matrix of live location privacy threats and their relation to one another](/images/threat-overlap-matrix.svg)

## Importance

There has been much focus on [bringing autonomous vehicles](https://zenzic.io/content/uploads/2020/10/Zenzic_Roadmap_Report_v3.pdf) to roads around the world and there has not always been as much emphasis on the new modes of connectivity future vehicles will have. The connectivity that new vehicles will be equipped with will allow tracking of vehicles with cheaper and less obvious equipment than before.

## Perspectives

This research was performed to highlight the need for researchers to consider other identity sources and their interactions when developing techniques to protect the live location privacy of a vehicle. It is insufficient to focus on a single identity source. Depending on the type of identity source, multiple other technologies may need to be considered. For example, as ETSI V2X communication is based on IEEE 802.11p, devices that are eavesdropping those messages will also likely be able to eavesdrop messages from WiFi and Bluetooth devices. This means that privacy techniques for IEEE 802.11p also need to consider privacy techniques for these other technologies.

![An identity change can be linked if another devices does not synchronise the identity change](/images/OverlappingIdentity.svg)

{% comment %}
https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/929352/innovation-is-great-connected-and-automated-vehicles-booklet.pdf
{% endcomment %}
