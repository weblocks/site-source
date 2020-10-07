---
layout: default
title: 詳細設計 Ver.0.1 
description: weblocksの詳細設計 Ver.0.1
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1/technical
lang: 'ja'
canonical_url: 'https://weblocks.github.io/design/ver-0.1/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <p>
        基本設計で決まったレイヤについて決めるけど、その前にフレームワークとしてPhalconを使うのでWeblocks全体のディレクトリ構成を決めるね。
      </p>
        <pre><code class="language-treeview">htdocs/
`-- weblocks/
    |-- .htaccess
    |-- app/
    |   `-- index/
    |       |-- IndexController.php
    |       `-- index.volt
    |-- system/
    |   `-- layouts/
    |       |-- base/
    |       |   `-- default.volt
    |       `-- floor/
    |           `-- default.volt
    `-- public/
        |-- .htaccess
        |-- index.php
        `-- css/
            `-- weblocks.css</code></pre>
      <p>
        フレームワークとしてPhalconを使うから
        <ul>
          <li>土台レイア・・・Main Layout</li>
          <li>間取りレイヤ・・Controller Layout</li>
          <li>部屋レイヤ・・・Action View</li>
        </ul>
        と言う事になるね。
      </p>
      <p>
      </p>
    </div>
  </div>
</div>
