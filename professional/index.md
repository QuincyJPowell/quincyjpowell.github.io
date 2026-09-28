---
layout: archive
title: Professional
permalink: /professional/
description: Marketing, strategy, communication, and digital work shaped by real problems and real audiences.
---

<div class="category-page professional-page">

  <section class="category-hero professional-hero">
    <div class="category-hero-copy">
      <p class="category-eyebrow">
        Marketing · Strategy · Digital
      </p>

      <h1>
        Work that has to work.
      </h1>

      <p class="category-lead">
        My professional work sits where strategy, communication, technology, and audience understanding meet. I am interested in work that solves real problems, reaches real people, and turns ideas into something useful.
      </p>
    </div>

    <div class="category-hero-shape" aria-hidden="true"></div>
  </section>


  <section class="category-section professional-intro">
    <div class="category-section-intro">
      <p class="category-eyebrow">What I do</p>

      <h2>
        Turning questions into practical work.
      </h2>

      <p>
        I approach professional work with both the audience and the larger problem in view. That means asking what people need, understanding what an organization is trying to accomplish, and finding a clear way to connect the two.
      </p>
    </div>
  </section>


  <section class="category-section professional-areas">

    <div class="category-section-intro">
      <p class="category-eyebrow">Areas of practice</p>

      <h2>
        Where strategy meets execution.
      </h2>

      <p>
        These areas overlap across projects and continue to grow as my experience develops. Together, they describe the kinds of problems I like working on.
      </p>
    </div>


    <div class="professional-area-grid">

      <article class="professional-area-card">
        <h3>Marketing &amp; Brand Strategy</h3>

        <p>
          Building thoughtful strategies around what an organization offers, who it serves, and how it wants to be understood.
        </p>

        <div class="professional-area-topics">
          <span>Marketing strategy</span>
          <span>Brand strategy</span>
          <span>Positioning</span>
          <span>Audience definition</span>
          <span>Campaign planning</span>
        </div>
      </article>


      <article class="professional-area-card">
        <h3>Digital Marketing &amp; Content</h3>

        <p>
          Creating digital content and experiences that communicate clearly while supporting broader marketing and organizational goals.
        </p>

        <div class="professional-area-topics">
          <span>Content strategy</span>
          <span>Social media</span>
          <span>Digital campaigns</span>
          <span>Content development</span>
          <span>Digital communication</span>
        </div>
      </article>


      <article class="professional-area-card">
        <h3>Audience &amp; Consumer Insight</h3>

        <p>
          Applying research and observation to understand audiences, identify patterns, and make better-informed decisions.
        </p>

        <div class="professional-area-topics">
          <span>Audience research</span>
          <span>Consumer insight</span>
          <span>Segmentation</span>
          <span>Consumer behavior</span>
          <span>Market research</span>
        </div>
      </article>


      <article class="professional-area-card">
        <h3>Communications &amp; Messaging</h3>

        <p>
          Finding the clearest way to communicate an idea, organization, product, or message to the people who need to understand it.
        </p>

        <div class="professional-area-topics">
          <span>Messaging</span>
          <span>Copywriting</span>
          <span>Strategic communication</span>
          <span>Editorial planning</span>
          <span>Audience communication</span>
        </div>
      </article>


      <article class="professional-area-card professional-area-card-wide">

        <div>
          <h3>Web &amp; Digital Experience</h3>

          <p>
            Designing and developing web experiences that make information easier to find, understand, and use.
          </p>
        </div>


        <div class="professional-experience-list">

          <div class="professional-experience">
            <strong>Web Strategy</strong>
            <span>Structure, content, navigation, and audience needs</span>
          </div>

          <div class="professional-experience">
            <strong>Content Systems</strong>
            <span>Organizing information into clear, usable experiences</span>
          </div>

          <div class="professional-experience">
            <strong>Digital Development</strong>
            <span>Building and maintaining thoughtful web experiences</span>
          </div>

        </div>

      </article>

    </div>

  </section>


  <section class="category-section professional-featured">

    <div class="category-section-intro">
      <p class="category-eyebrow">Featured work</p>

      <h2>
        Strategy in practice.
      </h2>

      <p>
        Selected professional projects showing how I apply research, communication, strategy, and digital skills to real work.
      </p>
    </div>


    <div class="category-projects project-grid">

      {% assign professional_projects = site.projects | where_exp: "project", "project.project_types contains 'professional'" | sort: "date" | reverse %}

      {% for project in professional_projects limit: 3 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <section class="category-section professional-recent">

    <div class="category-section-heading">

      <div>
        <p class="category-eyebrow">Recent professional work</p>

        <h2>
          What I have been working on.
        </h2>
      </div>

    </div>


    <div class="category-projects project-grid">

      {% assign professional_projects = site.projects | where_exp: "project", "project.project_types contains 'professional'" | sort: "date" | reverse %}

      {% for project in professional_projects limit: 6 %}
        {% include project-card.html project=project %}
      {% endfor %}

    </div>

  </section>


  <section class="professional-practice">

    <div class="professional-practice-copy">

      <p class="category-eyebrow">
        Professional practice
      </p>

      <h2>
        Research informs the work. The work tests the research.
      </h2>

      <p>
        My academic interests and professional practice are closely connected. I use research and analysis to understand people and problems, then bring those ideas into practical work where they can be tested, refined, and applied.
      </p>

    </div>


    <div class="professional-practice-mark" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </section>


  <section class="category-closing professional-closing">

    <div class="category-closing-card">

      <div>

        <p class="category-eyebrow">
          Keep exploring
        </p>

        <h2>
          Good work starts with a good question.
        </h2>

        <p>
          Professional work is one part of a larger practice of learning, making, and figuring things out.
        </p>

      </div>


      <div class="category-closing-links">

        <a class="button" href="{{ '/academic/' | relative_url }}">
          Explore Academic Work
        </a>

        <a class="category-closing-explore" href="{{ '/portfolio/' | relative_url }}">
          Back to Portfolio <span aria-hidden="true">→</span>
        </a>

      </div>

    </div>

  </section>

</div>
