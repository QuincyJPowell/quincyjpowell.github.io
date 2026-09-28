---
layout: archive
title: Art
permalink: /art/
description: Visual work, experiments, and the creative practice that runs underneath everything else.
---

<div class="category-page art-page">

  <section class="category-hero art-hero">
    <div class="category-hero-copy">
      <p class="category-eyebrow">Visual · Illustration · Experiment</p>

      <h1>
        Things worth seeing differently.
      </h1>

      <p class="category-lead">
        Art is where I experiment with images, materials, ideas, and ways of seeing. Some pieces are finished works. Others are studies, experiments, or simply things I needed to make.
      </p>
    </div>

    <div class="category-hero-shape" aria-hidden="true"></div>
  </section>


  <section class="category-section art-intro">
    <div class="category-section-intro">

      <p class="category-eyebrow">
        What art means to me
      </p>

      <h2>
        Making is a way of looking.
      </h2>

      <p>
        Art gives me a place to notice things, play with visual ideas, and make something before I know exactly what it needs to become. It overlaps with the rest of my work, but it has its own reason for existing: sometimes the point is simply to see what happens when I make something.
      </p>

    </div>
  </section>


  <section class="category-section art-areas">

    <div class="category-section-intro">

      <p class="category-eyebrow">
        Areas of practice
      </p>

      <h2>
        Different ways of making.
      </h2>

      <p>
        My visual work moves between finished pieces, practical design, experiments, and the visual worlds I build alongside other projects.
      </p>

    </div>


    <div class="art-area-grid">

      <article class="art-area-card">

        <p class="art-area-type">
          Drawing · Illustration
        </p>

        <h3>
          Illustration
        </h3>

        <p>
          Drawing and visual storytelling, from individual pieces to the characters, objects, and environments that give larger ideas a visual language.
        </p>

      </article>


      <article class="art-area-card">

        <p class="art-area-type">
          Images · Observation
        </p>

        <h3>
          Photography
        </h3>

        <p>
          Images built around noticing places, details, atmosphere, and the small visual moments that are easy to overlook.
        </p>

      </article>


      <article class="art-area-card">

        <p class="art-area-type">
          Process · Materials
        </p>

        <h3>
          Experimental &amp; Mixed Media
        </h3>

        <p>
          Studies, material experiments, unusual combinations, and work where figuring out the process is part of figuring out the piece.
        </p>

      </article>


      <article class="art-area-card art-area-card-wide">

        <p class="art-area-type">
          Design · Communication
        </p>

        <h3>
          Visual Design
        </h3>

        <p>
          The visual side of communication: composition, typography, layout, identity, and the decisions that help an idea become something people can see and understand.
        </p>

      </article>


      <article class="art-area-card art-area-card-practice">

        <p class="art-area-type">
          Studies · Play · Process
        </p>

        <h3>
          Creative Practice
        </h3>

        <p>
          Sketches, studies, visual experiments, and unfinished work that document the process rather than only the finished result.
        </p>

      </article>

    </div>

  </section>


  <section class="category-section art-featured">

    <div class="category-section-intro">

      <p class="category-eyebrow">
        Featured visual work
      </p>

      <h2>
        Where the visual work starts to take shape.
      </h2>

      <p>
        Selected projects where art is part of the work itself. This section can grow into a more image-led gallery as the archive grows.
      </p>

    </div>


    <div class="art-featured-gallery">

      {% assign art_featured = site.projects
        | where_exp: "project", "project.project_types contains 'art'"
        | where: "featured", true
        | sort: "date"
        | reverse
      %}


      {% for project in art_featured limit: 3 %}

        <article class="art-project-feature">

          <a href="{{ project.url | relative_url }}">

            {% if project.image %}

              <div class="art-project-image">
                <img
                  src="{{ project.image | relative_url }}"
                  alt="{{ project.title }}"
                >
              </div>

            {% else %}

              <div class="art-project-placeholder" aria-hidden="true">
                <span>
                  {{ project.title }}
                </span>
              </div>

            {% endif %}


            <div class="art-project-copy">

              <p class="art-project-format">
                {{ project.format }}
              </p>

              <h3>
                {{ project.title }}
              </h3>

              <p>
                {{ project.description }}
              </p>

              <span class="art-project-link">
                View project
                <span aria-hidden="true">→</span>
              </span>

            </div>

          </a>

        </article>

      {% endfor %}


      {% if art_featured.size == 0 %}

        <div class="art-gallery-empty">

          <p class="category-eyebrow">
            The gallery is still growing
          </p>

          <h3>
            More visual work will live here.
          </h3>

          <p>
            I would rather leave space for real work than fill the portfolio with placeholders pretending to be finished pieces.
          </p>

        </div>

      {% endif %}

    </div>

  </section>


  <section class="category-section art-recent">

    <div class="category-section-heading">

      <div>

        <p class="category-eyebrow">
          Recent visual work
        </p>

        <h2>
          What I have been making lately.
        </h2>

      </div>

    </div>


    <div class="art-recent-grid">

      {% assign art_projects = site.projects
        | where_exp: "project", "project.project_types contains 'art'"
        | sort: "date"
        | reverse
      %}


      {% for project in art_projects limit: 6 %}

        <a
          class="art-project-tile"
          href="{{ project.url | relative_url }}"
        >

          {% if project.image %}

            <div class="art-project-tile-image">

              <img
                src="{{ project.image | relative_url }}"
                alt="{{ project.title }}"
              >

            </div>

          {% else %}

            <div class="art-project-tile-placeholder" aria-hidden="true">

              <span>
                {{ project.title }}
              </span>

            </div>

          {% endif %}


          <div class="art-project-tile-copy">

            <p>
              {{ project.format }}
            </p>

            <h3>
              {{ project.title }}
            </h3>

          </div>

        </a>

      {% endfor %}


      {% if art_projects.size == 0 %}

        <div class="art-gallery-empty">

          <p class="category-eyebrow">
            Nothing to show yet
          </p>

          <h3>
            The visual archive will grow here.
          </h3>

          <p>
            This space is intentionally ready for artwork, studies, photography, and other visual projects as they become part of the portfolio.
          </p>

        </div>

      {% endif %}

    </div>

  </section>


  <section class="art-practice">

    <div class="art-practice-copy">

      <p class="category-eyebrow">
        Creative practice
      </p>

      <h2>
        Not everything needs to become a finished piece.
      </h2>

      <p>
        Some of the most useful visual work happens before there is anything polished to show. Sketches, failed experiments, studies, visual notes, and half-formed ideas are still part of learning how to make things.
      </p>

    </div>


    <div
      class="art-practice-mark"
      aria-hidden="true"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

  </section>


  <section class="category-closing art-closing">

    <div class="category-closing-card">

      <div>

        <p class="category-eyebrow">
          Keep exploring
        </p>

        <h2>
          There is always another way to see it.
        </h2>

        <p>
          Art is one part of a larger practice of learning, making, and figuring things out.
        </p>

      </div>


      <div class="category-closing-links">

        <a
          class="button"
          href="{{ '/development/' | relative_url }}"
        >
          Explore Development
        </a>

        <a
          class="category-closing-explore"
          href="{{ '/portfolio/' | relative_url }}"
        >
          Back to Portfolio
          <span aria-hidden="true">→</span>
        </a>

      </div>

    </div>

  </section>

</div>
