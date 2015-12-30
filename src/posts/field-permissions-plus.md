---
title: Field Permissions Plus
layout: post.html
date: 2009-09-23
updated: 2009-09-23
author: Grayside
tags: drupal, drupal6, module, cck, fields, permissions, field-permissions-plus
disqus_identifier: node/40
description: Originally created on Drupal
alias:
  - field-permisions-plus
---
This <a href="http://drupal.org">Drupal</a> <a href="http://drupal.org/project/field_permissions_plus">module</a> provides a more flexible framework from granting and restricting access to the content of CCK fields.
<!--break-->
It provides a simple framework by which you can create multiple modules which cooperate in finding some method of granting access to site users, as opposed to CCK's core permission scheme in which field access modules are effectively looking for ways to deny access.

Field Permissions Plus makes Field security behave more akin to the rest of the Drupal Permissions world.

<h2>Content Permissions Doesn't Play Nice?!</h2>
Well, Content Permissions is fine. But it implements CCK's hook_field_permissions(), and that function is just looking for an excuse to deny access. By replacing it, it becomes possible to create complex permission schemes with a positive perspective- and a sparse grid of checkboxes.

<h2>Different from the Competitors</h2>
<a href="http://drupal.org/project/cck_private_fields">CCK Private Fields</a> and <a href="http://drupal.org/project/cck_field_privacy">CCK Field Privacy</a> both operate based on node-by-node approvals, user relationships, and so on. This module provides static permissions.

<h2>Why the Name?</h2>
This module was partially inspired by <a href="http://drupal.org/node/363950">#323950 Edit own field permission</a>. In that thread, creating a "Content Permissions Plus" was proposed to solve the problem, because it is too niche a case to integrate into CCK directly. To avoid the confusion of a project specifying Content Permissions, and developer confusion with the CCK's API, Field Permissions Plus was named. The "plus" is all about the additive nature of the permissions it provides.

* <a href="http://drupal.org/project/field_permissions_plus">Field Permissions Plus</a>
* <a href="http://drupal.org/project/cck">Content Construction Kit</a>
