---
title: "강의"
layout: archive
permalink: categories/lecture
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.Lecture %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
