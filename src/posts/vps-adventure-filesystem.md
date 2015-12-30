---
title: 'VPS Adventure: Filesystem'
layout: post.html
date: 2009-07-15
updated: 2009-09-23
author: Grayside
tags: Archlinux, VPS, filesystem, vmware
disqus_identifier: node/5
description: Originally created on Drupal
alias:
  - 2009/07/vps-adventure-filesystem
---
A quick word about filesystem partitioning.

I'm not particularly experienced with the refined debates about filesystem merits and partitioning schemes, so I approached this with trepidation when building my first webserver from scratch, and within the even less common context of a VPS in a VM Ware container.

Most of the tips I bumped into was to Keep It Simple. A lot of VM guidance suggested ignoring <tt>/swap</tt>, and not separating <tt>/root</tt> from <tt>/home</tt>. Between a straightforward VM instance and KISS, I decided to stick to a more traditional partition scheme, despite my ambitions to find out firsthand why ReiserFS is considered a superior filesystem for <tt>/var</tt>.

The word is to use ext4. Alright. And it is applied quite nicely by <a href="http://archlinux.org">Archlinux</a>'s <a href="http://wiki.archlinux.org/index.php/Official_Arch_Linux_Install_Guide#Auto-Prepare">Auto-prep</a> wizard.

With the greater accessibility of VPS technologies, I wish the filesystem gurus would write some of their Internet aids for a greater level of ignorance. There are a lot of people out their now with some basic use cases to tune for, if only clear tips were readily available. This is the case with most any technical documentation, but the flavor of the week is always the most frustrating.
