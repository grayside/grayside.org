---
title: Optional Spaces Integration for a View
layout: post.html
date: 2010-06-15
author: Grayside
tags: drupal, drupal6, views, spaces
disqus_identifier: node/82
description: Originally created on Drupal
alias:
  - 2010/06/optional-spaces-integration-view
---

If you want to make an exported [node-based] View smoothly integrate with Spaces, you can use the following code to modify the View structure with the "Content in current space" filter. This filter does nothing if the View is not itself in a Space, otherwise it restricts all results to content in the same space. Add any conditions you want to control whether the Spaces integration is applied.
<!--break-->


```php
/**
 * Implementation of hook_views_default_views_alter().
 */
function custom_views_default_views_alter(&$views) {
  if (module_exists('spaces')) {
    $views['view_name_here']->display['default']->display_options['filters']['current'] = array(
      'operator' => 'all',
      'value' => '',
      'group' => '0',
      'exposed' => FALSE,
      'expose' => array(
        'operator' => FALSE,
        'label' => '',
      ),
      'id' => 'current',
      'table' => 'spaces',
      'field' => 'current',
      'relationship' => 'none',
    );
  }
}
```

If you would like to take it a step further, and create OpenAtrium features integration, insert the following:

```php
$views['view_name_here']->display['default']->display_options['access'] = array(
  'type' => 'atrium_feature',
  'spaces_feature' => 'feature_name',
  'perm' => 'access content', // or any other permission
);
```

`hook_views_default_views_alter()` fires off before the View is cached, so be sure to clear your cache after adding this code to see the results.

This code snippet is a finding from my work on [OpenAtrium-FeatureServer integration](http://grayside.org/2010/06/integrating-features-server-openatrium).
