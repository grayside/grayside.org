---
title: Integrating Some Other Feature with Spaces
layout: post.html
date: 2010-07-23
author: Grayside
tags: drupal, drupal6, openatrium, openatrium1, spaces, features
disqus_identifier: node/85
description: Originally created on Drupal
alias:
  - 2010/07/integrating-some-other-feature-spaces
---

I have found more than once a situation in which I had a basic feature that could be used on any site which I would like to see integrated with Spaces (for OpenAtrium magic). It usually runs like this:

1. I have the FeatureServer feature.
2. I want it in OpenAtrium.
3. Here's a new Feature that provides some Contexts and some Groups variables.
4. Here's a patch that you must apply to FeatureServer to make Spaces aware of it. (And other stuff).
<!--break-->
\#4 is a pain, but I've recently discovered how to shrink it down a little more: `hook_system_info_alter()`.

```php
/**
 * Implementation of hook_system_info_alter().
 */
function my_atrium_savvy_feature_system_info_alter(&$info, $row) {
  if ($row->name == 'some_other_feature') {
    $info['spaces']['types'][] = 'og';
  }
}
```

This hook is called from `features_get_info()` in features.module. It allows you
to change all the info file settings of a feature. Note: Row is apparently a huge variable to dump to the screen.
