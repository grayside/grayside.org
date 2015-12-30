---
title: 'Reset Drupal Password, the SQL Way'
layout: post.html
date: 2010-05-21
author: Grayside
tags: drupal, drupal6, mysql, password
disqus_identifier: node/73
description: Originally created on Drupal
alias:
  - 2010/05/reset-drupal-password-sql-way
---

```sql
UPDATE users SET pass=md5('NEWPASS') WHERE uid = 1;
```
<!--break-->
I constantly find myself needing to google up a page like [this](http://kb.siteground.com/article/How_to_reset_my_Drupal_admin_password.html) to figure out how to reset a password without troubling the website.

Here's my own little note.
