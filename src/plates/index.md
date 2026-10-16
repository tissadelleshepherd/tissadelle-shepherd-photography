---
layout: base.njk
title: "Plates from the record"
description: "Generated illustrations of places in Fian Ilchruinne, not photographs. Unofficial fan work."
---
<h1 class="page-title">Plates from the record</h1>
<p class="page-intro out-of-story">
  <strong>These are not photographs, and not hers.</strong> They are generated illustrations of places in
  <em>Fian Ilchruinne</em>, reproduced unchanged from the novel's own pages at
  <a href="https://fianilchruinne.com">fianilchruinne.com</a>, and kept here beside the archive
  as the worlds its photographer's postings would have reached. Each plate links to its page in
  the record. None shows a person.
</p>

<ul class="gallery-grid plates-grid">
{% for plate in plates %}
  <li class="gallery-grid__item">
    <a href="{{ plate.url }}">
      <img src="/images/plates/{{ plate.image }}" alt="{{ plate.alt }}" loading="lazy" />
      <span class="gallery-grid__caption">{{ plate.title }} · {{ plate.place }}</span>
    </a>
  </li>
{% endfor %}
</ul>

<p class="photo-license">
  Plates: generated illustrations from <em>Fian Ilchruinne</em>, © Dermot R. Cochran, licensed under
  <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a> and shown
  unaltered. Unofficial fan work; not endorsed by the author.
</p>
