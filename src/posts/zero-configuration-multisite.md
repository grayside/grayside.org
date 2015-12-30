---
title: Zero Configuration Multisite
layout: post.html
date: 2009-08-18
updated: 2009-09-03
author: Grayside
tags: drupal, drupal6, multisite, how-to
description: Originally created on Drupal
disqus_identifier: node/1
alias:
  - 2009/08/zero-configuration-multisite
---
This is a straightforward walkthrough to installing Drupal in multi-site "mode" without needing to make any configuration changes to your webserver. This tutorial assumes your webserver will follow symlinks.
<!--break-->

## Download Drupal

Download the latest Drupal release from http://drupal.org. Put it inside a directory named, say `drupal_multisite`. It does not need to be in the webserver's directories.

## Create Your Sites Directories

Even if you are only going to start with one site, follow these steps.

1. Go to <tt>path/to/drupal/sites</tt>
2. Copy <tt>default/default.settings.php</tt> to <tt>default/settings.php</tt>
3. Copy the default directory, name it www.example.com.site1. Repeat for site2, site3, and so on.

## Set Up the Database
This section is only relevant if you have "root" access to the database. If you do not have this kind of access, request your system administrator give you a new database for each site. Your database account will need the following permissions: <perms>

If you are doing this yourself with that root access, login to MySQL and get to work.

## Create the Database User

If necessary, create a database user as follows:

```sql
CREATE USER 'username' IDENTIFIED BY 'password';
```

### Create a Database for Each Site

Each site needs it's own database. I suggest naming them something like multisite_sitename. In this example, I'm going drupal_site#.

```sql
CREATE DATABASE 'drupal_site1';
```

### Grant the Database User Permission

The database user will need permission to do all the drupal-ish things on each database.

```sql
GRANT ALL ON 'drupal_site1'.* TO 'username'@'localhost';
```

## Create Symlinks

Go to the <tt>drupal_multisite</tt> directory you created above to contain your current drupal installation, create a symlink from drupal_current to drupal-X.Y:

```bash
ln -s drupal-6.13 drupal_current
```

This allows you to upgrade Drupal Core and only need to change one symlink.

Next, make the webserver aware of your Drupal sites. Go to the root directory of your webpages. Create a symlink to the <tt>drupal_current</tt> symlink you just created from &lt;site#&gt;.

```bash
ln -s path/to/multisite_drupal/drupal_current site1
ln -s path/to/multisite_drupal/drupal_current site2
```

## Install Drupal
Go to www.example.com/site1/install.php. Follow the steps.
Next, go to www.example.com/site2/install.php

Done.
