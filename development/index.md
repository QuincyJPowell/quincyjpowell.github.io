---
layout: archive
title: Development
permalink: /development/
description: Websites, games, experiments, and the technical work behind them.
---

<div class="category-page development-page">

  <section class="category-hero development-hero">
    <div class="category-hero-copy">
      <p class="category-eyebrow">
        Web · Games · Code
      </p>

      <h1>
        Ideas are better when you can build them.
      </h1>

      <p class="category-lead">
        Development is where I take an idea apart, figure out how it could work, and then build enough of it to find out. Sometimes that means a website. Sometimes it means a game. Sometimes it means experimenting until something finally clicks.
      </p>
    </div>

    <div class="category-hero-shape" aria-hidden="true"></div>
  </section>


  <section class="category-section development-intro">

    <div class="category-section-intro">
      <p class="category-eyebrow">
        What development means to me
      </p>

      <h2>
        Learning by making things real.
      </h2>

      <p>
        I learn development best when I have something I actually want to build. That means the technical work is usually connected to a larger problem, story, experience, or idea rather than existing for its own sake.
      </p>
    </div>

  </section>


  <section class="category-section development-areas">

    <div class="category-section-intro">
      <p class="category-eyebrow">
        Areas of development
      </p>

      <h2>
        Different problems call for different tools.
      </h2>

      <p>
        My development work currently falls into a few overlapping areas, each with its own kind of challenge.
      </p>
    </div>


    <div class="development-area-grid">

      <article class="development-area-card">

        <h3>
          Website Development
        </h3>

        <p>
          Building and maintaining web experiences that bring together information architecture, content, design, accessibility, and technical structure.
        </p>

        <div class="development-area-topics">
          <span>Jekyll</span>
          <span>GitHub Pages</span>
          <span>HTML</span>
          <span>CSS / SCSS</span>
          <span>Liquid</span>
          <span>YAML</span>
          <span>Accessibility</span>
          <span>Information architecture</span>
        </div>

      </article>


      <article class="development-area-card">

        <h3>
          Game Development
        </h3>

        <p>
          Designing systems, mechanics, worlds, stories, and player experiences for games that are meant to be played rather than simply imagined.
        </p>

        <div class="development-area-topics">
          <span>Game systems</span>
          <span>Worldbuilding</span>
          <span>Game design</span>
          <span>Storytelling</span>
          <span>Player experience</span>
          <span>Pixel art</span>
        </div>

      </article>


      <article class="development-area-card development-area-card-wide">

        <div>
          <h3>
            Experiments &amp; Technical Learning
          </h3>

          <p>
            Smaller projects and experiments give me room to learn new tools, test ideas, solve unfamiliar problems, and understand what is happening underneath the finished experience.
          </p>
        </div>

        <div class="development-experiment-list">

          <div class="development-experiment">
            <strong>Learn</strong>
            <span>Understand a tool, language, system, or technique</span>
          </div>

          <div class="development-experiment">
            <strong>Build</strong>
            <span>Turn the idea into something tangible</span>
          </div>

          <div class="development-experiment">
            <strong>Iterate</strong>
            <span>Test, break, revise, and figure out what works</span>
          </div>

        </div>

      </article>

    </div>

  </section>


  <section class="category-section development-featured">

    <div class="category-section-intro">

      <p class="category-eyebrow">
        Featured development
      </p>

      <h2>
        Things I am actually building.
      </h2>

      <p>
        A few of the larger projects where development is part of the work itself.
      </p>

    </div>


    <div class="category-projects project-grid">

      {% assign development_featured = site.projects
        | where_exp: "project", "project.project_types contains 'development'"
        | where: "featured", true
        | sort: "date"
        | reverse
      %}

      {% for project in development_featured limit: 3 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <section class="category-section development-recent">

    <div class="category-section-heading">

      <div>
        <p class="category-eyebrow">
          Recent development work
        </p>

        <h2>
          What I have been building lately.
        </h2>
      </div>

    </div>


    <div class="category-projects project-grid">

      {% assign development_projects = site.projects
        | where_exp: "project", "project.project_types contains 'development'"
        | sort: "date"
        | reverse
      %}

      {% for project in development_projects limit: 6 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <section class="development-practice">

    <div class="development-practice-copy">

      <p class="category-eyebrow">
        Development in progress
      </p>

      <h2>
        Build it. Break it. Figure out why.
      </h2>

      <p>
        The projects here are not meant to suggest that I have already mastered everything behind them. Development is one of the places where I am most comfortable being a beginner, because every project gives me another reason to learn something I did not know before.
      </p>

    </div>


    <div class="development-practice-mark" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </section>


  <section class="category-closing development-closing">

    <div class="category-closing-card">

      <div>

        <p class="category-eyebrow">
          Keep exploring
        </p>

        <h2>
          There is always something else to build.
        </h2>

        <p>
          Development is one part of a larger practice of learning, making, and figuring things out.
        </p>

      </div>


      <div class="category-closing-links">

        <a class="button" href="{{ '/art/' | relative_url }}">
          Explore Art
        </a>

        <a class="category-closing-explore" href="{{ '/portfolio/' | relative_url }}">
          Back to Portfolio <span aria-hidden="true">→</span>
        </a>

      </div>

    </div>

  </section>

</div>
