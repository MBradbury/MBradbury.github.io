---
title: "Source Location Privacy for Wirless Sensor Networks"
excerpt: "Researche undertaken before and during my PhD on delaying an adversary discovering the location of a message source in a wireless sensor network.<br/>Duration: September 2014 - April 2018"
collection: projects
---

# Wireless Sensor Network

A wireless sensor is a basic computer with some sensors and a wireless radio. You can think of it in a similar way to a phone. Your phone has a wireless radio that lets it talk to a base station, this communication link is where your phone calls and internet access come from. The difference is that a sensor node doesn't have a similar range, instead they just use this radio to talk to each of the close by nodes. Using this wireless link the nodes then send interesting data gathered about light or temperature or humidity back to someone who can analyse this information.

The image shows what these nodes look like. In reality they are very small and the largest part of them are the two AA batteries that are required to power the nodes. An interesting thing about developing software for sensor networks is that nodes are expected to run on small batteries for a long period of time. So software being developed for these nodes needs to take energy into consideration.

# Source Location Privacy

In typical sensor network applications a single node in the network will want to send information (the source of the information) to another node in the network (the sink). For sensor networks this can be accomplished by flooding the network. What flooding means is that a message is passed along to neighbouring nodes until it cannot be passed on any more.

It has been shown that when a message is flooded though a network that an attacker who is listening to the messages can follow the transmission path back to the source of the message. The attacker does this by looking at the wireless signal strengths. When the attacker is facing in the direction a message is sent it can see the signal strength is higher and when facing away it is lower. Using this strategy the attacker determines the direction to travel in. This is why we need to provide source location privacy as flooding provides none.

![SLP Protectionless Animated](/images/slp-protectionless.gif)

An adversary can detect the direction that a message arrived from using a directional antenna. In the picture below a directional antenna is picking up signals sent from a 433MHz transmitter. A cheap commercial-off-the-shelf digital TV dongle is used with [SDRSharp](https://www.rtl-sdr.com/tag/sdrsharp/) to receive and visualise the signal.

![Panda with an Antenna](/images/panda-antenna.jpg)

## Using Fake Sources

One solution to provide source location privacy is to allocate some nodes in the network to be fake sources. These fake sources will flood the network with messages that are indistinguishable from the regular messages in the network, but their location will be away from the real source. So, instead of an attacker being lured to the real source the attacker is lured to the fake source.

The image below shows what happens when an algorithm that allocates fake sources in a sensor network. Instead of the attacker being lured towards the source, the attacker is instead drawn to the fake sources (in brown) that are flooding the network with fake messages.

![SLP Adaptive Animated](/images/slp-adaptive.gif)

## Using Diversionary Routes (ILP Inspired)

An alternative to fake sources is to use diversionary paths to increase the time it would take for the attacker to reach the source. These paths travel through different areas of the network to ensure that the attacker does not always receive that message. The messages also delay their travel, so that multiple messages will reach the same distance from the source at a specific time. This allows the attacker to make less positive movement towards the source.

<video controls="" style="max-width: 100%; max-height: 100%;"><source src="/videos/ilprouting_group_4.mp4" type="video/mp4"/></video>

## Why "Protecting Your Panda"?

This problem is usually introduced as the panda-hunter game. Where a wireless sensor network is deployed to monitor panda habitat. When a panda is detected by a node it becomes the source node and informs the sink node about the panda. At the sink node are conservationists who analyse the data. The attacker is a poacher who want to capture the panda by using the network to find the location.

# Information

Role: PhD Student

Duration: September 2014 - April 2018

Supervisor: [Dr. Arshad Jhumka](https://warwick.ac.uk/fac/sci/dcs/people/arshad_jhumka/)

Links:
 * [Source Code](https://github.com/MBradbury/slp)
 * [Datasets](https://zenodo.org/communities/warwickdcsslp/?page=1&size=20)

# Publications


## 2020

 *  **Matthew Bradbury**, Arshad Jhumka, and Carsten Maple. A Spatial Source Location Privacy-Aware Duty Cycle for Internet of Things Sensor Networks. *ACM Transactions on Internet of Things*, 2(1):1–31, 2020. In Press.  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2020_SpatialSourceLocation.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/TIOT2020.pdf)] 
 
## 2019

 *  **Matthew Bradbury**, Arshad Jhumka, and Carsten Maple. The Impact of Decreasing Transmit Power Levels on FlockLab To Achieve a Sparse Network. In *Proceedings of the 2nd Workshop on Benchmarking Cyber-Physical Systems and Internet of Things*, CPS-IoTBench '19, 7–12. New York, NY, USA, April 2019. ACM. [doi:10.1145/3312480.3313171](https://doi.org/10.1145/3312480.3313171).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2019_ImpactDecreasingTransmit.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/CPS-IoTBench2019.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/CPS-IoTBench2019.pdf)] 
 *  Chen Gu, **Matthew Bradbury**, and Arshad Jhumka. Phantom walkabouts: A customisable source location privacy aware routing protocol for wireless sensor networks. *Concurrency and Computation: Practice and Experience*, 31(20):e5304, 2019. [doi:10.1002/cpe.5304](https://doi.org/10.1002/cpe.5304).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Gu_2019_Phantomwalkabouts_customisable.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/CCPE2019.pdf)] 
 
## 2018

 
 *  Chen Gu, **Matthew Bradbury**, Jack Kirton, and Arshad Jhumka. A Decision Theoretic Framework for Selecting Source Location Privacy Aware Routing Protocols in Wireless Sensor Networks. *Future Generation Computing Systems*, 87:514–526, 2018. [doi:10.1016/j.future.2018.01.046](https://doi.org/10.1016/j.future.2018.01.046).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Gu_2018_ADecisionTheoretic.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/FGCS2018.pdf)] 
 *  **Matthew Bradbury**, Arshad Jhumka, and Matthew Leeke. Hybrid Online Protocols for Source Location Privacy in Wireless Sensor Networks. *Journal of Parallel and Distributed Computing*, 115:67–81, May 2018. [doi:10.1016/j.jpdc.2018.01.006](https://doi.org/10.1016/j.jpdc.2018.01.006).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2018_HybridOnlineProtocols.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/JPDC2018.pdf)] 
 *  Jack Kirton, **Matthew Bradbury**, and Arshad Jhumka. Towards optimal source location privacy-aware TDMA schedules in wireless sensor networks. *Computer Networks*, 146:125–137, 2018. [doi:10.1016/j.comnet.2018.09.010](https://doi.org/10.1016/j.comnet.2018.09.010).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Kirton_2018_Towardsoptimalsource.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/COMNET2018.pdf)] 
 
## 2017

 
 *  **Matthew Bradbury** and Arshad Jhumka. A Near-Optimal Source Location Privacy Scheme for Wireless Sensor Networks. In *16th IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)*, 409–416. August 2017. [doi:10.1109/Trustcom/BigDataSE/ICESS.2017.265](https://doi.org/10.1109/Trustcom/BigDataSE/ICESS.2017.265).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2017_OptimalSourceLocation.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/TrustCom2017.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/TrustCom2017.pdf)] 
 *  Arshad Jhumka and **Matthew Bradbury**. Deconstructing Source Location Privacy-aware Routing Protocols. In *Proceedings of the Symposium on Applied Computing*, SAC'17, 431–436. ACM, April 2017. [doi:10.1145/3019612.3019655](https://doi.org/10.1145/3019612.3019655).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Jhumka_2017_DeconstructingSourceLocation.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/SAC-DADS2017.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/SAC-DADS2017.pdf)] 
 *  Chen Gu, **Matthew Bradbury**, and Arshad Jhumka. Phantom Walkabouts in Wireless Sensor Networks. In *Proceedings of the Symposium on Applied Computing*, SAC'17, 609–616. ACM, April 2017. [doi:10.1145/3019612.3019732](https://doi.org/10.1145/3019612.3019732).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Gu_2017_PhantomWalkaboutsWireless.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/SAC-NET2017.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/SAC-NET2017.pdf)] 
 *  Jack Kirton, **Matthew Bradbury**, and Arshad Jhumka. Source Location Privacy-Aware Data Aggregation Scheduling for Wireless Sensor Networks. In *37th IEEE International Conference on Distributed Computing Systems (ICDCS)*, 2200–2205. June 2017. [doi:10.1109/ICDCS.2017.171](https://doi.org/10.1109/ICDCS.2017.171).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Kirton_2017_SourceLocationPrivacy.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/ICDCS2017.pdf)] 
 *  **Matthew Bradbury** and Arshad Jhumka. Understanding Source Location Privacy Protocols in Sensor Networks via Perturbation of Time Series. In *IEEE INFOCOM*, 1611–1619. May 2017. [doi:10.1109/INFOCOM.2017.8057122](https://doi.org/10.1109/INFOCOM.2017.8057122).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2017_UnderstandingSourceLocation.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/InfoCom2017.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/InfoCom2017.pdf)] 
 
## 2016

 
 *  Joanna F. Laikin, **Matthew Bradbury**, Chen Gu, and Matthew Leeke. Towards Fake Sources for Source Location Privacy in Wireless Sensor Networks with Multiple Sources. In *15th IEEE International Conference on Communication Systems (ICCS'16)*, 1–6. December 2016. [doi:10.1109/ICCS.2016.7833572](https://doi.org/10.1109/ICCS.2016.7833572).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Laikin_2016_TowardsFakeSources.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/ICCS2016.pdf)] 
 
## 2015

 
 *  **Matthew Bradbury**, Matthew Leeke, and Arshad Jhumka. A Dynamic Fake Source Algorithm for Source Location Privacy in Wireless Sensor Networks. In *14th IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)*, 531–538. August 2015. [doi:10.1109/Trustcom.2015.416](https://doi.org/10.1109/Trustcom.2015.416).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2015_DynamicFakeSource.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/TrustCom2015.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/TrustCom2015.pdf)] 
 *  Chen Gu, **Matthew Bradbury**, Arshad Jhumka, and Matthew Leeke. Assessing the Performance of Phantom Routing on Source Location Privacy in Wireless Sensor Networks. In *21st IEEE Pacific Rim International Symposium on Dependable Computing (PRDC)*, 99–108. November 2015. [doi:10.1109/PRDC.2015.9](https://doi.org/10.1109/PRDC.2015.9).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Gu_2015_AssessingPerformancePhantom.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/PRDC2015.pdf)] 
 *  Arshad Jhumka, **Matthew Bradbury**, and Matthew Leeke. Fake source-based source location privacy in wireless sensor networks. *Concurrency and Computation: Practice and Experience*, 27(12):2999–3020, 2015. [doi:10.1002/cpe.3242](https://doi.org/10.1002/cpe.3242).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Jhumka_2015_Fakesourcebased.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/CCPE2015.pdf)] 

## 2013
 
 *  Alasdair Thomason, Matthew Leeke, **Matthew Bradbury**, and Arshad Jhumka. Evaluating the Impact of Broadcast Rates and Collisions on Fake Source Protocols for Source Location Privacy. In *12th IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)*, 667–674. July 2013. [doi:10.1109/TrustCom.2013.81](https://doi.org/10.1109/TrustCom.2013.81).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Thomason_2013_EvaluatingImpactBroadcast.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/TrustCom2013.pdf)] 
 
## 2012
 
 *  Arshad Jhumka, **Matthew Bradbury**, and Matthew Leeke. Towards Understanding Source Location Privacy in Wireless Sensor Networks through Fake Sources. In *11th IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)*, 760–768. June 2012. [doi:10.1109/TrustCom.2012.281](https://doi.org/10.1109/TrustCom.2012.281).  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Jhumka_2012_TowardsUnderstandingSource.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/TrustCom2012.pdf)] [[presentation](https://github.com/MBradbury/publications/raw/master/presentations/TrustCom2012.pdf)] 
 
## PhD Thesis

 *  **Matthew Bradbury**. *Near Optimal Routing Protocols for Source Location Privacy in Wireless Sensor Networks: Modelling, Design and Evaluation*. PhD thesis, University of Warwick, Coventry, UK, 2018. URL: <http://wrap.warwick.ac.uk/115772>.  
[[bibtex](https://github.com/MBradbury/publications/raw/master/bibtex/Bradbury_2018_NearOptimalRouting.bib)] [[file](https://github.com/MBradbury/publications/raw/master/papers/Thesis.pdf)] 
