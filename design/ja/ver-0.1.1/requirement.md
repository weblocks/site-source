---
layout: default
title: 要件分析 Ver.0.1.1
description: weblocksの要件分析 Ver.0.1.1
keywords: weblocksの要件分析, 設計
permalink: /design/ver-0.1.1/requirement
lang: 'ja'
canonical_url: 'https://docs.weblocks.net/design/ver-0.1.1/requirement'
sideMenu: true
sideMenuName: 設計
category: "バージョン 0.1.1"
---
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>要件分析 (ver 0.1.1)</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>欲しい物</h2>
      <p>
        ビューファイルをHTML形式でなく、Voltで記述できる様に変更。
        コントローラから「Hello Weblocks」と言う文言をビューファイルに渡して表示できればOKだよ。
      </p>
      <h2>なぜ？</h2>
      <p>
        Weblocksは静的でなく動的なサイトだ。だからコントローラからビューへ表示内容を渡す仕組みが必要になるんだ。
      </p>
      <p>
        Voltはテンプレート・エンジンでコントローラからビューへデータを渡す事や表示方法の制御ができるんだ。
      </p>
    </div>
  </div>
</div>
