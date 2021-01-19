---
layout: default
title: 詳細設計 Ver.0.1.5
description: weblocksの詳細設計 Ver.0.1.5
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1.5/technical
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.5/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.5"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1.5)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作り方</h2>
      <p>
        <ul>
          <li>データベース接続ユーザのパスワード変更：system/password.php</li>
        </ul>
      </p>
      <p>
        <pre><code class="language-treeview">htdocs/
`-- weblocks/
    |-- .htaccess
    |-- app/
    |   |-- Application.php
    |   |-- index/
    |   |   |-- IndexController.php
    |   |   `-- index.volt
    |   |-- login/
    |   |   |-- LoginController.php
    |   |   `-- index.volt
    |   |-- logout/
    |   |   `-- LogoutController.php
    |   |-- nodes/
    |   |   `-- Nodes.php
    |   |-- trans/
    |   |   |-- Translate.php
    |   |   `-- languages/
    |   |       |-- mysql.php
    |   |       `-- postgresql.php
    |   `-- users/
    |       |-- Users.php
    |-- cache/
    |-- conf/
    |   |-- database.ini
    |-- public/
    |   |-- .htaccess
    |   `-- index.php
    `-- system/
        |-- Application.php
        |-- password.php
        |-- schema.php
        `-- setup.php</code></pre>
      </p>
    </div>
  </div>
</div>
