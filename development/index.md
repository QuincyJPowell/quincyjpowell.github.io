---
layout: archive
title: Development
permalink: /development/
description: NEEDS CONTENT
---

# Website & Video Game Development

With a focus on learning how different code languages integrate in a variety of formats, I have been working on a variety of projects.

---

## Areas of Development

<div class="writing-grid">

<div class="writing-card">

<h3>Website Development</h3>

<p>
My website is the perfect example for technical web development, utilizing a variety of tools for functionality.
</p>

</div>


<div class="writing-card">

<h3>Video Game Development</h3>

<p>
<strong>Seven Oaks Farm</strong><br>
Your new favorite cozy farming game, with a twist! Welcome to Seven Oaks!
</p>

</div>

</div>

---

## Featured Development Projects

NEEDS CONTENT

<div class="project-grid">

NEEDS CONTENT

</div>

---

## Recent Development Work

<div class="project-grid">

{% assign development_projects = site.projects | where_exp: "project", "project.project_types contains 'development'" | sort: "date" | reverse %}

{% for project in development_projects limit: 6 %}
  {% include project-card.html project=project %}
{% endfor %}

</div>
