---
layout: default
title: 要件分析 Ver.0.1.4
description: weblocksの要件分析 Ver.0.1.4
keywords: weblocksの要件分析, 設計
permalink: /design/ver-0.1.4/requirement
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.4/requirement'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.4"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>要件分析 (ver 0.1.4)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>欲しい物</h2>
      <p>
        ログインとログアウトを追加してみよう。
        ログインのURLでログイン画面が表示され、管理者IDとパスワードを指定する事で
        ”ログイン”と表示されればOKだよ。
        ログアウトのURLで”ログアウト”と表示されればOKだよ。
      </p>
      <h2>なぜ？</h2>
      <p>
        Weblocksではログイン状態か否かの２つの状態があるんだ。
        ログイン状態ではログインユーザのロールによってアクセス出来るページが決まるんだ。
        管理者でログインすると管理画面を、ログイン状態でなければ読者用ページを表示と言う様にね。
      </p>
      <p>
        でも今は管理画面も読者用ページもいらない。
        トップページに、ログインした時はユーザIDを、ログアウトした時は”ログアウト”と表示できればOKだよ。
      </p>
    </div>
  </div>
</div>
