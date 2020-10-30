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
      <h2>作り方</h2>
      <p>
        ディレクトリ構造は以下の様になるよ。Phalconの標準的な構造だ。
        違いはapp/Application.phpだね。Phalconのチュートリアルではpublic/index.phpで行なっていたアプリケーションの初期化やリクエスト処理をクラス化したんだ。
      </p>
      <p>
        <pre><code class="language-treeview">htdocs/
`-- weblocks/
    |-- .htaccess
    |-- app/
    |   |-- Application.php
    |   `-- index/
    |       |-- IndexController.php
    |       `-- index.phtml
    `-- public/
        |-- .htaccess
        `-- index.php</code></pre>
      </p>
      <p>
        全体の流れは以下の様にするね。
      </p>
      <p>
        <figure class="figure">
          <img src="/assets/images/design/ver-0.1/overall_sequence.png" class="figure-img img-fluid rounded m-0" alt="sequence">
          <figcaption class="figure-caption text-right">図1</figcaption>
        </figure>
      </p>
      <p>
        これで何故app/index/index.phtmlが表示されか疑問だよね。理由を知りたいならPhalconのドキュメントを読んでみて。
        ここではPhalconの標準的な設定ではapp/index/IndexController.phpが呼ばれた後にapp/index/index.phtmlが表示されるとだけ覚えてね。
      </p>
      <p>
        Phalconの標準とは違ってWeblocks特有の設定についてだけ説明するね。
      </p>
      <p>
        コントローラのパスはapp/&lt;コントローラ名&gt;とするね。
        だからコントローラ数だけapp/以下にはフォルダが存在するんだ。
      </p>
      <p>
        ビューのパスはapp/とするね。
        これでコントローラとビューは同じapp/&lt;コントローラ名&gt;内に集める事ができるんだ。
      </p>
    </div>
  </div>
</div>
