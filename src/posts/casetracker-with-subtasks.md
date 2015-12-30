---
title: Casetracker with Subtasks
layout: post.html
date: 2009-11-30
updated: 2009-12-10
author: Grayside
tags: drupal, drupal6, casetracker, subtask, customize
disqus_identifier: node/49
description: Originally created on Drupal
alias:
  - 2009/11/casetracker-subtasks
---
The <a href="http://drupal.org/project/casetracker">Case Tracker</a> project provides a fairly straightforward issue tracker. In the future it will provide more functionality, but for now certain types of customizations are left to the end user. This post describes an attached module that provides a simple up/down relationship to Cases using CCK.
<!--break-->
The previous code snippets have been removed because I packaged this up in a formal module. Download link at the bottom.

## Requirements

You need CCK's Content & Node Reference modules enabled. You need to create a Node Reference field named `field_casetracker_parent_case`, and should set the Display to `Excluded`.

## Features

* Themes Case display to include subcases and parent cases.
* Modifies breadcrumbs to include up to three levels of parent cases, followed by an ellipsis.

## Notes

The Project ID is excluded for listings of subtasks to avoid excessive node_loads or adding a third join to the backreferences query.
The Case Tracker views that list your cases do not include the parent or subcases. Visit the Views UI and modify them as needed.

## Todos

It is unlikely I will revisit this, however:

1. Implement `hook_views_default_views_alter()` to modify casetracker views to include case hierarchy information.
2. Create a Nodereference export for this module to install, skipping the required manual creation of a field.
3. Maybe some configuration stuff.
