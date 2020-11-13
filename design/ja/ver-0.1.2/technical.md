---
layout: default
title: 詳細設計 Ver.0.1.2
description: weblocksの詳細設計 Ver.0.1.2
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1.2/technical
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.2/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.2"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1.2)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作り方</h2>
      <p>
        <ul>
          <li>導入スクリプトの追加：setup/setup.php, Application.php</li>
          <li>データベース定義の追加：setup/schema.php</li>
          <li>データベース接続定義：conf/database.ini</li>
        </ul>
      </p>
      <p>
        データベースにはロールとユーザを登録できる様にするね。
        でも、それぞれ用にテーブルを用意せず１つのテーブルで色々なデータを登録できる様にするんだ。
        なのでテーブルはnodesテーブルだけで、ロールとユーザはビューで見れる様にするね。
      </p>
      <p>
        その為に次も作成するね。
        <ul>
          <li>nodesテーブルのモデル：app/nodes/Nodes.php</li>
          <li>usersビューのモデル：app/users/Users.php</li>
          <li>SQL文の違いを吸収する言語変換：app/trans/Translate.php</li>
          <li>MySQLとPostgreSQL用のSQL文：app/trans/languages/mysql.php, postgresql.php</li>
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
    |   `-- database.ini
    |-- public/
    |   |-- .htaccess
    |   `-- index.php
    `-- setup/
        |-- Application.php
        |-- schema.php
        `-- setup.php</code></pre>
      </p>
      <p>
        上のディレクトリ構造にはないけど、languages/en.phpとlanguages/ja.phpも作成しておくね。
        これは将来用だよ。日本語と英語に対応する為だよ。
      </p>
    </div>
  </div>
</div>
