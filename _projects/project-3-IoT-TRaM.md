---
title: "IoT Transport and Mobility Demonstrator"
excerpt: "Demonstrating security and privacy techniques for connected autonomous vehicles in a real-world environment.<br/>Duration: August 2018 - May 2019"
collection: projects
---

With the intent for connected autonomous vehicles (CAVs) to be deployed on UK roads in the near future it is vital that they are rigorously tested. Part of this testing will involve the cyber security aspects of these vehicles. The IoT-TRaM project saw four cyber security and privacy innovations developed within PETRAS deployed in real world environments. Recommendations were made in our final report to reduce the barriers of entry and ways to improve the experience of performing cyber security testing in real world environments.

Testing was performed on the campuses of the University of Warwick, University of Surrey and at Millbrook Proving Ground.

An event was held at the University of Warwick on the 21st of February 2019 to demonstrate these four privacy and security techniques for vehicle-to-vehicle communication working in a real-world environment.

Research from this project was demonstrated at the Living in the Internet of Things conference hosted by the IET on the 1st to 2nd of May 2019 and also at the House of Lords in February 2019.

![Project Team](/images/iot-tram-team.jpg)

# Videos of Two Techniques

Two of the implemented techniques were tested at Millbrook Proving Ground during this project. A visualisation of these techniques can be seen below. Stationary RSUs were included to simulated roadside infrastructure for some experiments, but were used as stationary vehicles in the two videos below.

## Authentication Prioritisation

In this video a priority value is calculated for each messages received. These received messages are then inserted into a priority queue, and messages with a higher priority have their digital signature verified first.

<video controls="" style="max-width: 100%; max-height: 100%;"><source src="https://warwick.ac.uk/fac/sci/dcs/people/matthew_bradbury/projects/iot-tram/millbrook-oppauth-2019-04-12-am-txrx.webm" type="video/webm"/></video>

## Group Signatures

In this video a privacy preserving group signature scheme is shown. Group signatures are useful in certain applications (such as platoons of autonomous vehicles) where vehicles need to be able to check that a message arrived from a vehicle within that group. However, there are privacy issued with such a technique as the group signature would contain a public key that allows the group to be tracked over time. In order to mitigate this, the signature can be created with time or location varying information that remains the same for all members of the group. In this example, a timestamp that changes periodically is used to provide a unique signature and thus long-term untraceability. The change in identity is represented by a change in colour of the vehicles.

<video controls="" style="max-width: 100%; max-height: 100%;"><source src="https://warwick.ac.uk/fac/sci/dcs/people/matthew_bradbury/projects/iot-tram/millbrook-grpsig-2019-04-12-pm-txrx.mp4" type="video/mp4"/></video>

# Information

Role: Research Fellow
Duration: August 2018 - May 2019
People:
 * [Prof. Carsten Maple](https://warwick.ac.uk/fac/sci/wmg/people/profile/?wmgid=1102) (PI)
 * [Dr. Haitham Cruickshank](https://www.surrey.ac.uk/people/haitham-cruickshank) (CoI)
Links:
 * [WMG News Article](https://warwick.ac.uk/fac/sci/wmg/mediacentre/news/newsitem?id=8a1785d86d3ece05016d3f4743ed0da2&tag=Carsten%20Maple)
 * [Trials Press Release](https://warwick.ac.uk/newsandevents/pressreleases/cyber_security_of/)

# Technical Reports

 *  Carsten Maple, **Matthew Bradbury**, Miles Elsden, Haitham Cruickshank, Hu Yuan, Chen Gu, and Phillip Asuquo. IoT Transport and Mobility Demonstrator: Cyber Security Testing on National Infrastructure. Technical Report, University of Warwick, Coventry, UK, May 2019.  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Maple_2019_IoTTransportMobility.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/IoT_TRaM_Report.pdf)] 
