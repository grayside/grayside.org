---
title: 'Modifying Contexts the Old-Fashioned Way'
layout: post.html
date: 2010-06-21
author: Grayside
tags: drupal, drupal6, context, don't-hack-core
disqus_identifier: node/83
description: Originally created on Drupal
alias:
  - 2010/06/modifying-contexts-old-fashioned-way
---

There are two ways to change [contexts](http://drupal.org/project/context). The new awesomeness is to use [Features](http://drupal.org/project/features) or other exportable techniques to create a new version of your modified contexts, and push the old ones out of the way.

However, when I avoid hacking [atrium] core, I prefer the old way--today that's alter hooks.
<!--break-->
Alter hooks in Context allow you to do zany things like modifying the **conditions** or **reactions** associated with a given context. Naturally, if the original context slides out from under your original assumptions you'll have to make some changes. In the meantime, just remember that using such powerful things as `hook_context_load_alter()` you can completely break a context if you are not careful.

Below are some examples of context manipulations I've learned through a bit of code trawling and error trials.

For the sake of (some) future compatibility I am using the Context API as of 3.0-beta4.

> *EDIT: The method previously illustrated here for altering context conditions via hook_context_load_alter() was flat-out wrong, and will not work. Unless you were to use it to preload the context_ui just to go to the context ui edit page and click save. Then it would do something.*

## Adding a Content Type Condition

In my approach to integrating Feature Servers into OpenAtrium, I decided to pull the Project content type created by the Feature Server module into the casetracker project context. This required a new condition.

```php
/**
 * Implementation of hook_context_default_contexts_alter().
 */
function custom_context_default_contexts_alter(&$contexts) {
  $contexts['spaces-feature-casetracker']->conditions['node']['values']['fserver_project'] = 'fserver_project';
}
```

## Adding a Path Condition

In working out OA Book Manager, I wanted to add my new admin pages to the book context so the sidebar book navigation would stick around. Do you see where this code is broken?

```php
/**
 * Implementation of hook_context_default_contexts_alter().
 */
function custom_context_default_contexts_alter(&$contexts) {
  $contexts['spaces-feature-book']->conditions['path'] = array(
    'values' => array(
      'notebook/manage/\*' => 'notebook/manage/*',
    ),
  );
}
?>

When manipulating contexts, you need to keep a close lookout for when you are adding new array elements and when you are overriding array elements. By setting the path in this way, I am clearing out any existing path-based conditions. Instead, I should assign the new path element at a deeper part of the array.

```php
/**
 * Implementation of hook_context_default_contexts_alter().
 */
function custom_context_default_contexts_alteer(&$contexts) {
  $contexts['spaces-feature-book']->conditions['path']['values']['notebook/manage/\*'] = 'notebook/manage/\*';
  }
}
```

This code does not blast away existing path conditions.

## Adding a Block Reaction

Recently I've been working on creating a dashboard RSS feed for OpenAtrium. I wanted to add a new block to the user profile page to present some links and use instructions.

```php
/**
 * Implementation of hook_context_load_alter().
 */
function custom_context_load_alter(&$context) {
  if ($context->name == 'atrium_profile') {
    $block = array(
      'custom-some_new_block' => array(
        'module' => 'custom',
        'delta' => 'some_new_block',
        'region' => 'right',
        'weight' => 10,
      ),
    );
    $context->reactions['block']['blocks'] = array_merge($context->reactions['block']['blocks'], $block);
  }
}
```

This time I threw in an `array_merge` to avoid clobbering the existing blocks.
