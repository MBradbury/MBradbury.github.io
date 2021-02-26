---
title: "Evaluating Trustworthiness of Edge-Based Multi-Tenanted IoT Devices"
excerpt: "Resource-constrained IoT devices have typically been used to perform sensing and actuation, however, there is increasing interest in those devices performing decision making. However, if these tasks are computationally or memory intensive, then the IoT devices will not have insufficient resources to execute the tasks. One solution is to offload the tasks from resource-constrained IoT devices to resource-rich Edge nodes. For redundancy multiple Edge nodes should be provisioned, but this raises the question of which Edge node should be selected to perform a task. This project investigated building a middleware to perform task offloading based on a measure of behavioural trust with limited resources (e.g., 32 KiB of RAM)."
duration: "March 2020 &ndash; March 2021"
location: "Department of Computer Science, University of Warwick"
image: /images/PiandZolertia.jpg
collection: projects
---

Internet of Things (IoT) systems are expected to be deployed as solutions to problems in a wide variety of contexts, from building management, to smart city monitoring and to provide support to emergency services. However, many IoT devices are resource constrained and lack the capability or information to compute results for tasks that the IoT devices may be requested to perform. Instead these tasks will need to be offloaded to a server at the Edge of the network for a quick response. As these networks will have multiple organisations providing multiple IoT nodes and Edge nodes with different capabilities, the IoT devices need to know which Edge server they trust to return a timely response to a task. As these networks will support critical services, they also need to be resilient to attack.

<video controls="" style="max-width: 100%; max-height: 100%;"><source src="/videos/PETRAS-URB.mp4" type="video/mp4"/></video>

## Information

Role: Research Fellow

Duration: {{ page.duration }}

People:
 * [Dr. Arshad Jhumka](https://warwick.ac.uk/fac/sci/dcs/people/arshad_jhumka/) (PI)
 * [Prof. Tim Watson](https://warwick.ac.uk/fac/sci/wmg/people/profile/?wmgid=1077) (CoI)

Links:
 * [PETRAS Project Page](https://petras-iot.org/project/evaluating-trustworthiness-of-edge-based-multi-tenanted-iot-devices-team/)
 * [Funding Announcement News Article](https://warwick.ac.uk/fac/sci/dcs/news/?newsItem=8a1785d8721768f401723d62f6e13f9f)
 * [Source Code](https://github.com/MBradbury/iot-trust-task-alloc)

## Publications
 
 *  **Matthew Bradbury**, Arshad Jhumka, and Tim Watson. Trust Assessment in 32 KiB of RAM: Multi-application Trust-based Task Offloading for Resource-constrained IoT Nodes. In *The 36th ACM/SIGAPP Symposium on Applied Computing*, SAC'21, 1–10. Virtual Event, Republic of Korea, 22–26 March 2021. ACM. To Appear. [doi:10.1145/3412841.3441898](https://doi.org/10.1145/3412841.3441898).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2021_TrustAssessment32.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/SAC-DADS2021.pdf)] 
 *  **Matthew Bradbury**, Arshad Jhumka, and Tim Watson. Trust Trackers for Computation Offloading in Edge-Based IoT Networks. In *IEEE INFOCOM*, 1–10. Virtual Event, Canada, 10–13 May 2021. IEEE. To Appear.  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2021_TrustTrackersComputation.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/InfoCom2021.pdf)] 
