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
},{}],"images/image6.jpg":[function(require,module,exports) {
module.exports = "/image6.168748fb.jpg";
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

var _image6 = _interopRequireDefault(require("../images/image6.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Données qui devrait normalement venir de la db avec de l'AJAX.
var _default = [{
  id: 1,
  src: _image.default,
  alt: "Alice au pays des merveilles",
  content: " Dans le monde décalé des Merveilles, Alice rencontre des personnages extraordinaires tels que Tweedledee et Tweedledum, le Chapelier Toqué, la reine de cœur et le lapin blanc désespérément en retard.",
  href: "#0"
}, {
  id: 2,
  src: _image2.default,
  alt: "La reine des neiges",
  // Titre
  content: "Olaf est un personnage fictif de la franchise Disney's Frozen, produit par Walt Disney Animation Studios. Olaf est d'abord présenté dans Frozen comme un bonhomme de neige animé créé par Elsa et Anna dans leur enfance."
}, {
  id: 3,
  src: _image3.default,
  alt: "Bambi",
  // Titre
  content: "Dans ce film, Bambi, un faon nouveau-né, apprend, au hasard de ses promenades, mille et une choses qui sont pour lui autant de sources d'émerveillement. De l'été à l'automne, il découvre ainsi les saisons une à une et affronte, pour la toute première fois, l'hiver."
}, {
  id: 4,
  src: _image4.default,
  alt: "Tarzan",
  // Titre
  content: "Tarzan est un personnage de fiction représentant l’enfant sauvage archétypal élevé par les Grands Singes dans la jungle africaine."
}, {
  id: 5,
  src: _image5.default,
  alt: "Le roi lion",
  // Titre
  content: "C'est l'histoire de Simba, un jeune lionceau insouciant et turbulent qui est destiné à succéder à son père Mufasa, le très respecté roi des hautes terres d'Afrique. Mais c'est sans compter Scar, son oncle. Jaloux de son frère Mufasa, il a toujours rêvé de prendre le pouvoir."
}, {
  id: 6,
  src: _image6.default,
  alt: "Shrek",
  // Titre
  content: "Un ogre laid et misanthrope, Shrek, vit tranquille et heureux dans la saleté au milieu d'un marais. Un jour, son espace vital est envahi par une nuée d'horripilantes créatures de contes de fées, 7 nains, 3 ours, un pantin, 3 fées, et moult sorcières, princes charmants, princesses, ainsi qu'un âne bavard et collant."
}];
exports.default = _default;
},{"../images/image1.jpg":"images/image1.jpg","../images/image2.jpg":"images/image2.jpg","../images/image3.jpg":"images/image3.jpg","../images/image4.jpg":"images/image4.jpg","../images/image5.jpg":"images/image5.jpg","../images/image6.jpg":"images/image6.jpg"}],"js/modules/templates/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// TEMPLATE D'UNE IMAGE SLIDE
var _default = "\n<!-- IMAGE SLIDE  -->\n<figure data-id=\"{{id}}\">\n   <img class=\"mySlides\" src=\"{{src}}\" alt=\"{{alt}}\">\n   <!-- Bouton d'informations sur la photo -->\n   <figcaption>\n      <a href=\"#\" class=\"icon icon-info\">\n      <i class=\"material-icons\">add_circle</i>\n      </a>\n      <div>{{content}}</div>\n   </figcaption>\n   <!-- /Bouton d'informations sur la photo -->\n</figure>\n";
exports.default = _default;
},{}],"js/modules/templates/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// TEMPLATE D'UNE IMAGE MENU
var _default = "\n<!-- MENU IMAGE  -->\n\n   <a href=\"#\" class=\"\">\n   <img src={{src}} alt={{alt}}>\n   </a>\n\n";
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

// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }
var Image = /*#__PURE__*/function () {
  // CONSTRUTEUR -----------------------------------------------------------------
  function Image(data) {
    _classCallCheck(this, Image);

    // 1."ton" parent est date.parent (parent: Galerie)
    this.parent = data.parent; // 2. Propriétés

    this.id = data.image.id;
    this.src = data.image.src;
    this.alt = data.image.alt;
    this.href = data.image.href;
    this.content = data.image.content; // 3.Imports

    this.templateImgSlide = _image.default;
    this.templateImgMenu = _menu.default;
  }
  /* NB: On crée le render après car dans le constructor on a pas encore
     de code HTML du template, quand on le push, le code HTML se construit après. */
  // RENDU (GENERE) DE LA VUE 'IMAGE MENU' ------------------------------------------------------
  // - NB: un Objet(in) - d'un Tableau(of) | this c'est l'objet


  _createClass(Image, [{
    key: "menuRender",
    value: function menuRender() {
      for (var propriete in this) {
        // On remplace les données statique par les données de Image
        this.templateImgMenu = this.templateImgMenu.replace('{{' + propriete + '}}', this[propriete]);
      } // CONSTRUCTION D'UNE IMG MENU -----


      var newImgMenu = document.createElement('li');
      newImgMenu.innerHTML = this.templateImgMenu;
      this.parent.imageMenu.appendChild(newImgMenu);
      return newImgMenu;
    } // RENDU (GENERE) D'UNE 'IMAGE SLIDE -----------------------------------------------------

  }, {
    key: "imageRender",
    value: function imageRender() {
      for (var propriete in this) {
        // On remplace les données statique par les données de Image
        this.templateImgSlide = this.templateImgSlide.replace('{{' + propriete + '}}', this[propriete]);
      } // CONSTRUCTION D'UNE IMG SLIDE -----


      var newImgSlide = document.createElement('li');
      newImgSlide.classList.add("slide");
      newImgSlide.innerHTML = this.templateImgSlide;
      this.parent.imageSlide.appendChild(newImgSlide);
      return newImgSlide;
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
// TEMPLATE DE LA GALERIE
var _default = "\n<!-- GALERIE TEMPLATE -->\n\n<div class=\"slider fullsize\">\n   <div class=\"slides\">\n      <ul style=\"width: 500%\" class=\"image-list\">\n         <!-- RENDER IMAGE SLIDE -->\n      </ul>\n   </div>\n\n   <div class=\"menu\">\n      <div class=\"slider-menu\">\n         <h1 class=\"title\"></h1>\n         <ul class=\"slides image-menu\">\n            <!-- RENDER MENU IMAGE -->\n         </ul>\n      </div>\n   </div>\n\n   <!-- NAVIGATION -->\n   <div class=\"navigation\">\n      <div>\n         <ul class=\"navigation\">\n\n            <!-- BOUTON PREVIOUS -->\n            <li class=\"previous\">\n              <a href=\"#\"><i class=\"material-icons\">fast_rewind</i></a>\n            </li>\n\n            <!-- BOUTON STOP -->\n            <li class=\"stop active\">\n               <a href=\"#\"><i class=\"material-icons\">pause_circle_filled</i></a>\n            </li>\n\n            <!-- BOUTON PLAY -->\n            <li class=\"play\">\n               <a href=\"#\"><i class=\"material-icons\">play_circle_filled</i></a>\n            </li>\n\n            <!-- BOUTON NEXT -->\n            <li class=\"next\">\n            <a href=\"#\"><i class=\"material-icons\">fast_forward</i></a>\n            </li>\n\n         </ul>\n      </div>\n   </div>\n</div>\n</div>\n";
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

var Galerie = /*#__PURE__*/function () {
  // Définit la propriété élément (el)
  // CONSTRUTEUR -----------------------------------------------------------------
  // data récupérées de l'instanciation new Galerie
  function Galerie(data) {
    _classCallCheck(this, Galerie);

    // 1.load Image dans this.images.
    this.images = [];

    this._loadImages(data.images); // 2. APP - Récupère app element, charge le template dedans


    this.app = document.querySelector(data.el);
    this.app.innerHTML = _galerie.default; // 3. Récupération des élements dont on a besoin (apres avoir charger le template).

    this.title = this.app.querySelector('.title');
    this.imageSlide = this.app.querySelector('.image-list');
    this.imageMenu = this.app.querySelector('.image-menu');
    this.timer = null; // 4. IMAGE SLIDE - Gestion des images 'slide' (genereVue, gereEvenement - figcaption, appendChild-imageSlide)

    this.renderImgSlide(); // 5. IMAGE MENU - Gestion des images 'menu' (genereVue, gereEvenement - onclick, appendChild-imageSlide)

    this.renderImgMenu(); // 6. Activer les boutons

    this._activerBtns(); // 7. Selectionne l'image slide par defaut.


    this.viewGalerieImg(1);
  } // CHARGEMENT DES IMAGES -------------------------------------------------------
  // Parcours des images de data. Json format.
  // Creation d'object Image - json avec 4 propriétés (id, src, alt, content)
  // Ajout dans le tableau de donnée 'this.images[]''


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
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // RENDU IMAGE MENU ------------------------------------------------------------

  }, {
    key: "renderImgMenu",
    value: function renderImgMenu() {
      var _this = this;

      var _iterator2 = _createForOfIteratorHelper(this.images),
          _step2;

      try {
        var _loop = function _loop() {
          var image = _step2.value;
          var imgMenu = image.menuRender(); //(menuRender() vient de la class Image)

          imgMenu.onclick = function () {
            _this.viewGalerieImg(image.id);
          };
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } // RENDU IMAGE SLIDE -----------------------------------------------------------

  }, {
    key: "renderImgSlide",
    value: function renderImgSlide() {
      this.imageSlide.setAttribute('style', 'width:' + this.images.length + '00%'); // Ajout Attribut

      var _iterator3 = _createForOfIteratorHelper(this.images),
          _step3;

      try {
        var _loop2 = function _loop2() {
          var image = _step3.value;
          var imgGalerie = image.imageRender(); // (imageRender() vient de la class Image)
          // BOUTON ADDCIRCLE (figcaption)

          var elFigcaption = imgGalerie.querySelector('figcaption');
          var iconFigcaption = imgGalerie.querySelector('.icon.icon-info .material-icons');

          elFigcaption.onclick = function () {
            var taille = elFigcaption.style.right;

            if (taille === "0px") {
              // Affiche
              elFigcaption.setAttribute("style", "right: -20%;");
              iconFigcaption.innerHTML = "add_circle";
            } else {
              // Cache
              elFigcaption.setAttribute("style", "right: 0px;");
              iconFigcaption.innerHTML = "remove_circle";
            }
          };
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } // CONDITIONS DU SLIDE ---------------------------------------------------------

  }, {
    key: "viewGalerieImg",
    value: function viewGalerieImg(nbr) {
      // nbr d'image.
      var nbrImage = this.images.length; // trop loin, on reviens au debut.

      if (nbr > nbrImage) {
        this.slideIndex = 1;
      } // trop avant, on reviens à la fin.
      else if (nbr < 1) {
          this.slideIndex = nbrImage;
        } // affiche le nbr demandé
        else {
            this.slideIndex = nbr;
          } // glisse l'élement htlm au bon emplacement, en modifiant l'emplacement du bord gauche


      this.imageSlide.style.left = '-' + (this.slideIndex - 1) + '00%';
      this.title.innerText = this.images[this.slideIndex - 1].alt;
    } // ACTIVATION DES BOUTONS ---------------------------------------------------------

  }, {
    key: "_activerBtns",
    value: function _activerBtns() {
      var _this2 = this;

      // BOUTON PREVIOUS
      this.app.querySelector('.previous').onclick = function () {
        _this2._previousAction();
      }; // BOUTON NEXT


      this.app.querySelector('.next').onclick = function () {
        _this2._nextAction();
      }; // BOUTON PLAY


      this.app.querySelector('.play').onclick = function () {
        _this2._playAction();
      }; // BOUTON PAUSE STOP


      this.app.querySelector('.stop').onclick = function () {
        _this2._stopAction();
      };
    }
  }, {
    key: "_playAction",
    // ACTIONS DES BOUTONS ---------------------------------------------------------
    // Action PLAY
    value: function _playAction() {
      var _this3 = this;

      if (this.timer === null) {
        this._nextAction();

        this.timer = setInterval(function () {
          _this3._nextAction();
        }, 2000); // lance toute les 2 sec
      } else {
        this._stopAction();
      }

      ;
    }
  }, {
    key: "_stopAction",
    // Action STOP
    value: function _stopAction() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: "_nextAction",
    // Action NEXT
    value: function _nextAction() {
      this.viewGalerieImg(this.slideIndex + 1);
    }
  }, {
    key: "_previousAction",
    // Action PREVIOUS
    value: function _previousAction() {
      this.viewGalerieImg(this.slideIndex - 1);
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

// INSTANCIATION (Création) d'un nouvel objet de type Galerie
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56430" + '/');

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