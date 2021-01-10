// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/image1.jpg":[function(require,module,exports) {
module.exports = "/image1.c99f29b7.jpg";
},{}],"images/image2.jpg":[function(require,module,exports) {
module.exports = "/image2.b83c9975.jpg";
},{}],"images/image3.jpg":[function(require,module,exports) {
module.exports = "/image3.b00b07c2.jpg";
},{}],"images/image4.jpg":[function(require,module,exports) {
module.exports = "/image4.1a9eb963.jpg";
},{}],"images/image5.jpg":[function(require,module,exports) {
module.exports = "/image5.89c15421.jpg";
},{}],"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _image = _interopRequireDefault(require("../images/image1.jpg"));

var _image2 = _interopRequireDefault(require("../images/image2.jpg"));

var _image3 = _interopRequireDefault(require("../images/image3.jpg"));

var _image4 = _interopRequireDefault(require("../images/image4.jpg"));

var _image5 = _interopRequireDefault(require("../images/image5.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Données qui devrait normalement venir de la db avec de l'AJAX.
var _default = [{
  id: 1,
  src: _image.default,
  alt: "A cat game",
  content: "Photo 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit et nisi sed blandit.",
  href: "#0"
}, {
  id: 2,
  src: _image2.default,
  alt: "Tatoo &amp; cat",
  // Titre
  content: "Photo 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit et nisi sed blandit.",
  href: "#1"
}, {
  id: 3,
  src: _image3.default,
  alt: "Tatoo &amp; cat",
  // Titre
  content: "Photo 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit et nisi sed blandit.",
  href: "#2"
}, {
  id: 4,
  src: _image4.default,
  alt: "Tatoo &amp; cat",
  // Titre
  content: "Photo 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit et nisi sed blandit.",
  href: "#3"
}, {
  id: 5,
  src: _image5.default,
  alt: "Tatoo &amp; cat",
  // Titre
  content: "Photo 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit et nisi sed blandit.",
  href: "#4"
}]; // import image1 from "../../assets/slides/image1.jpg";
// var img1 = ./../dist/(startsWith("image1"));
// import image1 from "./image1.jpg";
// var img1 = ../../dist/(indexOf("image1"));
// const img1 = ../../assets/slides/"image1.jpg";

exports.default = _default;
},{"../images/image1.jpg":"images/image1.jpg","../images/image2.jpg":"images/image2.jpg","../images/image3.jpg":"images/image3.jpg","../images/image4.jpg":"images/image4.jpg","../images/image5.jpg":"images/image5.jpg"}],"js/modules/templates/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Template d'une image du slide
var _default = "\n<!-- IMAGE SLIDE  -->\n<figure data-id=\"{{id}}\">\n   <img class=\"mySlides\" src=\"{{src}}\" alt=\"{{alt}}\">\n   <!-- Bouton d'informations sur la photo -->\n   <figcaption>\n      <a href=\"#\" class=\"icon icon-info\">\n      <i class=\"material-icons\">add_circle</i>\n      </a>\n      <div>{{content}}</div>\n   </figcaption>\n   <!-- /Bouton d'informations sur la photo -->\n</figure>\n";
exports.default = _default;
},{}],"js/modules/templates/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Template d'une image du menu
var _default = "\n<!-- MENU IMAGE  -->\n\n<li>\n   <a href={{href}} class=\"\">\n   <img src={{src}} alt={{alt}}>\n   </a>\n</li>\n\n";
exports.default = _default;
},{}],"js/modules/Image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _image = _interopRequireDefault(require("./templates/image"));

var _menu = _interopRequireDefault(require("./templates/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// On importe imageTemplate
// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }
var Image = /*#__PURE__*/function () {
  function Image(data) {
    _classCallCheck(this, Image);

    this.parent = data.parent;
    this.id = data.image.id; // Ton id (id de class Image), est égal à l'id de image

    this.src = data.image.src;
    this.alt = data.image.alt;
    this.href = data.image.href;
    this.content = data.image.content;
    this.templateImgSlide = _image.default;
    this.templateImgMenu = _menu.default;
  }
  /* On crée le render après car dans le constructor on a pas encore
     de code HTML du template, quand on le push, le code HTML se construit apres. */
  // Rendu d'une image


  _createClass(Image, [{
    key: "menuRender",
    value: function menuRender() {
      // On transforme le this.template |  Je remplace les données statique par les données de Image
      // On parcouri toutes les propriétés - d'un Objet(in) - d'un Tableau(of) | this c'est l'objet
      for (var propriete in this) {
        this.templateImgMenu = this.templateImgMenu.replace('{{' + propriete + '}}', this[propriete]);
      } // CONSTRUCTION D'UNE IMG MENU


      var newMenu = document.createElement('li'); // Création du nouveau li

      newMenu.innerHTML = this.templateImgMenu; // .. A la place d'afficher un Coucou on aura le template d'une image ..

      this.parent.listEl.appendChild(newMenu); // .. et il va venir l'ajouter a la Galerie
    }
  }, {
    key: "imageRender",
    value: function imageRender() {
      for (var propriete in this) {
        // On parcour toutes les propriétés | this c'est l'objet
        this.templateImgSlide = this.templateImgSlide.replace('{{' + propriete + '}}', this[propriete]); //this.templateImgMenu = this.templateImgMenu.replace('{{'+propriete+'}}', this[propriete]);
      } // CONSTRUCTION D'UNE IMG SLIDE


      var newImage = document.createElement('li'); // Création du nouveau li

      newImage.classList.add("slide"); // class slide au nouveau élément li

      newImage.innerHTML = this.templateImgSlide; // .. A la place d'afficher un Coucou on aura le template d'une image ..

      this.parent.listEl.appendChild(newImage); // .. et il va venir l'ajouter a la Galerie
    }
  }]);

  return Image;
}();

exports.default = Image;
},{"./templates/image":"js/modules/templates/image.js","./templates/menu":"js/modules/templates/menu.js"}],"js/modules/templates/galerie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n<!-- GALERIE TEMPLATE -->\n\n<div class=\"slider fullsize\">\n   <div class=\"slides\">\n      <ul style=\"width: 500%\" class=\"image-list\">\n         <!-- RENDER IMAGE SLIDE -->\n      </ul>\n   </div>\n\n   <div class=\"menu\">\n      <div class=\"slider-menu\">\n         <h1>Titre</h1>\n         <ul class=\"slides image-menu\">\n            <!-- RENDER MENU IMAGE -->\n         </ul>\n      </div>\n   </div>\n\n   <!-- NAVIGATION -->\n   <div class=\"navigation\">\n      <div>\n         <ul class=\"navigation\">\n\n            <!-- BOUTON PREVIOUS -->\n            <li class=\"previous onclick=\"plusDivs(-1)\">\n              <a href=\"#\"><i class=\"material-icons\">fast_rewind</i></a>\n            </li>\n\n            <!-- BOUTON STOP -->\n            <li class=\"stop active\">\n               <a href=\"#\"><i class=\"material-icons\">pause_circle_filled</i></a>\n            </li>\n\n            <!-- BOUTON PLAY -->\n            <li class=\"play\">\n               <a href=\"#\"><i class=\"material-icons\">play_circle_filled</i></a>\n            </li>\n\n            <!-- BOUTON NEXT -->\n            <li class=\"next onclick=\"plusDivs(+1)\">\n            <a href=\"#\"><i class=\"material-icons\">fast_forward</i></a>\n            </li>\n\n         </ul>\n      </div>\n   </div>\n</div>\n</div>\n";
exports.default = _default;
},{}],"js/modules/Galerie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Image = _interopRequireDefault(require("./Image"));

var _galerie = _interopRequireDefault(require("./templates/galerie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Charge le template de la galerie
var Galerie = /*#__PURE__*/function () {
  // Définit la propriété élément (el)
  function Galerie(data) {
    _classCallCheck(this, Galerie);

    // data récupérées de l'instanciation new Galerie
    this.el = document.querySelector(data.el);
    this.listEl;
    this.images = []; // On met les données chargée ci dessous dans ce tableau vide.

    this._loadImages(data.images); // On charge les données des images pour hydrater this.images


    this.template = _galerie.default; // On charge le code html du template de la Galerie (via import ci dessus)

    this.render();
    this.renderImgSlide();
    this.renderImgMenu();
  } // METHODE loadImages - Chargement des images sous formes d'objets de type Image dans this.images
  // But => Parcour tous les images pour en faire des objet de type Image


  _createClass(Galerie, [{
    key: "_loadImages",
    value: function _loadImages(images) {
      var _iterator = _createForOfIteratorHelper(images),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var image = _step.value;
          this.images.push(new _Image.default({
            parent: this,
            image: image
          })); //dans (image));, on envois un tableau de type json avec 4 propriétés (id, src, alt, content)
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Rendu de la Galerie

  }, {
    key: "render",
    value: function render() {
      this.el.innerHTML = this.template; // On met le template sur l'element sur lequel on a greffer l'application
      // L'élément .image-list et .image-menu existe pour le naviguateur
    }
  }, {
    key: "renderImgSlide",
    value: function renderImgSlide() {
      this.listEl = this.el.querySelector('.image-list'); // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher

      var _iterator2 = _createForOfIteratorHelper(this.images),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var image = _step2.value;
          image.imageRender();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "renderImgMenu",
    value: function renderImgMenu() {
      this.listEl = this.el.querySelector('.image-menu');

      var _iterator3 = _createForOfIteratorHelper(this.images),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var image = _step3.value;
          image.menuRender();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return Galerie;
}();

exports.default = Galerie;
},{"./Image":"js/modules/Image.js","./templates/galerie":"js/modules/templates/galerie.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _Galerie = _interopRequireDefault(require("./modules/Galerie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Importation des données des images
// On charge Galerie.js
// Instanciation (Création) d'un nouvel objet de type Galerie
// On lui envois un élément et des données images
new _Galerie.default({
  el: '#app',
  // On colle notre Galerie sur le el
  images: _data.default // Envois de Données (ces données devrait venir de la db normalement)

});
},{"./data":"js/data.js","./modules/Galerie":"js/modules/Galerie.js"}],"../../../../../../Users/chlou/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55348" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../Users/chlou/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map