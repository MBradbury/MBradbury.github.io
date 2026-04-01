---
layout: single
title: "Teaching"
permalink: /teaching/
author_profile: true
sitemap: true
---

## Lancaster University, UK

Module Convenor for:
 - 2021 &ndash; current SCC.442 Penetration Testing
 - 2025 &ndash; current SCC.253 Applied Security Methods
 - 2025 &ndash; current SCC.352 Secure Cyber Physical Systems

Previously Module Convenor for:
 - 2021 &ndash; 2025 SCC.306 Internet Applications Engineering

### SCC.442 Penetration Testing and SCC.253 Applied Security Methods

In this module students are given a fast-paced introduction to Penetration Testing. Students are provided a collection of vulnerable virtual machines running modern operating systems (e.g., [Debian 12](https://www.debian.org/News/2024/20241109), [Windows Server 2022](https://www.microsoft.com/en-us/evalcenter/download-windows-server-2022) and [Window Server 2016](https://www.microsoft.com/en-gb/evalcenter/evaluate-windows-server-2016)) to learn how to exploit vulnerabilities in a lab environment. Assessment consists of a formative group penetration testing challenge and a summative individual penetration testing challenge on a range of custom vulnerable machines developed for this module.

A wide range of vulnerabilities are incorporated into the lab environment, such as local privilege escalation with [CVE-2023-28252](https://nvd.nist.gov/vuln/detail/CVE-2023-28252), various web vulnerabilities by incorporating [DVWA](https://github.com/digininja/DVWA) and [OWASP Juice Shop](https://github.com/juice-shop/juice-shop), [permission misconfigurations](https://cwe.mitre.org/data/definitions/732.html), [pivoting](https://capec.mitre.org/data/definitions/700.html), [memory attacks](https://cwe.mitre.org/data/definitions/121.html), and others.

Vulnerable machines are automatically constructed using [Packer](https://www.packer.io/) and based on templates modified from [Bento](https://github.com/chef/bento). Test suites have been developed to ensure that the generated virtual machines are suitably vulnerable.

### SCC.352 Secure Cyber Physical Systems

In this module students were introduced to a wide range of security threats to cyber physical systems (CPS). Half of the module focused on security threats to embedded CPSs, considering how their resource-constraints mean that careful consideration is needed when designing appropriate security techniques and methods.

The other half of the module focused on Industrial Control Systems in a Nuclear setting. Using the [IAEA Asherah Nuclear Powerplant Simulator](https://conferences.iaea.org/event/181/contributions/15641/attachments/8545/11600/cn274_Full_Paper_Rodney_Busquim_e_Silva_EGC_Final.pdf) which was designed for teaching cyber security concepts to nuclear practicioners. We instead [provided students access to Asherah's internals](/publications/Smith_2026_NuclearCyberSecurityEducation), where they could observe OPC UA and Modbus network traffic and also manipulate the values stored in these servers. Students' gained an understand of how a malicious adversary is capable of causing physical impacts via a digital attack and then needed to implement and evaluate appropriate algorithms to detect such attacks.

### SCC.306 Internet Applications Engineering

In this module students were given insight into current work building internet applications that is performed in industry. This was achieved by guest lectures from organisations such as the [BBC](https://bbc.co.uk), [Tesco](https://tesco.co.uk), [AWS](https://aws.amazon.com/), and others.

* Learnt to analyse website performance using [Chrome Developer Tools](https://developer.chrome.com/docs/devtools).
* Experience analysing historical data trends using [Google Big Query](https://cloud.google.com/bigquery/docs/introduction).
* Learnt how to read and apply web standards such as the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/) to identify and fix accessibility issues in a broken website.

### Year Two Tutor

I was the Year Two Tutor between 2022 &ndash; 2025. This was a student-facing role which entailed:
 - Supporting students who were struggling with their education,
 - Acting as the academic integrity officer for malpractice cases involving students in year two, and
 - Allocating students to dissertation projects which will be undertaken in their third year of studies.

Allocating students to dissertation projects was a large part of this role. To simplify this task I automated the solicitation of project proposals from other academic staff and using this information a PDF brochure and a website were automatically generated. Students ranked their preferences in the proposed projects and a Integer Linear Programming problem was formulated and solved using [PuLP](github.com/coin-or/pulp) with [Gurobi](https://www.gurobi.com/faqs/gurobipy/) as the backend. Manual checks and adjustments were then performed on the allocation to validate the suitability. The implementation of the website and solver were provided to students as a learning opportunity, this received engagement from a small number of students to add new functionality to the website (a dark mode, a dynamic filter to be able to view the most relevant projects).

## University of Warwick, UK

Seminar and lab tutor for:
 - 2014 &ndash; 2018 [CS347 Fault-Tolerant Systems](https://www2.warwick.ac.uk/fac/sci/dcs/teaching/modules/cs347/)
 - 2014 &ndash; 2018 [CS412 Formal Systems Development](https://www2.warwick.ac.uk/fac/sci/dcs/teaching/modules/cs412)
 - 2014 &ndash; 2018 [CS118 Programming for Computer Scientists](https://www2.warwick.ac.uk/fac/sci/dcs/teaching/modules/cs118)
 - 2015 &ndash; 2016 [CS241 Operating Systems and Computer Networks](https://www2.warwick.ac.uk/fac/sci/dcs/teaching/modules/cs241)
 - 2014 &ndash; 2016 [CS132 Computer Organisation and Architecture](https://www2.warwick.ac.uk/fac/sci/dcs/teaching/modules/cs132)
