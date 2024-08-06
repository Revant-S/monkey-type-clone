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

/***/ "./src/client/scripts/test.ts":
/*!************************************!*\
  !*** ./src/client/scripts/test.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.showText = exports.highlight = exports.convertToSpan = exports.validateKey = exports.getTextArray = void 0;\nconst Timer_1 = __webpack_require__(/*! ./utils/Timer */ \"./src/client/scripts/utils/Timer.ts\");\nconst contentDiv = document.getElementById(\"testingWindow\");\nconst text = (_a = contentDiv.querySelector(\"p\")) === null || _a === void 0 ? void 0 : _a.textContent;\nconst startBtn = document.getElementById(\"startTimer\");\nlet testState = {\n    wordIndex: 0,\n    textArray: [],\n    started: false,\n    timer: new Timer_1.Timer(5 * 60),\n    timerIntervalId: null,\n    resultObject: {\n        correctedLetters: 0,\n        incorrectLetters: 0,\n        correctLetters: 0\n    }\n};\nconst getTextArray = (text) => {\n    return text.trim().replace(\"\\n\", \",\").split(\"\").splice(480, text.length - 1);\n};\nexports.getTextArray = getTextArray;\nconst validateKey = (key) => {\n    const pattern = /^[a-zA-Z0-9 ,.]$/;\n    return pattern.test(key);\n};\nexports.validateKey = validateKey;\nconst convertToSpan = (textArray) => {\n    return textArray.map((text, index) => {\n        const span = document.createElement(\"span\");\n        span.innerText = text;\n        span.id = `letter-${index}`;\n        return span;\n    });\n};\nexports.convertToSpan = convertToSpan;\nfunction goBack() {\n    if (testState.wordIndex <= 0)\n        return;\n    testState.wordIndex--;\n    const element = document.getElementById(`letter-${testState.wordIndex}`);\n    if (!element)\n        return;\n    if (element.classList.contains(\"text-white\"))\n        element.classList.remove(\"text-white\");\n    if (element.classList.contains(\"bg-green-800\"))\n        element.classList.remove(\"bg-green-800\");\n    if (element.classList.contains(\"bg-red-800\")) {\n        element.classList.remove(\"bg-red-800\");\n        testState.resultObject.correctedLetters++;\n        testState.resultObject.incorrectLetters--;\n    }\n    if (element.classList.contains(\"text-red-600\")) {\n        testState.resultObject.correctedLetters++;\n        testState.resultObject.incorrectLetters--;\n        element.classList.remove(\"text-red-600\");\n    }\n}\nconst highlight = (e) => {\n    e.preventDefault();\n    if (!testState.started)\n        return;\n    const keyPressed = e.key;\n    if (keyPressed === \"Backspace\")\n        return goBack();\n    if (!(0, exports.validateKey)(keyPressed))\n        return;\n    const textRequired = testState.textArray[testState.wordIndex];\n    const element = document.getElementById(`letter-${testState.wordIndex++}`);\n    if (!element)\n        return;\n    if (textRequired.toLocaleLowerCase() === keyPressed.toLocaleLowerCase()) {\n        element.classList.add(\"text-white\");\n        testState.resultObject.correctLetters++;\n        return;\n    }\n    if (textRequired === \" \")\n        return element.classList.add(\"bg-red-800\");\n    testState.resultObject.incorrectLetters++;\n    return element.classList.add(\"text-red-600\");\n};\nexports.highlight = highlight;\nconst showText = () => {\n    if (!text)\n        return;\n    const textArray = (0, exports.getTextArray)(text);\n    console.log(text);\n    const spanList = (0, exports.convertToSpan)(textArray);\n    if (!spanList || !spanList.length)\n        return alert(\"SomeThing went worng\");\n    contentDiv.innerHTML = \"\";\n    spanList.forEach(spanElement => {\n        contentDiv.appendChild(spanElement);\n    });\n    testState.textArray = textArray;\n};\nexports.showText = showText;\n(0, exports.showText)();\nwindow.addEventListener(\"keydown\", exports.highlight);\nstartBtn.addEventListener(\"click\", (e) => {\n    const element = e.target;\n    if (!element)\n        return;\n    if (!testState.started) {\n        testState.started = true;\n        testState.timer.start();\n        testState.timerIntervalId = setInterval(() => {\n            const timeElement = document.getElementById(\"timer\");\n            if (!timeElement)\n                return;\n            timeElement.innerText = testState.timer.getTimeRemaining();\n        }, 1000);\n        element.innerText = \"Submit\";\n        return;\n    }\n    if (!testState.timerIntervalId)\n        return;\n    testState.timer.stop();\n    testState.started = false;\n    clearInterval(testState.timerIntervalId);\n});\n\n\n//# sourceURL=webpack://project-root/./src/client/scripts/test.ts?");

/***/ }),

/***/ "./src/client/scripts/utils/Timer.ts":
/*!*******************************************!*\
  !*** ./src/client/scripts/utils/Timer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Timer = void 0;\nclass Timer {\n    constructor(totalTime) {\n        this.totalTime = totalTime;\n        this.isRunning = false;\n        this.startTime = null;\n    }\n    convertUnixTimeToMinutesAndSeconds(unixTime) {\n        const minutes = Math.floor(unixTime / 60);\n        const seconds = Math.floor(unixTime % 60);\n        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;\n    }\n    start() {\n        if (this.isRunning)\n            return;\n        this.isRunning = true;\n        this.startTime = new Date().getTime();\n    }\n    stop() {\n        if (this.isRunning) {\n            this.isRunning = false;\n        }\n    }\n    getTimeRemaining() {\n        if (this.startTime === null) {\n            return '00:00';\n        }\n        const now = new Date().getTime();\n        const elapsedTime = (now - this.startTime) / 1000;\n        const timeRemaining = Math.max(0, this.totalTime - elapsedTime);\n        return this.convertUnixTimeToMinutesAndSeconds(timeRemaining);\n    }\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack://project-root/./src/client/scripts/utils/Timer.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/scripts/test.ts");
/******/ 	
/******/ })()
;