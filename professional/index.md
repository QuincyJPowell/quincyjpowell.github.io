---
layout: archive
title: Professional
permalink: /professional/
description: NEEDS CONTENT
---

# Professional Work

NEEDS CONTENT

---

## Areas of Professional Work

<div class="writing-grid">

<a class="writing-card" href="{{ '/professional/#seo' | relative_url }}" id="seo">

<h3>SEO</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore SEO →</span>

</a>


<a class="writing-card" href="{{ '/professional/#digital-accessibility' | relative_url }}" id="digital-accessibility">

<h3>Digital Accessibility</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Digital Accessibility →</span>

</a>


<a class="writing-card" href="{{ '/professional/#paid-marketing' | relative_url }}" id="paid-marketing">

<h3>Paid Marketing</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Paid Marketing →</span>

</a>


<a class="writing-card" href="{{ '/professional/#social-media' | relative_url }}" id="social-media">

<h3>Social Media</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Social Media →</span>

</a>


<a class="writing-card" href="{{ '/professional/#ai-marketing' | relative_url }}" id="ai-marketing">

<h3>AI Marketing</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore AI Marketing →</span>

</a>


<a class="writing-card" href="{{ '/professional/#marketing-research' | relative_url }}" id="marketing-research">

<h3>Marketing Research</h3>

<p>
NEEDS CONTENT
</p>

<span>Explore Marketing Research →</span>

</a>

</div>

---

## Featured Professional Work

NEEDS CONTENT

<div class="project-grid">

NEEDS CONTENT

</div>

---

## Recent Professional Work

<div class="project-grid">

{% assign professional_projects = site.projects | where_exp: "project", "project.project_types contains 'professional'" | sort: "date" | reverse %}

{% for project in professional_projects limit: 6 %}
  {% include project-card.html project=project %}
{% endfor %}

</div>
