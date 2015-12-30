---
title: 'Automatic Nodetitles is Usually Overkill'
layout: post.html
date: 2010-06-09
author: Grayside
tags: drupal, drupal6, node title
disqus_identifier: node/79
description: Originally created on Drupal
alias:
  - 2010/06/automatic-nodetitles-usually-overkill
---

I'm not a huge fan of the [Automatic Nodetitles](http://drupal.org/project/auto_nodetitle) module. It's got a lot of user interface overhead, and yet *I've* never given a non-programmer access to that administration page. On top of that, someone gets a headache from it on one of the forum sites I frequent every few weeks.

For those with the programming chops to avoid it, why keep the overhead of an entire project, when a custom module snippet will probably be more than enough?
<!--break-->
Using the *page* content type and the *custom* custom module.

## Default Title

```php
<?php
/**
 * Implementation of hook_form_alter().
 * Set a default page title.
 */
function custom_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'page_node_form') {
    $form['title']['#default_value'] = 'My Title or a Function Here';
  }
}
```

If I were using Spaces, I could snaz that up even further with a `spaces_get_space()`
to pull information about the current space.

## Automatic Nodetitle, No Forms

Okay, that didn't really solve the puzzle of **No Forms, Just Magic**. This section does:

### Step 1: Get Rid of the Title Form

```php
<?php
/**
 * Implementation of hook_form_alter().
 */
function custom_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'page_node_form') {
    unset($form['title']);
  }
}
```

### Step 2: Set the Title

```php
<?php
/**
 * Implementation of hook_nodeapi().
 */
function custom_nodeapi(&$node, $op, $a3, $a4) {
  switch ($op) {
    case 'presave':
      // Every user-entered value is available, such as OG Audience, CCK Field, and Taxonomy.
      if ($node->type == 'page') {  
        $node->title = 'Some Awesome Title ' . date('Y-m-d');
      }
      break;
  }
}
```

Enjoy.
