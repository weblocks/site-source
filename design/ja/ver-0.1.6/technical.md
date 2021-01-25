---
layout: default
title: 詳細設計 Ver.0.1.6
description: weblocksの詳細設計 Ver.0.1.6
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1.6/technical
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.6/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.6"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1.6)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作り方</h2>
      <p>
        <ul>
          <li>初期DBに管理画面登録：system/schema.php</li>
          <li>管理画面の追加：app/admin/AdminController.php, app/admin/index.volt</li>
          <li>ログイン処理の変更：app/login/LoginController.php</li>
          <li>ホーム画面モデルの追加：app/homes/Homes.php</li>
        </ul>
      </p>
      <p>
        <pre><code class="language-treeview">htdocs/
`-- weblocks/
    |-- .htaccess
    |-- app/
    |   |-- Application.php
    |   |-- admin/
    |   |   |-- AdminController.php
    |   |   `-- index.volt
    |   |-- homes/
    |   |   `-- Homes.php
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
