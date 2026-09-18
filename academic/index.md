---
layout: archive
title: Academic
permalink: /academic/
description: NEEDS CONTENT
---

# Academic Work

NEEDS CONTENT

---

## Areas of Academic Exploration

<div class="writing-grid">

<a class="writing-card" href="{{ '/academic/#organic-marketing' | relative_url }}" id="organic-marketing">

<h3>Organic Marketing</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Organic Marketing →</span>

</a>


<a class="writing-card" href="{{ '/academic/#paid-marketing' | relative_url }}" id="paid-marketing">

<h3>Paid Marketing</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Paid Marketing →</span>

</a>


<a class="writing-card" href="{{ '/academic/#consumer-behavior' | relative_url }}" id="consumer-behavior">

<h3>Consumer Behavior</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Consumer Behavior →</span>

</a>


<a class="writing-card" href="{{ '/academic/#demographic-studies' | relative_url }}" id="demographic-studies">

<h3>Demographic Studies</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Demographic Studies →</span>

</a>


<a class="writing-card" href="{{ '/academic/#language-learning' | relative_url }}" id="language-learning">

<h3>Language Learning</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Language Learning →</span>

</a>


<a class="writing-card" href="{{ '/academic/#independent-research' | relative_url }}" id="independent-research">

<h3>Independent Research</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Independent Research →</span>

</a>

</div>

---

## Featured Academic Work

NEEDS CONTENT

<div class="project-grid">

NEEDS CONTENT

</div>

---

## Recent Academic Work

<div class="project-grid">

{% assign academic_projects = site.projects | where_exp: "project", "project.project_types contains 'academic'" | sort: "date" | reverse %}

{% for project in academic_projects limit: 6 %}
  {% include project-card.html project=project %}
{% endfor %}

</div>
