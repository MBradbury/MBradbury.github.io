---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
sitemap: true
---

The bibtex for all my publications is available from [here](https://raw.githubusercontent.com/MBradbury/publications/master/self.bib).

## Featured Articles

{% assign featured_articles = site.publications | concat: site.publications_hidden | where_exp: "item", "site.data.featured_articles contains item.path" | sort: 'publishDate' | reverse %}

<table style="width:100%;" class="page__table-no-border">
    <tbody>
        <tr>
            {% for featured_article in featured_articles %}
                <td style="width: {{ 100 | divided_by: featured_articles.size }}%;"><a href="{{ featured_article.url }}"><img src="{{ featured_article.firstpage }}" alt="First page of {{ featured_article.title }}" style="width:80%" class="page__image-center"></a></td>
            {% endfor %}
        </tr>
        <tr>
            {% for featured_article in featured_articles %}
                <td style="width: {{ 100 | divided_by: featured_articles.size }}%;">{{ featured_article.title }} ({{ featured_article.publishDate | slice: 0, 4 }}).</td>
            {% endfor %}
        </tr>
    </tbody>
</table>

## Publication Map

{% include draw-publication-map.html %}

{% assign publications = site.publications | concat: site.publications_hidden | where: "type", "paper" | sort: 'publishDate' %}
{% include publication-list-split publications=publications %}

<h2 id="PhDThesis">PhD Thesis</h2>
{% assign publications = site.publications | concat: site.publications_hidden | where: "type", "thesis" | sort: 'publishDate' %}
{% include publication-list publications=publications %}

<h2 id="TechnicalReports">Technical Reports</h2>
{% assign publications = site.publications | concat: site.publications_hidden | where: "type", "techreport" | sort: 'publishDate' %}
{% include publication-list publications=publications %}
