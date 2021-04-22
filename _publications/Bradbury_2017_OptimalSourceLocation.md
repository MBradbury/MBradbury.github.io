---
title: "A Near-Optimal Source Location Privacy Scheme for Wireless Sensor Networks"
citation: "**Matthew Bradbury** and Arshad Jhumka. A Near-Optimal Source Location Privacy Scheme for Wireless Sensor Networks. In *16th IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)*, 409–416. August 2017. [doi:10.1109/Trustcom/BigDataSE/ICESS.2017.265](https://doi.org/10.1109/Trustcom/BigDataSE/ICESS.2017.265)."
file: https://raw.githubusercontent.com/MBradbury/publications/master/papers/TrustCom2017.pdf
firstpage: https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/TrustCom2017.svg
presentation: https://raw.githubusercontent.com/MBradbury/publications/master/presentations/TrustCom2017.pdf
bibtex: https://raw.githubusercontent.com/MBradbury/publications/master/bibtex/Bradbury_2017_OptimalSourceLocation.bib
dataset: https://doi.org/10.5281/zenodo.801222
---

## Summary

Source Location Privacy (SLP) is an important problem when monitoring valuable assets with wireless sensors. It is important that sensitive context information, such as the location of an asset, is not revealed to adversaries. This work aimed to investigate optimal strategies to provide SLP by formulating the routing problem using integer linear programming (ILP). [IBM's ILOG CPLEX](https://www.ibm.com/uk-en/products/ilog-cplex-optimization-studio) was used to obtain an optimal solution to the [model](https://github.com/MBradbury/slp-attacker-ilp). This solution aimed to delay and group messages until as late as possible and then deliver the messages to their destination. However, this solution made the assumption that wireless communication is perfectly reliable, which is not the case. So the optimal solution was recreated by a near-optimal routing algorithm that aimed to produce similar behaviour.

## Example

An example optimal solution can be found below, where the attacker starts at node 13 and the source at node 1 sends 7 messages. Each of these messages need to reach the sink at node 13 without the attacker reaching node 1.

![Animation of an optimal solution](/images/TrustCom2017-results_ilp5x5_2_anim.gif)

## Importance

Using ILP to identify an optimal solution led to the discovery of an approach that had not previously been investigated in the literature. In this case delaying and grouping messages. Using a variety of techniques to obtain solutions to the same problem as different techniques can lead to different ways to solve the problem.

## Perspectives

Techniques such as ILP are useful in understanding what the optimal behaviour of a system could be, however, in practise the assumptions needed to obtain this optimal result (such as reliable wireless links) or global knowledge are unlikely to be present. This does not make technqiues to obtain unusable, but care must be taken in translating optimal results into algorithms that aim to replicate them closely.
