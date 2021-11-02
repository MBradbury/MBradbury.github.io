---
title: "Trust Trackers for Computation Offloading in Edge-Based IoT Networks"
citation: "**Matthew Bradbury**, Arshad Jhumka, and Tim Watson. Trust Trackers for Computation Offloading in Edge-Based IoT Networks. In *IEEE INFOCOM*, 1–10. Virtual Event, Canada, 10–13 May 2021. IEEE. [doi:10.1109/INFOCOM42981.2021.9488844](https://doi.org/10.1109/INFOCOM42981.2021.9488844)."
publishDate: 2021-05
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/InfoCom2021.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/InfoCom2021.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Bradbury_2021_TrustTrackersComputation.bib
dataset: https://doi.org/10.5281/zenodo.4339398
presentation: "https://raw.githubusercontent.com/MBradbury/publications/master/presentations/InfoCom2021.pdf"
video: https://www.dropbox.com/s/mxjcffa25xpumyo/InfoCom21.mp4?raw=1
project: project-6-TEAM
type: paper
---

## Summary

There is increasing interest in using highly resource-constrained IoT devices to perform complex tasks. These resource might include limited processing power (e.g., 32MHz CPU), RAM (e.g., 32 KiB to 256 KiB), ROM (512 KiB), and potentially no stable storage. However, because of the limited resources an IoT device may need to offload expensive tasks to resource-rich devices. These might be a Cloud server or an Edge node if the latency of task responses is important. In most cases, trust is built up reactively where an interaction is performed and the result of that interaction is used to update a trust model. In this work we instead adopt a proactive approach to assessing trust, where a challenge is periodically sent to each resource-rich device that a task could be offloaded to. This challenge is sufficiently expensive for the resource-rich device to compute a result, but cheap for the resource-constrained device to verify.

## Importance

Storing data and building a trust model reactively is expensive. For devices with limited memory it will not be possible to store a large amount of information on interaction histories. Proactive assessment is much cheaper, as all that needs to be stored is the result from the latest assessment. This means more memory can be dedicated to other features instead of building trust models.

## Perspectives

An issue with a reactive assessment of trust is that once a resource-constrained IoT device receives a response, it will not always be able to compute if that result was correct. To do so generally would require it executing the task itself. The proactive assessment, on the other hand, *can* be cheaply checked. Performing offloading based on a proactive assessment assumes that there is a link between a resource-rich device's willingness to perform an expensive task to demonstrate their trustworthiness in performing the actual task. There is the potential for a resource-rich device to perform the proactive assessment correctly, but then perform the task incorrectly. It is likely that a hybrid approach will need to be investigated.

