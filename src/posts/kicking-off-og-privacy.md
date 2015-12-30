---
title: Kicking Off OG Privacy
layout: post.html
date: 2010-08-16
author: Grayside
tags: drupal, drupal6, modules, spaces, og, access
disqus_identifier: node/87
description: Originally created on Drupal
alias:
  - 2010/08/kicking-og-privacy
---

I've just published the [Organic Groups Privacy](http://drupal.org/project/og_privacy) module to Drupal.Org. It's an API module intended to help give developers an easy and flexible way to define public access to Organic Groups posts. It exists specifically so I can convince [Spaces](http://drupal.org/project/spaces) that I really mean it when I say an arbitrary 90% of an Organic Group should be private.

It is bundled with a Feature that demonstrates how you might integrate it with an Open Atrium site, but the core of OG Privacy can be useful even without Spaces being in the mix at all.
<!--break-->

With it, you can do such neat things as declare all Blog posts private to group members with a simple hook implementation:

```php
/**
 * Implementation of hook_og_privacy_policy_info().
 */
function custom_og_privacy_policy_info($node) {
  $policies = array();
  $policies['private_blog_type'] = array(
    'access callback' => 'custom_private_blog_policy',
    'reason' => t('Blog posts are only viewable by group members.'),
  );
  return $policies;
}

/**
 * Blog type privacy policy callback.
 */
function og_privacy_blog_type_policy($node) {
  return $node->type != 'blog';
}
```

If you read through the [API documentation](http://drupalcode.org/viewvc/drupal/contributions/modules/og_privacy/og_privacy.api.php?view=markup), you will see that the above policy is *implicitly non-exclusive* meaning any old module could come along with its own policy to make a blog post visible.

For an example of an exclusive policy, which exercises supreme executive veto power to guarantee the privacy of, say, all the content from your Atrium Casetracker feature, it might look like this:

```php
/**
 * Implementation of hook_og_privacy_policy_info().
 */
function custom_og_privacy_policy_info($node) {
  $policies = array();
  $policies['private_atrium_casetracker'] = array(
    'access callback' => 'custom_private_atrium_casetracker_policy',
    'reason' => t('Content types created by the casetracker feature are viewable only by group members.'),
    'exclusive' => TRUE,
  );
  return $policies;
}

/**
 * Atrium Case Tracker privacy policy callback.
 */
function og_privacy_atrium_casetracker_policy($node) {
  $map = features_get_component_map('node');
  if (!empty($map[$node->type])) {
    $feature = reset($map[$node->type]);
    return $feature != 'atrium_casetracker';
  }
  return TRUE;
}
```

By building your own selection of exportables and `hook_form_alter()` implementations around such policy definitions you can control public access very easily.

For a somewhat more detailed explanation of the guts of how this works, [check out the README](http://drupalcode.org/viewvc/drupal/contributions/modules/og_privacy/README.txt?view=markup).
