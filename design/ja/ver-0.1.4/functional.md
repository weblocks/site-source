---
layout: default
title: 基本設計 Ver.0.1.4
description: weblocksの基本設計 Ver.0.1.4
keywords: weblocksの基本設計, 設計
permalink: /design/ver-0.1.4/functional
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.4/functional'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.4"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>基本設計 (ver 0.1.4)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>作る物</h2>
      <p>
        要件分析から作る物は次の通りだよ。
        <ul>
          <li>ログイン画面：LoginController.php, index.volt</li>
          <li>ログアウト処理：LogoutController.php</li>
        </ul>
      </p>
      <p>
        ログイン処理はデータベースに登録されているユーザIDとパスワードにて行うよ。
      </p>
      <p>
        ログイン処理後にトップページへ移動する為にWeblocksのルートディレクトリを指定する必要があるんだ。
        導入スクリプトの最後でconf/system.iniを作成してbaseDirで指定するね。
      </p>
    </div>
  </div>
</div>
