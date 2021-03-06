---
layout: default
title: 詳細設計 Ver.0.1.4
description: weblocksの詳細設計 Ver.0.1.4
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1.4/technical
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.4/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.4"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1.4)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作り方</h2>
      <p>
        <ul>
          <li>ログイン処理：app/login/LoginController.php</li>
          <li>ログイン画面：app/login/index.volt</li>
          <li>ログアウト処理：app/logout/LogoutController.php</li>
          <li>baseDir設定：app/Application.php</li>
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
    `-- setup/
        |-- Application.php
        |-- schema.php
        `-- setup.php</code></pre>
      </p>
      <p>
        サービスとしては次を追加するね。
        <ul>
          <li>セッション：session</li>
        </ul>
      </p>
      <p>
        セッションを使う為、php.iniのsession.save_pathは設定しておく事。
        開発環境では/tmpでも良いが他ユーザが読み書き出来るので、
        本番環境では別のディレクトリにするのが良いね。
      </p>
    </div>
  </div>
</div>
