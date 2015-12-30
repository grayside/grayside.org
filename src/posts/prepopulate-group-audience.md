---
title: Prepopulate Group Audience
layout: post.html
date: 2010-04-01
author: Grayside
tags: drupal, drupal6, prepopulate, og
disqus_identifier: node/61
description: Originally created on Drupal
alias:
  - 2010/04/prepopulate-group-audience
---
This trick does not use the very fine [Prepopulate](http://drupal.org/project/prepopulate) module at all.

By appending `?gids[]=<group nid>` to your node/add URL, you can specify the group audience. By throwing in a comma-delimited list of nids, you can specify multiple audiences. It's just that simple.
