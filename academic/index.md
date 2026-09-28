---
layout: archive
title: Academic
permalink: /academic/
description: Questions, methods, and ideas I am continuing to investigate.
---

<div class="category-page academic-page">

  <!-- =====================================================
       HERO
  ====================================================== -->

  <section class="category-hero academic-hero">

    <div class="category-hero-copy">

      <p class="category-eyebrow">
        Research · Analysis · Learning
      </p>

      <h1>
        Questions worth investigating.
      </h1>

      <p class="category-lead">
        My academic work sits at the intersection of research, people, technology, and communication. I am building the methods and knowledge I hope to carry into doctoral study while continuing to pursue questions that interest me along the way.
      </p>

    </div>

    <div class="category-hero-shape" aria-hidden="true"></div>

  </section>


  <!-- =====================================================
       AREAS OF EXPLORATION
  ====================================================== -->

  <section class="category-section academic-areas">

    <div class="category-section-intro">

      <p class="category-eyebrow">
        Areas of exploration
      </p>

      <h2>
        What I am learning to investigate.
      </h2>

      <p>
        These areas overlap, inform one another, and continue to evolve as I learn. Together, they form the foundation of my academic practice.
      </p>

    </div>


    <div class="academic-area-grid">

      <article class="academic-area-card">

        <h3>Research Methods &amp; Analysis</h3>

        <p>
          Learning how to ask better questions, design sound studies, work with data, and understand what evidence can actually tell us.
        </p>

        <div class="academic-area-topics">
          <span>Research methods</span>
          <span>Research ethics</span>
          <span>Statistics</span>
          <span>R programming</span>
          <span>Survey design</span>
          <span>Data analysis</span>
        </div>

      </article>


      <article class="academic-area-card">

        <h3>Consumer &amp; Marketing Research</h3>

        <p>
          Exploring how people make decisions, respond to information, and form relationships with products, organizations, and ideas.
        </p>

        <div class="academic-area-topics">
          <span>Consumer psychology</span>
          <span>Consumer behavior</span>
          <span>Consumer segmentation</span>
          <span>Marketing research</span>
          <span>Audience research</span>
          <span>Decision-making</span>
        </div>

      </article>


      <article class="academic-area-card">

        <h3>AI &amp; Digital Research</h3>

        <p>
          Studying the systems changing how people create, find, process, and interact with information.
        </p>

        <div class="academic-area-topics">
          <span>AI foundations</span>
          <span>AI functionality</span>
          <span>Generative AI</span>
          <span>Information retrieval</span>
          <span>AI visibility</span>
          <span>Digital communication</span>
        </div>

      </article>


      <article class="academic-area-card">

        <h3>Humanities &amp; Social Inquiry</h3>

        <p>
          Following questions about people, culture, history, and the ways societies understand themselves.
        </p>

        <div class="academic-area-topics">
          <span>History</span>
          <span>Culture</span>
          <span>Society</span>
          <span>Communication</span>
          <span>Human behavior</span>
        </div>

      </article>


      <article class="academic-area-card academic-area-card-wide">

        <h3>Language Learning &amp; Development</h3>

        <p>
          Treating language learning as an ongoing practice in communication, culture, and self-directed study.
        </p>

        <div class="academic-languages">

          <div class="academic-language">
            <strong>Spanish</strong>
            <span>Competent · Continuing development</span>
          </div>

          <div class="academic-language">
            <strong>Italian</strong>
            <span>Basic · Continuing development</span>
          </div>

          <div class="academic-language">
            <strong>Korean</strong>
            <span>Beginner · Building foundations</span>
          </div>

        </div>

      </article>

    </div>

  </section>


  <!-- =====================================================
       FEATURED WORK
  ====================================================== -->

  <section class="category-section academic-featured">

    <div class="category-section-intro">

      <p class="category-eyebrow">
        Featured work
      </p>

      <h2>
        Research in practice.
      </h2>

      <p>
        Selected projects, studies, literature reviews, analyses, and other work developed through my academic practice.
      </p>

    </div>


    <div class="category-projects project-grid">

      {% assign academic_projects = site.projects | where_exp: "project", "project.project_types contains 'academic'" | sort: "date" | reverse %}

      {% for project in academic_projects limit: 3 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <!-- =====================================================
       RECENT WORK
  ====================================================== -->

  <section class="category-section academic-recent">

    <div class="category-section-heading">

      <div>
        <p class="category-eyebrow">
          Recent academic work
        </p>

        <h2>
          What I have been working on.
        </h2>
      </div>

    </div>


    <div class="category-projects project-grid">

      {% assign academic_projects = site.projects | where_exp: "project", "project.project_types contains 'academic'" | sort: "date" | reverse %}

      {% for project in academic_projects limit: 6 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <!-- =====================================================
       RESEARCH NOTEBOOK
  ====================================================== -->

  <section class="academic-notebook">

    <div class="academic-notebook-copy">

      <p class="category-eyebrow">
        Research notebook
      </p>

      <h2>
        Learning in progress.
      </h2>

      <p>
        Not every question starts as a finished project. My research notebook is where I collect readings, questions, methods, ideas, and independent studies as they develop.
      </p>

      <p>
        The notebook will remain a working space, while this site will become the curated record of the work that grows from it.
      </p>

    </div>

    <div class="academic-notebook-mark" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </section>


  <!-- =====================================================
       CLOSING
  ====================================================== -->

  <section class="category-closing academic-closing">

    <div class="category-closing-card">

      <div>

        <p class="category-eyebrow">
          Keep exploring
        </p>

        <h2>
          There is always another question.
        </h2>

        <p>
          Academic work is part of a larger practice of learning, making, and figuring things out.
        </p>

      </div>

      <div class="category-closing-links">

        <a class="button" href="{{ '/professional/' | relative_url }}">
          Explore Professional Work
        </a>

        <a class="category-closing-explore" href="{{ '/portfolio/' | relative_url }}">
          Back to Portfolio
          <span aria-hidden="true">→</span>
        </a>

      </div>

    </div>

  </section>

</div>
