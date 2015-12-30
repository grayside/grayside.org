---
title: CCK Fields and the Open Atrium Node Form
layout: post.html
date: 2009-11-10
author: Grayside
tags: drupal, drupal6, cck, node-form, ccx, openatrium, openatrium1
excerpt: Improve the OpenAtrium node form using the Field Group module.
disqus_identifier: node/44
description: Originally created on Drupal
alias:
  - 2009/11/cck-fields-and-open-atrium-node-form
---
[OpenAtrium](http://openatrium.com) has some pretty slick styling of it's node add/edit form. Unfortunately, when you add a [CCK](http://drupal.org/project/cck) field to it, you get something comparatively under-styled and in the main column of the form.

If you want to get that slick styling and move the CCK fields to the right, try the following:

  1. Go to `admin/build/modules` and enable the *Fieldgroup* module under CCK.
  2. Go to the `Manage Fields` page for your content type. Create a new group, the machine name starting as `group_sidebar`.
  3. Move your CCK fields under that group.

Voilà! Make it collapsible as you like.
