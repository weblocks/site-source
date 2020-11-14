---
layout: default
title: 詳細設計 Ver.0.1.3
description: weblocksの詳細設計 Ver.0.1.3
keywords: weblocksの詳細設計, 設計
permalink: /design/ver-0.1.3/technical
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.3/technical'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.3"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>詳細設計 (ver 0.1.3)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作り方</h2>
      <p>
        <ul>
          <li>ユーザ一覧の取得を追加：app/index/IndexController.php</li>
          <li>ユーザ一覧の表示を追加：app/index/index.volt</li>
          <li>サービスの追加：app/Application.php</li>
        </ul>
      </p>
      <p>
        ディレクト構造に変わりはないよ。
      </p>
      <p>
        サービスとしては次を追加するね。
        <ul>
          <li>データベース：db</li>
          <li>言語変換：trans</li>
        </ul>
      </p>
    </div>
  </div>
</div>
