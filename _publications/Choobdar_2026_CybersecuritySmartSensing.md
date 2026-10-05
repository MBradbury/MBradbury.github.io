---
title: "Cybersecurity of Smart Sensing Insole Systems: A Threat Modelling Approach to Understanding Security Vulnerabilities"
citation: "Padideh Choobdar, Nigel Davies, Emma Wilson, Steve Hodges, Edward Jude, **Matthew Bradbury**, and Neil D. Reeves. Cybersecurity of Smart Sensing Insole Systems: A Threat Modelling Approach to Understanding Security Vulnerabilities. *Sensors*, 5 October 2026. [doi:10.3390/s26196298](https://doi.org/10.3390/s26196298)."
publishDate: 2026-10-05
abstract: "Smart sensing insoles are emerging medical IoT devices used in diabetes care to monitor foot pressure, temperature and gait for preventing diabetic foot ulcers and lower-limb amputation. Despite growing healthcare use, the cybersecurity threats to these systems have received limited systematic analysis in the literature. This study aimed to provide a detailed threat modelling analysis of smart insole systems. The study developed a representative smart insole system architecture using public information, literature, and manufacturer input. A data flow diagram mapped devices, processes, data stores, data flows, and trust boundaries across sensor, edge/mobile, cloud and clinician zones. Potential cybersecurity threats were analysed using STRIDE, MITRE ATT&CK mapping and attack trees. The modelled analysis identified potential threats across all STRIDE categories: spoofing, tampering, repudiation, information disclosure, denial of service and elevation of privilege. Three attacker goals were modelled: stealing health data, reducing trust in the technology and inflicting patient harm. Key modelled[M8.1] threats include BLE interception, weak authentication, data tampering, service disruption, log deletion and manipulation of clinical outputs. Commercial systems varied substantially in their security features. The modelled findings show that cybersecurity threats to smart insoles extend beyond data privacy to include threats to patient safety. Disrupted alerts, altered pressure data or unavailable monitoring could delay clinical action and increase diabetic foot ulcer and amputation risk. The study highlights the need for secure-by-design systems, including BLE encryption, strong authentication, audit logging and clearer regulatory/procurement standards."
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/Sensors2026.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/Sensors2026.svg
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Choobdar_2026_CybersecuritySmartSensing.bib
type: paper
paper_type: journal
---

Embedded medical devices are being increasingly used to monitor and treat patients. The monitoring is especially important as in the [UK's 10-year health plan](https://www.gov.uk/government/publications/10-year-health-plan-for-england-fit-for-the-future) released in 2025, there is a push to both increase the use of digital technologies and to undertake a more proactive and preventative approach to healthcare. For patients with diabetes, having access to data provided by a [smart insole](https://doi.org/10.1016/j.diabres.2021.109091) can be used to supplement a loss of sensation and reduce the likelihood of further harm. However, as this involves digital technology, there is the potential for malicious adversaries to take advantage of these embedded medical devices to achieve various objectives.

<!-- readmore -->

## Importance

When developing a healthcare product there are [strict regulatory requirements](https://innovation.nhs.uk/innovation-guides/regulation/) that these products must meet, with different requirements depending on the potential for the product to cause harm to a patient. While the NHS offers [cyber security guidance](https://digital.nhs.uk/cyber-and-data-security/guidance-and-resources), this focuses on organisation security and security of IT networks. There is guidance for [medical devices](https://digital.nhs.uk/cyber-and-data-security/guidance-and-resources/guidance-on-protecting-connected-medical-devices), but this is at a high level. As such, there is a need to understand in detail what goals adversaries may seek to achieve by attacking embedded medical devices and what potential paths could be taken to do so. With this information developers of medical devices such as smart insoles have a better understanding of the specific threat model they need to consider when securing their device.

<figure>
    <img src="/images/Sensors2026-DataFlow_Diagram.svg" alt="Data flow diagram of smart insole from the sensor, to phone to health care provider" class="align-center" />
    <figcaption class="align-center">
    A Data Flow Diagram of smart insole being used to monitor a patient.
    </figcaption>
</figure>
