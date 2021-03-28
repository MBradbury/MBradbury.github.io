---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

<table class="news_table">
	<tbody>
		{% for item in site.data.news %}
		<tr>
			<td><i class="fas fa-fw {{ item.icon }}" aria-hidden="true"></i></td>
			<td>{{ item.month }}<br />{{ item.year }}</td>
			<td>
				{% if item.link %}
				<a href="{{ item.link }}">
				{% endif %}
					{{ item.name }}
				{% if item.link %}
				</a>
				{% endif %}
			</td>
			<td>{{ item.description }}</td>
		</tr>
		{% endfor %}
	</tbody>
</table>
