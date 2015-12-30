---
title: How to Use jQuery to Smoothly Add a Script After Page Load
layout: post.html
date: 2010-11-22
author: Grayside
tags: drupal, drupal6, javascript, jquery
disqus_identifier: node/91
description: Originally created on Drupal
alias:
  - 2010/11/how-use-jquery-smoothly-add-script-after-page-load
---

A colleague of mine slapped this trick together and I wanted to jot it down:

```php
$script_url = "http://www.example.com/script.js";

$my_js = "
$(document).ready(function() {
    jQuery.getScript('" . $script_url . "');
});";

drupal_add_js($my_js, 'inline');
```

It waits until the page has loaded, then it goes and inline includes an external javascript. The site was loading half-way, then spending a couple seconds processing a bunch of externally-sourced javascript. Now it's effectively seamless.
<!--break-->
