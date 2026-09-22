---
layout: archive
title: Portfolio & Projects
permalink: /portfolio/
description: A curated look at the work I research, build, write, and create.
---

<div class="portfolio-page">

  <section class="portfolio-hero" aria-labelledby="portfolio-hero-title">

    <div class="portfolio-hero-art" aria-hidden="true">
      <span class="portfolio-hero-orbit portfolio-hero-orbit-one"></span>
      <span class="portfolio-hero-orbit portfolio-hero-orbit-two"></span>
      <span class="portfolio-hero-sprig portfolio-hero-sprig-one"></span>
      <span class="portfolio-hero-sprig portfolio-hero-sprig-two"></span>
    </div>

    <div class="portfolio-hero-copy">

      <p class="portfolio-eyebrow">A working collection</p>

      <h1 id="portfolio-hero-title">
        Work worth<br>
        wandering through.
      </h1>

      <p class="portfolio-hero-intro">
        Research, professional work, writing, development, art, and the projects
        that happen somewhere in between.
      </p>

      <a class="portfolio-hero-link" href="#featured-work">
        Start exploring <span aria-hidden="true">↓</span>
      </a>

    </div>

    <div class="portfolio-hero-note" aria-hidden="true">
      <span>Research</span>
      <span>Build</span>
      <span>Create</span>
    </div>

  </section>


  <section class="portfolio-featured" id="featured-work" aria-labelledby="featured-title">

    <div class="portfolio-section-heading">

      <p class="portfolio-eyebrow">Selected work</p>

      <h2 id="featured-title">Featured Projects</h2>

      <p>
        A few projects that show the range of things I like to make, study,
        and figure out.
      </p>

    </div>


    <div class="portfolio-featured-list">

      {% assign featured_projects = site.projects | where: "featured", true %}

      {% for project in featured_projects %}

        <article class="portfolio-feature-card {% if forloop.first %}portfolio-feature-card-primary{% endif %}">

          <a class="portfolio-feature-link" href="{{ project.url | relative_url }}">

            <div class="portfolio-project-art portfolio-project-art-{{ forloop.index }}" aria-hidden="true">

              <span class="portfolio-art-label">
                {% if project.format %}
                  {{ project.format }}
                {% else %}
                  Project
                {% endif %}
              </span>

              <span class="portfolio-art-mark"></span>

            </div>


            <div class="portfolio-feature-copy">

              <div class="portfolio-feature-meta">

                {% if project.project_types %}

                  {% for type in project.project_types limit: 2 %}

                    <span>{{ type | replace: "-", " " }}</span>

                  {% endfor %}

                {% endif %}

              </div>


              <h3>{{ project.title }}</h3>


              {% if project.description %}

                <p>{{ project.description }}</p>

              {% endif %}


              <span class="portfolio-card-link">
                View project <span aria-hidden="true">↗</span>
              </span>

            </div>

          </a>

        </article>

      {% endfor %}

    </div>

  </section>


  <section class="portfolio-bridge" aria-labelledby="portfolio-bridge-title">

    <div class="portfolio-bridge-mark" aria-hidden="true"></div>

    <div>

      <p class="portfolio-eyebrow">More to come</p>

      <h2 id="portfolio-bridge-title">
        This collection will keep growing.
      </h2>

      <p>
        Some projects are finished. Some are still becoming. I want this page
        to make room for both.
      </p>

    </div>

  </section>


  <section class="portfolio-next" aria-label="Explore more of my work">

    <a href="{{ '/academic/' | relative_url }}">Academic</a>
    <a href="{{ '/professional/' | relative_url }}">Professional</a>
    <a href="{{ '/development/' | relative_url }}">Development</a>
    <a href="{{ '/writing/' | relative_url }}">Writing</a>
    <a href="{{ '/art/' | relative_url }}">Art</a>

  </section>

</div>
