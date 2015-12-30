---
title: Remove CCK Fields from the Node Form
layout: post.html
date: 2009-11-12
author: Grayside
tags: drupal, drupal6, how-to, cck, node-form, ccx
disqus_identifier: node/46
description: Originally created on Drupal
alias:
  - 2009/11/remove-cck-fields-node-form
---

There is a fine tutorial on drupal.org describing [How to set the disabled attribute of a CCK field](http://drupal.org/node/357328) on your node add/edit form. All that does is deactivate the input widget without removing the clutter. Let's get rid of the form elements entirely.
<!--break-->
To actually remove the field from the input form, change the `_mysnippet_fix_disabled()` function to the following:

```php
function _mysnippet_set_denied(&$elements) {
  foreach (element_children($elements) as $key) {
    if (isset($elements[$key]) && $elements[$key]) {
      // Recurse through all children elements.
      _mysnippet_set_denied($elements[$key]);
    }
  }
  $elements['#access'] = FALSE;
}
```
