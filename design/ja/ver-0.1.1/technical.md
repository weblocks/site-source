---
layout: default
title: 詳細設計 Ver.0.1.1
description: weblocksの詳細設計 Ver.0.1.1
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1.1/technical
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.1/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.1"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1.1)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作り方</h2>
      <p>
        <ul>
          <li>index.phtmlをindex.voltに変更</li>
          <li>コントローラから受け取った文字列を表示：index.volt</li>
          <li>ビューへ文字列を渡す：IndexController.php</li>
          <li>voltサービスの登録：Application.php</li>
          <li>voltコンパイル済みファイルの為のフォルダを用意</li>
        </ul>
      </p>
      <p>
        <pre><code class="language-treeview">htdocs/
`-- weblocks/
    |-- .htaccess
    |-- app/
    |   |-- Application.php
    |   `-- index/
    |       |-- IndexController.php
    |       `-- index.volt
    |-- cache/
    `-- public/
        |-- .htaccess
        `-- index.php</code></pre>
      </p>
      <p>
        cacheフォルダはApache実行ユーザの書き込み権限が必要だよ。
      </p>
    </div>
  </div>
</div>
