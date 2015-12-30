---
title: 'Field Permissions Plus: 2.x Already?!'
layout: post.html
date: 2009-09-30
author: Grayside
tags: drupal, drupal6, module, cck, permissions, hook, field-permissions-plus
disqus_identifier: node/39
description: Originally created on Drupal
alias:
  - 2009/09/field-permissions-plus-2x-already
---
<a href="http://drupal.org/project/field_permissions_plus">Field Permissions Plus</a> has barely been released, but FPP 6.x-2.x-dev is already making progress.
<!--break-->
Tonight, a new release will be packaged that separates the View/Edit Own functionality from the core of FPP, creating a new sub-module dubbed **Own Field Access**. If you decide to test the development version, be sure to enable this module. If you do not uninstall FPP 1.x, all the permissions will still be there with all the same boxes checked.

The biggest difference in 2.x is the new hook- `hook_field_access_plus()`. This function should be implemented exactly the same as CCK's `hook_field_access`, except anything implemented with the `_plus` version will be deemed an exclusive, instead of inclusive, means of access.

With Field Permissions Plus installed, you can now write two kinds of Field Access modules to create your complex Field Access scheme.
