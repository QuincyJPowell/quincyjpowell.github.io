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
  {{ project.date | date: "%m-%d" }}
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


  <section class="portfolio-archive" id="all-projects">

  <div class="portfolio-section-heading">
    <p class="portfolio-eyebrow">The full archive</p>
    <h2>All Projects</h2>
  </div>

  <div class="portfolio-project-controls">

    <label class="portfolio-project-search">
      <span class="portfolio-sr-only">Search projects</span>
      <input
        type="search"
        id="portfolio-project-search"
        placeholder="Search projects..."
        autocomplete="off"
      >
    </label>

    <div class="portfolio-project-filters" aria-label="Filter projects">
      <button
        type="button"
        class="portfolio-filter is-active"
        data-filter="all"
        aria-pressed="true"
      >
        All
      </button>

      <button
        type="button"
        class="portfolio-filter"
        data-filter="academic"
        aria-pressed="false"
      >
        Academic
      </button>

      <button
        type="button"
        class="portfolio-filter"
        data-filter="professional"
        aria-pressed="false"
      >
        Professional
      </button>

      <button
        type="button"
        class="portfolio-filter"
        data-filter="writing"
        aria-pressed="false"
      >
        Writing
      </button>

      <button
        type="button"
        class="portfolio-filter"
        data-filter="development"
        aria-pressed="false"
      >
        Development
      </button>

      <button
        type="button"
        class="portfolio-filter"
        data-filter="art"
        aria-pressed="false"
      >
        Art
      </button>
    </div>

  </div>

  <div class="portfolio-all-projects" id="portfolio-project-list">

    {% assign sorted_projects = site.projects | sort: "date" | reverse %}

    {% for project in sorted_projects %}

      {% assign project_types_string = project.project_types | join: " " %}
      {% assign topics_string = project.topics | join: " " %}

      <a
        class="portfolio-all-project"
        href="{{ project.url | relative_url }}"
        data-project-types="{{ project_types_string | downcase }}"
        data-project-search="{{ project.title | downcase }} {{ project.description | downcase }} {{ project_types_string | downcase }} {{ topics_string | downcase }}"
      >

        <div class="portfolio-all-project-main">

          <h3 class="portfolio-all-project-title">
            {{ project.title }}
          </h3>

          {% if project.description %}
            <p class="portfolio-all-project-description">
              {{ project.description }}
            </p>
          {% endif %}

          <div class="portfolio-all-project-meta">
            {% for type in project.project_types %}
              <span>{{ type | capitalize }}</span>
            {% endfor %}
          </div>

        </div>

        <span class="portfolio-all-project-arrow" aria-hidden="true">
          ↝
        </span>

      </a>

    {% endfor %}

  </div>

  <p
    class="portfolio-no-results"
    id="portfolio-no-results"
    hidden
  >
    No projects match your search.
  </p>

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

<script>
(() => {
  const searchInput = document.querySelector("#portfolio-project-search");
  const filterButtons = document.querySelectorAll(".portfolio-filter");
  const projects = document.querySelectorAll(".portfolio-all-project");
  const noResults = document.querySelector("#portfolio-no-results");

  if (!searchInput || !projects.length) return;

  let activeFilter = "all";

  const updateProjects = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    projects.forEach((project) => {
      const projectTypes = project.dataset.projectTypes || "";
      const searchableText = project.dataset.projectSearch || "";

      const matchesFilter =
        activeFilter === "all" ||
        projectTypes.split(/\s+/).includes(activeFilter);

      const matchesSearch =
        searchTerm === "" ||
        searchableText.includes(searchTerm);

      const isVisible = matchesFilter && matchesSearch;

      project.classList.toggle("is-hidden", !isVisible);

      if (isVisible) {
        visibleCount += 1;
      }
    });

    noResults.hidden = visibleCount !== 0;
  };

  searchInput.addEventListener("input", updateProjects);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isActive =
          filterButton === button;

        filterButton.classList.toggle(
          "is-active",
          isActive
        );

        filterButton.setAttribute(
          "aria-pressed",
          String(isActive)
        );
      });

      updateProjects();
    });
  });
})();
</script>
