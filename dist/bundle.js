/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/event */ \"./src/models/event.ts\");\n\nwindow.onload = function () {\n    console.log(\"fichier chargé\");\n    fetch('http://localhost:3000/datas.json')\n        .then(response => response.json())\n        .then(jsonData => {\n        const dataInstance = new _models_event__WEBPACK_IMPORTED_MODULE_0__.Datas(jsonData);\n        createTable(dataInstance.Paris);\n    })\n        .catch(error => {\n        console.error('Error loading JSON:', error);\n    });\n};\nfunction createTable(data) {\n    const table = document.createElement('table');\n    table.setAttribute('class', 'display');\n    const headerRow = document.createElement('tr');\n    // Créer les en-têtes de colonnes\n    for (const key in data[0]) {\n        const th = document.createElement('th');\n        th.textContent = key;\n        headerRow.appendChild(th);\n    }\n    table.appendChild(headerRow);\n    // Remplir les données\n    data.forEach(item => {\n        const row = document.createElement('tr');\n        for (const key in item) {\n            const cell = document.createElement('td');\n            cell.textContent = item[key];\n            row.appendChild(cell);\n        }\n        table.appendChild(row);\n    });\n    // Ajouter le tableau au corps de la page\n    document.body.appendChild(table);\n}\n// Déclarez la variable existingData à l'extérieur de la fonction\nlet existingData = [];\n// Écouteur d'événement pour le bouton de validation\nconst valider_btn = document.querySelectorAll('button')[0];\nvalider_btn.addEventListener('click', (e) => {\n    e.preventDefault();\n    const form = document.getElementById('encodeur');\n    const table = document.getElementById('display');\n    const formData = new FormData(form);\n    const newData = {\n        Date: formatDate(new Date()),\n        Ligue: formData.get('league_name').toString(),\n        Evenement: formData.get('event_name').toString(),\n        Cote: parseFloat(formData.get('odds').toString()),\n        Mise: parseFloat(formData.get('mise').toString()),\n        Evenement_deja_produit: formData.get('event_done'),\n        Conseiller_par_Bard: formData.get('advice').toString(),\n        Status: 'En Attente',\n        Gain: 0\n    };\n    // Ajouter le nouvel objet au tableau de données existant\n    existingData.push(newData);\n    // Mettre à jour le tableau affiché dans la page\n    const display_table = document.querySelector('.display');\n    // Créer une nouvelle ligne\n    const newRow = display_table.insertRow();\n    // Liste des clés dans l'ordre souhaité pour affichage\n    const keys = ['Date', 'Ligue', 'Evenement', 'Cote', 'Mise', 'Conseiller_par_Bard', 'Evenement_deja_produit', 'Status', 'Gain'];\n    for (const key of keys) {\n        const cell = newRow.insertCell();\n        cell.textContent = newData[key];\n    }\n    // Envoyer les données au backend\n    sendDataToBackend(newData);\n});\nfunction sendDataToBackend(data) {\n    console.log(data);\n    fetch('http://localhost:3000/dist/routes', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(data)\n    })\n        .then(response => response.json())\n        .then(responseData => {\n        console.log('Backend response:', responseData);\n        // Mettre à jour le tableau affiché dans la page si nécessaire\n    })\n        .catch(error => {\n        console.error('Error sending data to backend:', error);\n    });\n}\nfunction formatDate(date) {\n    const day = String(date.getDate()).padStart(2, '0');\n    const month = String(date.getMonth() + 1).padStart(2, '0');\n    const year = date.getFullYear();\n    return `${day}/${month}/${year}`;\n}\n\n\n//# sourceURL=webpack://footstats/./src/index.ts?");

/***/ }),

/***/ "./src/models/event.ts":
/*!*****************************!*\
  !*** ./src/models/event.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Datas: () => (/* binding */ Datas)\n/* harmony export */ });\nclass Datas {\n    constructor(data) {\n        this.Strategie = data.Strategie;\n        this.Paris = data.Paris;\n        this.Mise_total = data.Mise_total;\n        this.Nombres_de_paris = data.Nombres_de_paris;\n        this.Taux_de_succes = data.Taux_de_succes;\n        this.Bankeroll_de_depart = data.Bankeroll_de_depart;\n        this.Bankeroll_de_fin = data.Bankeroll_de_fin;\n        this.Nombres_de_paris_gagnes = data.Nombres_de_paris_gagnes;\n        this.Nombres_de_paris_perdus = data.Nombres_de_paris_perdus;\n    }\n}\n\n\n//# sourceURL=webpack://footstats/./src/models/event.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;