---
title: Spaces Integrating a CCK Field
layout: post.html
date: 2010-07-26
author: Grayside
tags: drupal, drupal6, cck, openatrium, openatrium1, access control, spaces
disqus_identifier: node/86
description: Originally created on Drupal
alias:
  - 2010/07/spaces-integrating-cck-field
---

I wanted to make a CCK Field available only when a given feature was enabled. It turns out it's really easy.

CCK comes with a `hook_field_access()`` hook (see [content_access()](http://api.lullabot.com/content_access)). Any implementation of this function that returns FALSE for a given field results in that field being denied to the user.

By implementing this function with a [Spaces](http://drupal.org/project/spaces) API call instead of the content_permissions module approach of a new, field-specific permission, all kinds of magic becomes possible.

Read on for demonstration code.
<!--break-->

```php
/**
 * Implementation of hook_field_access().
 *
 * Allow View/Edit access to 'field_my_cck_field' only when 'feature_name' is enabled.
 */
function custom_field_access($op, $field, $account, $node = NULL) {
  // Be sure not to affect other fields.
  if ($field['field_name'] != 'field_my_cck_field') {
    return TRUE;
  }

  switch ($op) {
    case 'edit':
    case 'view':
      // Make access contingent on whether a given feature is enabled in the current space, such as atrium_book.
      return spaces_access_feature('view', 'feature_name');
  }
}
```

**EDIT: [Issue posted](http://drupal.org/node/887272) to the Spaces queue with patch to add this functionality generically for all fields.**
