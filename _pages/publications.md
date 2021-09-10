---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
sitemap: true
---

The bibtex for all my publications is available from [here](https://raw.githubusercontent.com/MBradbury/publications/master/self.bib).

## Featured Articles

{% assign featured_articles = site.publications | concat: site.publications_hidden | where_exp: "item", "site.data.featured_articles contains item.path" | sort: 'publishDate' %}

<table style="width:100%;" class="page__table-no-border">
    <tbody>
        <tr>
            {% for featured_article in featured_articles %}
                <td style="width: 33%;"><a href="{{ featured_article.url }}"><img src="{{ featured_article.firstpage }}" alt="First page of {{ featured_article.title }}" style="width:80%" class="page__image-center"></a></td>
            {% endfor %}
        </tr>
        <tr>
            {% for featured_article in featured_articles %}
                <td style="width: 33%;">{{ featured_article.title }} ({{ featured_article.publishDate | slice: 0, 4 }}).</td>
            {% endfor %}
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
            {% if publication.collection == 'publications' %}
             [<a href="{{ publication.url }}">more details</a>]
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
