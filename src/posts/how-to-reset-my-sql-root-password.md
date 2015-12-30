---
title: How to Reset MySQL Root Password
layout: post.html
date: 2010-03-02
author: Grayside
tags: mysql, password, ops
disqus_identifier: node/55
description: Originally created on Drupal
alias:
  - 2010/03/how-reset-mysql-root-password
---
Resetting the mysql root password shouldn't have to happen. But every time it does, I go insane. This page is a set of notes detailing methods that have proven to work.
<!--break-->
## Archlinux

[Taken from the archwiki](http://wiki.archlinux.org/index.php/MySQL).
1. Stop mysqld daemon
```bash
/etc/rc.d/mysqld stop
mysqld_safe --skip-grant-tables &
```
2. Connect to mysql server
```bash
mysql -u root mysql
```
3. Change root password:
```sql
UPDATE user SET password=PASSWORD("NEW_PASSWORD") WHERE User='root';
FLUSH PRIVILEGES;
exit
```
4. Then restart daemon:
```bash
/etc/rc.d/mysqld restart
```
5. You're done
