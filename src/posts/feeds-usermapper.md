---
title: Feeds Usermapper
layout: post.html
date: 2010-04-12
author: Grayside
tags: drupal, drupal6, feeds, migration
disqus_identifier: node/63
description: Originally created on Drupal
alias:
  - 2010/04/feeds-usermapper
---

If you are using [Feeds](https://www.drupal.org/project/feeds) to migrate site content, one of the stumbling blocks will be preserving content ownership.

This code is taken from a hypothetical *feeds_usermapper* module that provides the option to sync up node ownership on the basis of identical usernames. (Pulled from [User Inheritance Issue on D.O](http://drupal.org/node/652180))
<!--break-->
```php
<?php

/**
 * Implementation of hook_migrate_fields_node().
 */
function feeds_usermapper_feeds_node_processor_targets_alter(&$targets, $content_type) {
  $targets['uid'] = array(
    'name' => t('Node author'),
    'description' => t('The owner of the node.'),
    'callback' => 'feeds_usermapper_feeds_set_target',
  );
}

/**
 * Mapping callback for author.
 */
function feeds_usermapper_feeds_set_target($node, $target, $value) {
  // [insert optional username transformation here]
  $user = user_load(array('name' => $value));
  if (isset($user->uid)) {
    $node->uid = $user->uid;
  }
}
```
