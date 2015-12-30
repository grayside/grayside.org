---
title: Using Nano with Drupal
layout: post.html
date: 2009-11-12
updated: 2014-05-15
author: Grayside
tags: drupal, development, nano
disqus_identifier: node/45
description: Originally created on Drupal
alias:
  - 2009/11/using-nano-drupal
---
Janak Singh had a [great introduction][1] to tailoring Nano for use with Drupal. Here are the details of how I use Nano.

  [1]: http://janaksingh.com/blog/using-nano-syntax-highlight-drupal-module-development-47
<!--break-->
Because Drupal is not my entire PHP universe, I have created a separate syntax file specific to the sorts of files I typically use with Drupal. My `drupal.nanorc` is almost identical to my `php.nanorc`, but it highlights hook statements in comments and adds some extra coloring to drupal core API functions.

I identify Drupal API functions by two alternate criteria:

1. The function starts with `drupal_`
2. I've noticed myself using the function and remembered to add it.

It would be really helpful if a master API existed that excluded all the internal functions I will only ever need as background reference material. (It's necessary to limit the functions in this way to avoid annoying 10 second `.nanorc` parsing times.)

## drupal.nanorc

Here are some highlights from the config file, which can be seen [inside my dotfiles](https://github.com/grayside/dotfiles/blob/master/link/.nano/custom/drupal.nanorc).

```
\# Drupal syntax highlighting
syntax "drupal" "\\.module$" "\\.install$" "\\.inc$" "\\.view$" "\\.tpl.php$"
\# Drupal API functions
color blue "(arg|base_path|cache_get|cache_set|check_file|check_markup|check_plain)\W"
color blue start="drupal_" end="\W"
\# Emphasize hooks in comments
color brightgreen start="hook_" end="\)"
```

## Invoking Nano

For Drupal development, a [simple alias][2] to Nano in my .bashrc file switches it from general purpose to Drupal Coding.

```bash
alias nani='nano -i -E -T 2'
```

This enforces auto-indent, converts tabs to spaces, and resizes tab width to two spaces. This saves me a lot of time counting spaces for [coding standards](http://drupal.org/coding-standards#indenting).

  [2]: http://www.december.com/unix/demo/aliascommand.html
