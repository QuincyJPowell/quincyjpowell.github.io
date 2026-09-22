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
  Start exploring <span aria-hidden="true">⌄</span>
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
  View project <span aria-hidden="true">↝</span>
</span>
              </span>

            </div>

          </a>

        </article>

      {% endfor %}

    </div>

  </section>


  <section class="portfolio-explore" aria-labelledby="explore-title">

    <div class="portfolio-section-heading portfolio-explore-heading">

      <p class="portfolio-eyebrow">Explore the work</p>

      <h2 id="explore-title">Different paths.<br>Same person.</h2>

      <p>
        My work doesn't fit neatly into one category. These are the places to
        start if you want to explore a particular part of what I do.
      </p>

    </div>


    <div class="portfolio-area-grid">

      <a class="portfolio-area-card portfolio-area-card-large"
         href="{{ '/academic/' | relative_url }}">

        

        <div class="portfolio-area-art portfolio-area-art-academic" aria-hidden="true">
          <span></span>
        </div>

        <div class="portfolio-area-copy">

          <p class="portfolio-eyebrow">Research · Analysis · Learning</p>

          <h3>Academic</h3>

          <p>
            Research, analysis, ideas, and the questions I keep coming back to.
          </p>

          <span class="portfolio-area-link">
            Explore Academic <span aria-hidden="true">↝</span>
          </span>

        </div>

      </a>


      <a class="portfolio-area-card"
         href="{{ '/professional/' | relative_url }}">

        

        <div class="portfolio-area-art portfolio-area-art-professional" aria-hidden="true">
          <span></span>
        </div>

        <div class="portfolio-area-copy">

          <p class="portfolio-eyebrow">Marketing · Strategy · Digital</p>

          <h3>Professional</h3>

          <p>
            Work shaped by real organizations, real audiences, and real problems.
          </p>

          <span class="portfolio-area-link">
            Explore Professional <span aria-hidden="true">↝</span>
          </span>

        </div>

      </a>


      <a class="portfolio-area-card"
         href="{{ '/writing/' | relative_url }}">

        

        <div class="portfolio-area-art portfolio-area-art-writing" aria-hidden="true">
          <span></span>
        </div>

        <div class="portfolio-area-copy">

          <p class="portfolio-eyebrow">Essays · Fiction · Poetry</p>

          <h3>Writing</h3>

          <p>
            Stories, reflections, ideas, and things I wanted to put into words.
          </p>

          <span class="portfolio-area-link">
            Explore Writing <span aria-hidden="true">↝</span>
          </span>

        </div>

      </a>


      <a class="portfolio-area-card"
         href="{{ '/development/' | relative_url }}">

        

        <div class="portfolio-area-art portfolio-area-art-development" aria-hidden="true">
          <span></span>
        </div>

        <div class="portfolio-area-copy">

          <p class="portfolio-eyebrow">Web · Games · Code</p>

          <h3>Development</h3>

          <p>
            Websites, games, experiments, and the technical work behind them.
          </p>

          <span class="portfolio-area-link">
            Explore Development <span aria-hidden="true">↝</span>
          </span>

        </div>

      </a>


      <a class="portfolio-area-card portfolio-area-card-wide"
         href="{{ '/art/' | relative_url }}">

        

        <div class="portfolio-area-art portfolio-area-art-art" aria-hidden="true">
          <span></span>
        </div>

        <div class="portfolio-area-copy">

          <p class="portfolio-eyebrow">Visual · Illustration · Experiment</p>

          <h3>Art</h3>

          <p>
            Visual work, experiments, and the creative practice that runs
            underneath everything else.
          </p>

          <span class="portfolio-area-link">
            Explore Art <span aria-hidden="true">↝</span>
          </span>

        </div>

      </a>

    </div>

  </section>


  <section class="portfolio-recent" aria-labelledby="recent-title">

    <div class="portfolio-recent-heading">

      <div>

        <p class="portfolio-eyebrow">The latest</p>

        <h2 id="recent-title">Recent Work</h2>

      </div>

      <p>
        New projects and updated work will surface here automatically.
      </p>

    </div>


    <div class="portfolio-recent-list">

      {% assign recent_projects = site.projects | sort: "date" | reverse %}

      {% for project in recent_projects limit: 4 %}

        <a class="portfolio-recent-card" href="{{ project.url | relative_url }}">

          <div class="portfolio-recent-index">
  {{ project.date | date: "%B %Y" }}
</div>

          <div class="portfolio-recent-main">

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

          </div>

          <span class="portfolio-recent-arrow" aria-hidden="true">↝</span>

        </a>

      {% endfor %}

    </div>

  </section>


  <section class="portfolio-archive" aria-labelledby="archive-title">

    <div class="portfolio-archive-inner">

      <div class="portfolio-section-heading portfolio-archive-heading">

        <p class="portfolio-eyebrow">The whole collection</p>

        <h2 id="archive-title">All Projects</h2>

        <p>
          Everything in one place. Projects can belong to more than one area,
          so there isn't just one way to find them.
        </p>

      </div>


      <div class="portfolio-all-projects">

        {% assign all_projects = site.projects | sort: "date" | reverse %}

        {% for project in all_projects %}

          <a class="portfolio-all-project"
             href="{{ project.url | relative_url }}">

            <div class="portfolio-all-project-title">

              <h3>{{ project.title }}</h3>

              {% if project.description %}
                <p>{{ project.description }}</p>
              {% endif %}

            </div>

            <div class="portfolio-all-project-meta">

              {% if project.format %}
                <span>{{ project.format }}</span>
              {% endif %}

              {% if project.project_types %}

                {% for type in project.project_types limit: 2 %}

                  <span>{{ type | replace: "-", " " }}</span>

                {% endfor %}

              {% endif %}

            </div>

            <span class="portfolio-all-project-arrow" aria-hidden="true">
              ↝
            </span>

          </a>

        {% endfor %}

      </div>

    </div>

  </section>


  <section class="portfolio-closing" aria-label="Portfolio closing">

    <p class="portfolio-eyebrow">Keep wandering</p>

    <h2>
      There's probably<br>
      more to find.
    </h2>

    <a href="{{ '/contact/' | relative_url }}">
      Get in touch <span aria-hidden="true">↝</span>
    </a>

  </section>

</div>
