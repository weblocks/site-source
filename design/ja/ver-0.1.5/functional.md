---
layout: default
title: 基本設計 Ver.0.1.5
description: weblocksの基本設計 Ver.0.1.5
keywords: weblocksの基本設計, 設計
permalink: /design/ver-0.1.5/functional
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.5/functional'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.5"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>基本設計 (ver 0.1.5)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作る物</h2>
      <p>
        要件分析から作る物は次の通りだよ。
        <ul>
          <li>データベース接続ユーザのパスワード変更：system/password.php</li>
        </ul>
      </p>
      <p>
        今回の変更で導入スクリプト関係も修正した方がいいね。
        今後の事も考えてディレクトリはsetup/からsystem/に変更して、system/Application.php
        は共通で使える様にね。
        それに伴ってsystem/setup.phpに主処理を移すよ。
      </p>
      <p>
        なので変更点は次の通りだよ。
        <ul>
          <li>ディレクトリ名変更：setup/ -> system/</li>
          <li>Application.phpの共通化</li>
          <li>setup.phpに主処理を移動</li>
        </ul>
      </p>
    </div>
  </div>
</div>
