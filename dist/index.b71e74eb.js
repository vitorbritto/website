// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fHjG8":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"h7u1C":[function(require,module,exports,__globalThis) {
var _coreCss = require("./css/core.css");
var _themeCss = require("./css/theme.css");
var _iconCss = require("./css/icon.css");
var _headerCss = require("./css/header.css");
var _footerCss = require("./css/footer.css");
var _menuCss = require("./css/menu.css");
var _socialCss = require("./css/social.css");
var _responsiveCss = require("./css/responsive.css");
var _bodyCss = require("./css/body.css");
var _languageSelectorCss = require("./css/language-selector.css");
var _hamburgerCss = require("./css/hamburger.css");
var _i18N = require("./i18n");
window.setLanguage = (0, _i18N.setLanguage);
const currentLang = (0, _i18N.getCurrentLanguage)();
const t = (0, _i18N.getTranslation)(currentLang);
// Função para atualizar os textos
function updateTexts() {
    // Navegação
    document.querySelectorAll('.menu__item-link').forEach((el)=>{
        const key = el.textContent?.toLowerCase();
        if (key && key in t.nav) el.textContent = t.nav[key];
    });
    // Introdução
    const intro = document.querySelector('p strong');
    if (intro) intro.textContent = t.intro.greeting;
    // Descrição
    const description = intro?.parentElement?.nextElementSibling;
    if (description) description.textContent = t.intro.description;
    // LinkedIn
    const linkedin = description?.nextElementSibling?.querySelector('a');
    if (linkedin) linkedin.textContent = t.intro.linkedin;
    // Títulos das seções
    document.querySelectorAll('.main__title').forEach((el)=>{
        const key = el.textContent?.toLowerCase().replace("\uD83D\uDEE0 ", '').replace("\uD83D\uDE80 ", '');
        if (key && key in t.skills) {
            const emoji = el.querySelector('.prefix')?.textContent || '';
            el.textContent = emoji + ' ' + t.skills.title;
        } else if (key === 'stack') {
            const emoji = el.querySelector('.prefix')?.textContent || '';
            el.textContent = emoji + ' ' + t.stack.title;
        }
    });
    // Skills titles
    document.querySelectorAll('.skill__title strong').forEach((el)=>{
        const key = el.textContent?.toLowerCase();
        if (key === 'front-end' && t.skills.frontend) el.textContent = t.skills.frontend.title;
        else if (key === 'back-end' && t.skills.backend) el.textContent = t.skills.backend.title;
        else if (key === 'databases' && t.skills.databases) el.textContent = t.skills.databases.title;
        else if (key === 'devops' && t.skills.devops) el.textContent = t.skills.devops.title;
    });
    // Skills lists
    document.querySelectorAll('.skill__list').forEach((list, listIndex)=>{
        const items = list.querySelectorAll('li');
        let section;
        switch(listIndex){
            case 0:
                section = 'frontend';
                break;
            case 1:
                section = 'backend';
                break;
            case 2:
                section = 'databases';
                break;
            case 3:
                section = 'devops';
                break;
            default:
                return;
        }
        items.forEach((item, index)=>{
            const icon = item.querySelector('.icon--next');
            if (icon && t.skills[section].items[index]) {
                item.innerHTML = '';
                item.appendChild(icon);
                item.appendChild(document.createTextNode(' ' + t.skills[section].items[index]));
            }
        });
    });
    // Stack link
    const stackLink = document.querySelector('.main__section > p:last-child a');
    if (stackLink) stackLink.textContent = t.stack.description;
    // Botão de agendamento
    const scheduleBtn = document.querySelector('.meet__label');
    if (scheduleBtn) scheduleBtn.textContent = t.buttons.schedule;
    // Footer
    const footer = document.querySelector('.footer__text');
    if (footer) footer.textContent = t.footer.copyright;
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = currentLang;
}
// Lógica do menu hamburguer
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu__list');
    const menuLinks = document.querySelectorAll('.menu__item-link');
    if (hamburger && menuList) {
        hamburger.addEventListener('click', ()=>{
            hamburger.classList.toggle('is-active');
            menuList.classList.toggle('is-active');
        });
        // Fecha o menu ao clicar em um link
        menuLinks.forEach((link)=>{
            link.addEventListener('click', ()=>{
                hamburger.classList.remove('is-active');
                menuList.classList.remove('is-active');
            });
        });
        // Fecha o menu ao clicar fora
        document.addEventListener('click', (event)=>{
            const target = event.target;
            const isMenuClick = target.closest('.menu__list');
            const isHamburgerClick = target.closest('.hamburger');
            if (!isMenuClick && !isHamburgerClick) {
                hamburger.classList.remove('is-active');
                menuList.classList.remove('is-active');
            }
        });
    }
}
// Atualiza os textos quando a página carrega
document.addEventListener('DOMContentLoaded', ()=>{
    updateTexts();
    setupMobileMenu();
});

},{"./i18n":"9CWgD","./css/core.css":"a8mD2","./css/theme.css":"kDCbh","./css/icon.css":"gVh8N","./css/header.css":"fEdOe","./css/footer.css":"a58Ll","./css/menu.css":"jB4LN","./css/social.css":"1HNpQ","./css/responsive.css":"2d8mC","./css/language-selector.css":"kYY5R","./css/body.css":"jDcQp","./css/hamburger.css":"eaUsL"}],"9CWgD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "translations", ()=>translations);
parcelHelpers.export(exports, "getTranslation", ()=>getTranslation);
parcelHelpers.export(exports, "setLanguage", ()=>setLanguage);
parcelHelpers.export(exports, "getCurrentLanguage", ()=>getCurrentLanguage);
var _enJson = require("./en.json");
var _enJsonDefault = parcelHelpers.interopDefault(_enJson);
var _ptJson = require("./pt.json");
var _ptJsonDefault = parcelHelpers.interopDefault(_ptJson);
const translations = {
    en: (0, _enJsonDefault.default),
    pt: (0, _ptJsonDefault.default)
};
function getTranslation(lang) {
    return translations[lang];
}
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

},{"./en.json":"uYc9N","./pt.json":"kSfUR","@parcel/transformer-js/src/esmodule-helpers.js":"3QV8O"}],"uYc9N":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"nav":{"profile":"Profile","skills":"Skills","stack":"Stack","articles":"Articles"},"intro":{"greeting":"Hey, I\'m Vitor Britto!","description":"I have more than 15 years of professional experience. Specialist in mobile and web application development. Passionate about Javascript and it\'s technologies. Build and deliver high-quality technical solutions with the ability to draft a clean, tested, maintainable code with readability/documentation in mind.","linkedin":"Check out my LinkedIn for more information."},"skills":{"title":"Skills","frontend":{"title":"Front-end","items":["I maintain the semantic markup.","I maintain quality and ensure responsiveness of applications.","I have experience with Search Engine Optimization.","I can ensure consistent performance across multiple browsers and platforms.","I often turn to use preprocessors such as Sass.","I love PostCSS, and I prefer to develop future-proof CSS.","JavaScript is my \\"native\\" programming language. I have worked with it for over 15 years.","I have strong experience with React, React Native, Next.js and Astro.js."]},"backend":{"title":"Back-end","items":["I build and deliver high-quality technical solutions with the ability to draft a clean, tested, maintainable code with readability/documentation in mind.","I have strong experience writing production software with object-oriented languages.","I have strong experience of JavaScript (Node.js, Express.js, Nest.js) on the server-side.","I have strong experience in GraphQL.","I design and implement high-performance, scalable, data-centric serverless (cloud) based microservices."]},"databases":{"title":"Databases","items":["I have strong knowledge about data storage design using relational and NoSQL databases, including MySQL, PostgreSQL, MongoDB, Redis, and DynamoDB."]},"devops":{"title":"DevOps","items":["I have solid experience with AWS Services and DevOps."]}},"stack":{"title":"Stack","description":"You can check my complete tech stack and workflow guide here."},"footer":{"copyright":"\xa9 Copyright 2025. Powered with \u2615 and \u2764\uFE0F."},"buttons":{"schedule":"Schedule a meeting"}}');

},{}],"kSfUR":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"nav":{"profile":"Perfil","skills":"Habilidades","stack":"Stack","articles":"Artigos"},"intro":{"greeting":"Ol\xe1, eu sou Vitor Britto!","description":"Tenho mais de 15 anos de experi\xeancia profissional. Especialista em desenvolvimento de aplica\xe7\xf5es m\xf3veis e web. Apaixonado por Javascript e suas tecnologias. Construo e entrego solu\xe7\xf5es t\xe9cnicas de alta qualidade com a capacidade de desenvolver c\xf3digo limpo, testado e sustent\xe1vel, tendo em mente a legibilidade e documenta\xe7\xe3o.","linkedin":"Confira meu LinkedIn para mais informa\xe7\xf5es."},"skills":{"title":"Habilidades","frontend":{"title":"Front-end","items":["Mantenho a marca\xe7\xe3o sem\xe2ntica.","Mantenho a qualidade e garanto a responsividade das aplica\xe7\xf5es.","Tenho experi\xeancia com Otimiza\xe7\xe3o para Motores de Busca.","Posso garantir performance consistente em m\xfaltiplos navegadores e plataformas.","Frequentemente uso pr\xe9-processadores como Sass.","Amo PostCSS e prefiro desenvolver CSS \xe0 prova do futuro.","JavaScript \xe9 minha linguagem de programa\xe7\xe3o \\"nativa\\". Trabalho com ela h\xe1 mais de 15 anos.","Tenho forte experi\xeancia com React, React Native, Next.js e Astro.js."]},"backend":{"title":"Back-end","items":["Construo e entrego solu\xe7\xf5es t\xe9cnicas de alta qualidade com a capacidade de desenvolver c\xf3digo limpo, testado e sustent\xe1vel, tendo em mente a legibilidade e documenta\xe7\xe3o.","Tenho forte experi\xeancia em escrever software de produ\xe7\xe3o com linguagens orientadas a objetos.","Tenho forte experi\xeancia de JavaScript (Node.js, Express.js, Nest.js) no lado do servidor.","Tenho forte experi\xeancia em GraphQL.","Projeto e implemento microsservi\xe7os serverless (cloud) escal\xe1veis e centrados em dados de alta performance."]},"databases":{"title":"Bancos de Dados","items":["Tenho forte conhecimento sobre design de armazenamento de dados usando bancos de dados relacionais e NoSQL, incluindo MySQL, PostgreSQL, MongoDB, Redis e DynamoDB."]},"devops":{"title":"DevOps","items":["Tenho s\xf3lida experi\xeancia com Servi\xe7os AWS e DevOps."]}},"stack":{"title":"Stack","description":"Voc\xea pode conferir meu stack completo e guia de workflow aqui."},"footer":{"copyright":"\xa9 Copyright 2025. Feito com \u2615 e \u2764\uFE0F."},"buttons":{"schedule":"Agendar reuni\xe3o"}}');

},{}],"3QV8O":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a8mD2":[function() {},{}],"kDCbh":[function() {},{}],"gVh8N":[function() {},{}],"fEdOe":[function() {},{}],"a58Ll":[function() {},{}],"jB4LN":[function() {},{}],"1HNpQ":[function() {},{}],"2d8mC":[function() {},{}],"kYY5R":[function() {},{}],"jDcQp":[function() {},{}],"eaUsL":[function() {},{}]},["fHjG8","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
