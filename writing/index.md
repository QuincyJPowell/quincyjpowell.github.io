---
layout: archive
title: Writing
permalink: /writing/
description: Essays, stories, poetry, and the things I wanted to put into words.
---

<div class="category-page writing-page">

  <section class="category-hero writing-hero">
    <div class="category-hero-copy">
      <p class="category-eyebrow">
        Essays · Fiction · Poetry
      </p>

      <h1>
        Things worth putting into words.
      </h1>

      <p class="category-lead">
        Writing is where I slow down, follow an idea, build a world, or try to make sense of something that has been sitting in my head for too long.
      </p>
    </div>

    <div class="category-hero-shape" aria-hidden="true"></div>
  </section>


  <section class="category-section writing-intro">

    <div class="category-section-intro">
      <p class="category-eyebrow">
        What writing means to me
      </p>

      <h2>
        A place for thinking, feeling, and telling stories.
      </h2>

      <p>
        Not everything I write has the same purpose. Some pieces are attempts to understand something. Some are stories that have been waiting to exist. Others are simply a way of saying something that did not feel finished until I put it on the page.
      </p>
    </div>

  </section>


  <section class="category-section writing-areas">

    <div class="category-section-intro">
      <p class="category-eyebrow">
        Areas of writing
      </p>

      <h2>
        Different forms, same curiosity.
      </h2>

      <p>
        These areas give my writing a home without forcing everything I make into the same shape.
      </p>
    </div>


    <div class="writing-area-grid">

      <article class="writing-area-card">

        <h3>
          Personal Writing
        </h3>

        <p>
          Essays and reflections about learning, work, identity, ideas, and the experiences that change the way I see things.
        </p>

        <a href="{{ '/writing/personal/' | relative_url }}">
          Explore Personal Writing
          <span aria-hidden="true">→</span>
        </a>

      </article>


      <article class="writing-area-card">

        <h3>
          Fiction
        </h3>

        <p>
          Stories, novels, characters, and worlds built from questions about people, society, survival, and what happens when things stop making sense.
        </p>

        <a href="{{ '/writing/fiction/' | relative_url }}">
          Explore Fiction
          <span aria-hidden="true">→</span>
        </a>

      </article>


      <article class="writing-area-card writing-area-card-wide">

        <div>
          <h3>
            Poetry
          </h3>

          <p>
            A more compressed kind of writing, where language, feeling, image, and rhythm get to do more of the work.
          </p>
        </div>

        <a href="{{ '/writing/poetry/' | relative_url }}">
          Explore Poetry
          <span aria-hidden="true">→</span>
        </a>

      </article>

    </div>

  </section>


  <section class="category-section writing-featured">

    <div class="category-section-intro">

      <p class="category-eyebrow">
        Featured writing
      </p>

      <h2>
        Words worth lingering over.
      </h2>

      <p>
        Selected pieces from the writing I have chosen to bring into the larger archive of my work.
      </p>

    </div>


    <div class="category-projects project-grid">

      {% assign writing_featured = site.projects
        | where_exp: "project", "project.project_types contains 'writing'"
        | where: "featured", true
        | sort: "date"
        | reverse
      %}

      {% for project in writing_featured limit: 3 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <section class="category-section writing-recent">

    <div class="category-section-heading">

      <div>
        <p class="category-eyebrow">
          Recent writing
        </p>

        <h2>
          What I have been putting on the page.
        </h2>
      </div>

    </div>


    <div class="category-projects project-grid">

      {% assign writing_projects = site.projects
        | where_exp: "project", "project.project_types contains 'writing'"
        | sort: "date"
        | reverse
      %}

      {% for project in writing_projects limit: 6 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <section class="writing-practice">

    <div class="writing-practice-copy">

      <p class="category-eyebrow">
        Writing in progress
      </p>

      <h2>
        Some things are meant to stay unfinished for a while.
      </h2>

      <p>
        Writing does not always begin with a finished idea. Sometimes it starts as a sentence, a character, a question, or a feeling I cannot quite name yet. This space can grow alongside those things.
      </p>

    </div>


    <div class="writing-practice-mark" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </section>


  <section class="category-closing writing-closing">

    <div class="category-closing-card">

      <div>

        <p class="category-eyebrow">
          Keep exploring
        </p>

        <h2>
          There is always another story.
        </h2>

        <p>
          Writing is one part of a larger practice of learning, making, and figuring things out.
        </p>

      </div>


      <div class="category-closing-links">

        <a class="button" href="{{ '/development/' | relative_url }}">
          Explore Development Work
        </a>

        <a class="category-closing-explore" href="{{ '/portfolio/' | relative_url }}">
          Back to Portfolio <span aria-hidden="true">→</span>
        </a>

      </div>

    </div>

  </section>

</div>
