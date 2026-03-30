---
title: "Nuclear Cybersecurity Education: A Collaborative, Multi-Format Approach Using the Asherah Nuclear Power Plant Simulator 2.0"
citation: "Paul Smith, Matthew Zerphy, Gustavo Berman, **Matthew Bradbury**, Rodney Busquim E. Sliva, Khalil El-Khatib Ricardo Marques, Gary Meyers, and Hayden Nolan. Nuclear Cybersecurity Education: A Collaborative, Multi-Format Approach Using the Asherah Nuclear Power Plant Simulator 2.0. In *International Conference on Computer Security in the Nuclear World: Securing the Future*. Vienna, Austria, 11–15 May 2026. IAEA."
publishDate: 2026-05-11
abstract: "The expansion of digital systems in nuclear facilities has created a growing need for professionals with expertise in operational technology (OT) cybersecurity. To address this demand, multiple universities are partnering with the International Atomic Energy Agency (IAEA) to develop and deliver nuclear cybersecurity education using the Asherah Nuclear Power Plant Simulator (ANS). The latest version, ANS 2.0, is a modular, containerized environment that integrates information technology (IT) and OT systems in a representative nuclear facility context, including digital instrumentation and control (I&C), human-machine interfaces (HMI), and Security Information and Event Management (SIEM). It enables learners to explore cyberattack scenarios, analyze network traffic, and practice incident response in a secure, hands-on setting. ANS 2.0 has been incorporated into semester-long graduate and undergraduate courses, micro-credential programs, and short workshops, serving students from nuclear engineering, computer science, information sciences, cybersecurity, and international affairs in both resident and online settings. Instructional content spans from policy and regulatory analysis to technical aspects such as attack scripting, protocol evaluation, and controller resilience design. Pre- and post-course assessments and surveys track learning outcomes and guide improvements. The paper presents an overview of ANS 2.0 and summarizes the wide range of educational initiatives it supports. Lessons learned are discussed, including findings from surveying engaged learners. The aim is to share experiences so that educational institutions in Member States can engage through the IAEA International Nuclear Security Education Network (INSEN) to develop similar programs and expand nuclear cybersecurity workforce capacity."
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/CyberCon2026.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/CyberCon2026.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Smith_2026_NuclearCyberSecurityEducation.bib
type: paper
paper_type: other
---

This paper presents early experiences from a multi‑institution pilot deploying the Asherah Nuclear Power Plant Simulator (ANS) 2.0 in university‑level education. Five institutions, representing diverse geographic regions, academic disciplines, and instructional formats are engaged in piloting the use of ANS 2.0 in curricula. Summaries of ongoing efforts and plans of the other three institutions piloting ANS 2.0 are also provided. 

<!-- readmore -->

As part of Lancaster's use of Asherah, students were given access to the internal of the simulator. This allowed them to write simple Python code to interact with OPC UA and Modbus servers. Using these scripts, students implemented attacks available within the ANS 2.0 environment, typically by writing applications that repeatedly overwrote OPC UA variables at high rates. Example attacks included manipulating reactor setpoints to values lower than those selected by the operator. Students implemented their own data historians by periodically polling OPC UA servers and storing values for all available variables in a database. These datasets were then used to implement and evaluate offline anomaly detection algorithms, including [Auto Associative Kernel Regression](https://conferences.iaea.org/event/181/contributions/15513/attachments/9194/12424/CN278_PLC-based-Detection.pdf). 

## Importance

Digital modernization of nuclear facilities—including advanced reactors, digital instrumentation and control, remote monitoring, and expanded networking continues to increase the cyber‑physical attack surface of nuclear facility systems. As a result, the nuclear workforce has an increasing demand for competencies that span traditional nuclear engineering, cybersecurity, and operational technology (OT). Hands‑on simulation environments complement lecture instruction to convey the tightly coupled interactions between cyber actions and physical impacts for nuclear facility operations by [enabling learners](https://doi.org/10.1016/j.cosrev.2021.100361) to observe how cyber activities affect plant operations, demonstrate defence‑in‑depth concepts, and understand the consequences of design and operational decisions.

![Asherah main control room](/images/CyberCon2026-main-hmi-control-room.png)

## Perspectives

Students at Lancaster have previously gained experience interacting with vulnerable systems. However, working with Asherah allowed them to learn that there are a wide variety of digital systems in use that do not follow typical enterprise IT configurations.

Students also had to learn the importance of data gathering and analysis. The simulated physical processes gave them representative data that could be used to infer the presence of an adversary.

Finally, students needed to present their work in a format that is representative of what is required by the [ONR](https://www.onr.org.uk/)'s outcomes-based regulatory regime. This required them to make a suitable argument about their work being appropriate and suitable.
