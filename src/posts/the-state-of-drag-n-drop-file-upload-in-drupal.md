---
title: 'The State of Drag-n-Drop File Upload in Drupal'
layout: post.html
date: 2009-11-16
author: Grayside
tags: drupal, drupal6, file-upload, swish, modules
disqus_identifier: node/48
description: Originally created on Drupal
alias:
  - 2009/11/state-drag-n-drop-file-upload-drupal
---
This post briefly evaluates the available modules for Drag-n-Drop File Upload & Management in Drupal. Quick summary: It is a sad and sorry thing, with most of the long term solutions in an infant state, and the mature solutions declining or in need of a massive overhaul to stay relevant in Drupal 7.
<!--break-->
## File Relations Server

This is a full-featured system built on top of a stack of modules that range from widespread use to near-development states. It is currently only run on a peak of 18 Drupal sites, half of which I expect are Development environments. This is not a "safe" bet for production use.

<a href="http://drupal.org/project/filerelationsserver">File Relations Server</a> (<a href="http://drupal.org/project/usage/filerelationsserver">Usage</a>)</p>

## Drag n' Drop Uploads

The Drag'n'Drop Uploads module adds the ability to drag an image from your local filesystem, drop it onto a node body textarea and have the file automatically uploaded and referenced in your node. This is minimal functionality as drag-n-drop goes, and it is not very cross-browser compatible.

<a href="http://drupal.org/project/dragndrop_uploads">Drag n' Drop Uploads</a>

## DBFM

Seems to do a *lot* that you would expect, but is only available for Drupal 5. The maintainers intend to skip to Drupal 7, but with that kind of track record, will they be around for Drupal 8?

<a href="http://drupal.org/project/dbfm">DBFM</a>

## Web File Manager

This seems like the best bet, with going on 3,000 Drupal sites running it. Unfortunately, the primary maintainer has announced he is no longer looking after the module, which may mean it won't survive to Drupal 7. It also is not compatible with the method of file handling common in Drupal 6 and core in Drupal 7, which means those 5000 users across Drupal 5 and 6 will have to work out an upgrade path.

<a href="http://drupal.org/project/webfm">Web File Manager</a>
