---
title: 'Field Permissions Plus: Complex Access Schemes'
layout: post.html
date: 2009-09-09
updated: 2009-09-23
author: Grayside
tags: drupal, drupal6, module, cck, fields, permissions, field-permissions-plus
disqus_identifier: node/8
description: Originally created on Drupal
alias:
  - 2009/09/field-permissions-plus-complex-access-schemes
---
<strong>This post refers to Field Permissions Plus 1.x</strong>

This <a href="http://drupal.org">Drupal</a> module provides View Own and Edit Own permissions for CCK fields. As a necessary step, <a href="http://drupal.org/project/field_permissions_plus">Field Permissions Plus</a> supercedes <a href="http://drupal.org/project/cck">CCK's</a> Content Permissions module so the View/Edit [all] permissions it provides play nice. With this module, if you give a role the ability to View a field, or to View Own a field, they will be able to see it.
<!--break-->
What does View Own (or Edit Own) mean? Well, CCK fields are attached to nodes. If you own the node, you own the fields. This permission enables an author to see (or edit) all the field content associated with his own nodes.

In the future, FPP will be expanded as a framework so other modules can provide additional permissions to expand on how a field might become editable or visible.


* <a href="http://drupal.org/project/field_permissions_plus">Field Permissions Plus</a>
* <a href="http://drupal.org/project/cck">Content Construction Kit</a>
