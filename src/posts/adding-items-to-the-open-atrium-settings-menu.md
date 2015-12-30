---
title: Adding Items to the Open Atrium Settings Menu
layout: post.html
date: 2010-08-24
author: Grayside
tags: drupal, drupal6, openatrium, openatrium1, interface
disqus_identifier: node/84
description: Originally created on Drupal
alias:
  - 2010/08/adding-items-open-atrium-settings-menu
---

Recently I dusted off [OG Vocabularies](http://drupal.org/project/og_vocab) with an eye toward integration with OpenAtrium. To my mild surprise, there was really not much that needed to be done. The menu path (node/%node/og/vocab) isn't great, but that can be tackled later.

All I wanted was to avoid another hidden tab that can only be reached by clicking on **Settings > Customize Features**. I wanted the group vocabularies to be accessible directly in the Settings menu.

It turns out it's really simple. There is a hook.
<!--break-->
<?php
/**
 * Implementation of hook_atrium_admin_links_alter().
 */
function custom_atrium_admin_links_alter(&$links, $space) {
  if ($space->type == 'og') {
    $item = menu_get_item("node/{$space->id}/og/vocab");
    if ($item && $item['access']) {
      $links['og_vocab'] = array(
        'title' => t('Manage Taxonomy'),
        'href' => $item['href'],
      );
    }
  }
}
?>
