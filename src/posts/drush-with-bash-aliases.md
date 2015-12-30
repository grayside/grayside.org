---
title: Drush with Bash Aliases
layout: post.html
date: 2010-06-09
author: Grayside
tags: drupal, drush, features-servers
disqus_identifier: node/80
description: Originally created on Drupal
alias:
  - 2010/06/drush-bash-aliases
---

I've been looking for some decent ways of managing the use of modules hosted in random Features Servers. Particularly, how do I use Drush as seamlessly with a Features Server as it works with Drupal.Org?

It turns out that Drush has a lot of special options buried in the **pm-download (dl)** command, the very Drush maneuver most helpful for my goal. Naturally, these options can be included in a Bash Alias for Drush.
<!--break-->

```bash
alias dds='drush --source=http://code.developmentseed.org/fserver dl'
```

This alias specifically searches DevSeed's features server for projects. Slide it into your [*.bashrc* file](http://www.linux.org/lessons/beginner/l6/lesson6a.html). Now a quick `$> dds fserver` works like a charm.

I still think [project repositories](http://grayside.org/2010/05/drush-and-features-servers) like Ubuntu's package repos (or really, Arch repositories like Core, Extra, and Aur) have a lesson for us. But that can wait on the smoothing out of functionality like *--destination*, which allows you to say where a project will be saved, but not with the same grace as Drupal.Org projects and the *modules/contrib/* directory.
