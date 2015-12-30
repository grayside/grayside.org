---
title: 'OpenAtrium Empty Views: Gimme That Button!'
layout: post.html
date: 2010-03-06
author: Grayside
tags: drupal, drupal6 openatrium, openatrium1, views, theming, snippets
disqus_identifier: node/55
description: Originally created on Drupal
alias:
  - 2010/03/openatrium-empty-views-gimme-button
---
Do you like the large gray "Add Blog entry" button when you first visit your blog space, and have yet to create anything? Creating views with similar buttons (or adding more) is really easy!

The key is to create **Empty text** in your view using the *Full HTML* Input Format. Then, drop some HTML in like this to make use of Atrium's built-in theming.

```html
<div class="buttons">
  <ul class="links">
    <li class="first last">
      <a href="/node/add/blog">Add Blog entry</a>
    </li>
  </ul>
</div>
```
