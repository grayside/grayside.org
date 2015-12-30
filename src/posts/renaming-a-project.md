---
title: 'Renaming a Project'
layout: post.html
date: 2010-05-22
author: Grayside
tags: drupal, drupal6, project, refactor
disqus_identifier: node/74
description: Originally created on Drupal
alias:
  - 2010/05/renaming-project
---

Often enough you create a project, get halfway through, and don't like the namespace you've scattered throughout every file and function name. There are plenty of ways to use IDE's and other tools to change that name, but I prefer the command line.

If it's a Features project you want to rename, perhaps to make sure you have a [more distinctive namespace](http://drupal.org/project/kit), you can use the drush command [Features Clone](http://drupal.org/project/features_clone). Look for your duplicate (and renamed) feature in sites/default/modules/custom_features.

I'm hoping to find or create a more general solution, not everything you might want to rename is a Feature, after all. If you know of an existing solution please drop off a comment.
<!--break-->
