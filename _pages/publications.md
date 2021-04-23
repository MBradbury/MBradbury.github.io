---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
sitemap: true
---

The bibtex for all my publications is available from [here](https://raw.githubusercontent.com/MBradbury/publications/master/self.bib).

## Featured Articles

<table style="width:100%;" class="page__table-no-border">
    <tbody>
        <tr>
            <td style="width: 33%;"><a href="/publications/Bradbury_2021_TrustTrackersComputation"><img src="https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/InfoCom2021.svg" alt="InfoCom21" style="width:80%" class="page__image-center"></a></td>
            <td style="width: 33%;"><a href="/publications/Bradbury_2020_PrivacyChallengesProtecting"><img src="https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/Access2020.svg" alt="Access2020" style="width:80%" class="page__image-center"></a></td>
            <td style="width: 33%;"><a href="/publications/Bradbury_2017_OptimalSourceLocation"><img src="https://raw.githubusercontent.com/MBradbury/publications/master/firstpages/InfoCom2017.svg" alt="TrustCom2017" style="width:80%" class="page__image-center"></a></td>
        </tr>
        <tr>
            <td style="width: 33%;">Trust Trackers for Computation Offloading in Edge-Based IoT Networks. In IEEE INFOCOM 2021.</td>
            <td style="width: 33%;">Privacy Challenges with Protecting Live Vehicular Location Context. In IEEE Access 2020.</td>
            <td style="width: 33%;">A Near-Optimal Source Location Privacy Scheme for Wireless Sensor Networks. In TrustCom 2017.</td>
        </tr>
    </tbody>
</table>

## Publication Map

<script src="https://d3js.org/d3.v6.min.js" type="text/javascript"
    integrity="sha384-ma33ZEb8L5emtidZhYJFZNIFdht2E8f5wHQMKQGom0aIx9rRKm86XXCjGxOISpM9"
    crossorigin="anonymous"
></script>

{% include draw-publication-map.html %}

<div class="publication-list">
    {% assign prev_year = nil %}
    {% assign publications = site.publications | concat: site.publications_hidden | where: "type", "paper" | sort: 'publishDate' %}
    
    {% for publication in publications reversed %}
        {% assign current_year = publication.publishDate | slice: 0, 4 %}
        {% if current_year != prev_year %}
            {% if prev_year != nil %}
                </ul>
            {% endif %}

            <h2 id='pub_{{ current_year }}'>{{ current_year }}</h2>
            <ul>
        {% endif %}
        {% assign prev_year = current_year %}

        <li class="publication" id="{{ publication.path | split: '/' | last | remove: '.md' }}">
            {{ publication.citation | markdownify | remove: "<p>" | remove: "</p>" }}

            {% if publication.bibtex or publication.file or publication.presentation or publication.dataset %}
              <br />
            {% endif %}

            {% if publication.bibtex %}
             [<a href="{{ publication.bibtex }}">bibtex</a>] 
            {% endif %}
            {% if publication.file %}
             [<a href="{{ publication.file }}">file</a>] 
            {% endif %}
            {% if publication.presentation %}
             [<a href="{{ publication.presentation }}">presentation</a>] 
            {% endif %}
            {% if publication.dataset %}
             [<a href="{{ publication.dataset }}">dataset</a>] 
            {% endif %}
        </li>
    {% endfor %}
    </ul>
</div>

<h2 id="PhDThesis">PhD Thesis</h2>
<div class="publication-list">
    {% assign publications = site.publications | concat: site.publications_hidden | where: "type", "thesis" | sort: 'publishDate' %}
    <ul>
    {% for publication in publications reversed %}
        <li class="publication" id="{{ publication.path | split: '/' | last | remove: '.md' }}">
            {{ publication.citation | markdownify | remove: "<p>" | remove: "</p>" }}

            {% if publication.bibtex or publication.file or publication.presentation or publication.dataset %}
              <br />
            {% endif %}

            {% if publication.bibtex %}
             [<a href="{{ publication.bibtex }}">bibtex</a>] 
            {% endif %}
            {% if publication.file %}
             [<a href="{{ publication.file }}">file</a>] 
            {% endif %}
            {% if publication.presentation %}
             [<a href="{{ publication.presentation }}">presentation</a>] 
            {% endif %}
            {% if publication.dataset %}
             [<a href="{{ publication.dataset }}">dataset</a>] 
            {% endif %}
        </li>
    {% endfor %}
    </ul>
</div>

<h2 id="TechnicalReports">Technical Reports</h2>
<div class="publication-list">
    {% assign publications = site.publications | concat: site.publications_hidden | where: "type", "techreport" | sort: 'publishDate' %}
    <ul>
    {% for publication in publications reversed %}
        <li class="publication" id="{{ publication.path | split: '/' | last | remove: '.md' }}">
            {{ publication.citation | markdownify | remove: "<p>" | remove: "</p>" }}

            {% if publication.bibtex or publication.file or publication.presentation or publication.dataset %}
              <br />
            {% endif %}

            {% if publication.bibtex %}
             [<a href="{{ publication.bibtex }}">bibtex</a>] 
            {% endif %}
            {% if publication.file %}
             [<a href="{{ publication.file }}">file</a>] 
            {% endif %}
            {% if publication.presentation %}
             [<a href="{{ publication.presentation }}">presentation</a>] 
            {% endif %}
            {% if publication.dataset %}
             [<a href="{{ publication.dataset }}">dataset</a>] 
            {% endif %}
        </li>
    {% endfor %}
    </ul>
</div>
