<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

<div align="center">
  <h2 align="center">🎨 Mod3D</h2>
  <p align="center">
    A simple 3D editor, that allows you to wrap a 3D model into a texture. As a
    texture there could be used
    <a href="https://en.wikipedia.org/wiki/UV_mapping" aria-label="UV mapping">
    UV mappings</a>, images or figures.
  </p>

  <p id="shields" align="center" markdown="1">

[![License](https://img.shields.io/badge/license-MIT-3178C6?style=flat)](LICENSE)
[![Commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen)][github-commitizen]
[![Husky](https://img.shields.io/badge/husky-enabled-brightgreen?style=flat)][github-husky]
[![Style Guide](https://img.shields.io/badge/code%20style-standard-F7DF1E?style=flat)][github-standard]
[![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat)][github-eslint]
[![stylelint](https://img.shields.io/badge/linter-stylelint-263238?style=flat)][github-stylelint]
[![markdownlint](https://img.shields.io/badge/linter-markdownlint-000?style=flat)][github-markdownlint]
[![commitlint](https://img.shields.io/badge/linter-commitlint-F7B93E?style=flat)][github-commitlint]
![CI Workflow](https://github.com/malokhvii-eduard/mod3d/actions/workflows/main.yml/badge.svg)
![Netlify Status](https://api.netlify.com/api/v1/badges/8c5c3207-5cc8-4b2f-9ae1-425e24003fb2/deploy-status)

  </p>

  <div id="demo" align="center" markdown="1">

![Demo](docs/img/demo.gif)

  </div>
</div>

---

## :tada: Features

- *[Single Page Application (SPA)][mdn-spa]* &mdash; is presented to the user
through a single HTML page to be more responsive and to more closely replicate
a desktop application or a native app
- Mobile-friendly
- Installable *[Progressive Web App (PWA)][mdn-pwa]*
- Dark & Light theme
- Different kinds of texture: image, figure, UV mapping with borders (default)
- Rotating a model in editor. The rotating is implemented via
*[mouse][mdn-mouse-events]* (right-click) or *[touch][mdn-touch-events]* (2
touches at the same time in any place of the scene)
- Exporting a model with a texture in *[glTF (GL Transmission Format)][github-gltf]*
- Restores selected theme after page reload or app close from
*[IndexedDB][mdn-indexeddb]*
- *[Open Graph Protocol][open-graph-protocol], [Twitter Cards][twitter-cards]*
- Uses: a cross-browser *[WebGL][mdn-webgl]* based
*[3D library][github-three]*, a full-featured
*[image editor][github-tui-image-editor]*, a super-simple promise-based
*[key-value store][github-idb-keyval]* implemented with
*[IndexedDB][mdn-indexeddb]*, *[LQIP][github-lqip]* placeholders, a
*[tool][github-purgecss]* to remove unused CSS

## :hammer_and_wrench: Tech Stack

<!-- markdownlint-disable MD013 -->
[![EditorConfig](https://img.shields.io/badge/EditorConfig-FEFEFE?logo=editorconfig&logoColor=000&style=flat)][editorconfig]
![Markdown](https://img.shields.io/badge/Markdown-000?logo=markdown&logoColor=fff&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)
[![Babel](https://img.shields.io/badge/Babel-F9DC3E?logo=babel&logoColor=000&style=flat)][github-babel]
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)
![Sass](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat)
![SVG](https://img.shields.io/badge/SVG-FFB13B?logo=svg&logoColor=fff&style=flat)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat)][github-vue]
[![Vuex](https://img.shields.io/badge/Vuex-4FC08D?logo=vuedotjs&logoColor=fff&style=flat)][github-vuex]
[![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?logo=vuetify&logoColor=fff&style=flat)][github-vuetify]
[![WebGL](https://img.shields.io/badge/WebGL-900?logo=webgl&logoColor=fff&style=flat)][mdn-webgl]
[![Three.js](https://img.shields.io/badge/Three.js-000?logo=threedotjs&logoColor=fff&style=flat)][github-three]
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=flat)][github-yarn]
[![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=000&style=flat)][github-webpack]
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat)][github-prettier]
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat)][github-eslint]
[![stylelint](https://img.shields.io/badge/stylelint-263238?logo=stylelint&logoColor=fff&style=flat)][github-stylelint]
[![commitlint](https://img.shields.io/badge/commitlint-F7B93E?logo=c&logoColor=000&style=flat)][github-commitlint]
[![markdownlint](https://img.shields.io/badge/markdownlint-000?logo=markdown&logoColor=fff&style=flat)][github-markdownlint]
[![SonarJS](https://img.shields.io/badge/SonarJS-CB3032?logo=sonarsource&logoColor=fff&style=flat)][github-sonarjs]
[![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=fff&style=flat)][github-postcss]
[![PurgeCSS](https://img.shields.io/badge/PurgeCSS-14161A?logo=purgecss&logoColor=fff&style=flat)][github-purgecss]
[![Material Design](https://img.shields.io/badge/Material%20Design-757575?logo=materialdesign&logoColor=fff&style=flat)][material-design]
[![Material Design Icons](https://img.shields.io/badge/Material%20Design%20Icons-2196F3?logo=materialdesignicons&logoColor=fff&style=flat)][material-design-icons]
[![Simple Icons](https://img.shields.io/badge/Simple%20Icons-111?logo=simpleicons&logoColor=fff&style=flat)][github-simple-icons]
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?logo=pwa&logoColor=fff&style=flat)][mdn-pwa]
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=fff&style=flat)][netlify]
[![Thingiverse](https://img.shields.io/badge/Thingiverse-248BFB?logo=thingiverse&logoColor=fff&style=flat)][thingiverse]
[![Shields.io](https://img.shields.io/badge/Shields.io-000?logo=shieldsdotio&logoColor=fff&style=flat)][shields]
[![Blender](https://img.shields.io/badge/Blender-F5792A?logo=blender&logoColor=fff&style=flat)][blender]
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)][git-scm]
[![husky](https://img.shields.io/badge/husky-8D6748?logo=git&logoColor=fff&style=flat)][github-husky]
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat)][github]
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff&style=flat)][github-actions]
<!-- markdownlint-enable MD013 -->

## :pray: Contributing

:+1::tada: *First off, thanks for taking the time to contribute!* :tada::+1:

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

1. Fork the *Project*
2. Init *[Submodules][git-scm-submodules]* (`git submodule update --init
--recursive`)
3. Create your *Feature Branch* (`git checkout -b feature/awesome-feature`)
4. Commit your *Changes* (`git commit -m 'Add awesome feature'`)
5. Push to the *Branch* (`git push origin feature/awesome-feature`)
6. Open a *Pull Request*

## :warning: License

`Mod3D` is licenced under the MIT License. See the [LICENSE](LICENSE) for more information.

<!-- markdownlint-disable MD013 -->
<!-- MDN Web Docs links -->
[mdn-indexeddb]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[mdn-mouse-events]: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
[mdn-pwa]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
[mdn-spa]: https://developer.mozilla.org/en-US/docs/Glossary/SPA
[mdn-touch-events]: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
[mdn-webgl]: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API

<!-- Github links -->
[github-actions]: https://docs.github.com/en/actions
[github-babel]: https://github.com/babel/babel
[github-commitizen]: https://github.com/commitizen/cz-cli
[github-commitlint]: https://github.com/conventional-changelog/commitlint
[github-eslint]: https://github.com/eslint/eslint
[github-gltf]: https://github.com/KhronosGroup/glTF
[github-husky]: https://github.com/typicode/husky
[github-idb-keyval]: https://github.com/jakearchibald/idb-keyval
[github-lqip]: https://github.com/zouhir/lqip
[github-markdownlint]: https://github.com/DavidAnson/markdownlint
[github-postcss]: https://github.com/postcss/postcss
[github-prettier]: https://github.com/prettier/prettier
[github-purgecss]: https://github.com/FullHuman/purgecss
[github-simple-icons]: https://github.com/simple-icons/simple-icons
[github-sonarjs]: https://github.com/SonarSource/SonarJS
[github-standard]: https://github.com/standard/standard
[github-stylelint]: https://github.com/stylelint/stylelint
[github-three]: https://github.com/mrdoob/three.js
[github-tui-image-editor]: https://github.com/nhn/tui.image-editor
[github-vue]: https://github.com/vuejs/vue
[github-vuetify]: https://github.com/vuetifyjs/vuetify
[github-vuex]: https://github.com/vuejs/vuex
[github-webpack]: https://github.com/webpack/webpack
[github-yarn]: https://github.com/yarnpkg/yarn
[github]: https://github.com

<!-- Other links -->
[blender]: https://www.blender.org
[editorconfig]: https://editorconfig.org
[git-scm-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[git-scm]: https://git-scm.com
[material-design-icons]: https://materialdesignicons.com
[material-design]: https://material.io/design
[netlify]: https://www.netlify.com
[open-graph-protocol]: https://ogp.me
[shields]: https://shields.io
[thingiverse]: https://www.thingiverse.com
[twitter-cards]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
