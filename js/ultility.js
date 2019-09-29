"use strict";

/**
 * Checks if an input is a string or not.
 * 
 * @param   {*}         input   The input to be checked.
 * 
 * @return  {boolean}           A true or false based on the input.
 * 
 * @example
 *      console.log(isString("SWX"));
 *      // -> Outputs true.
 */
function isString(input) {
    return (typeof (input) === 'string' || input instanceof String);
};

/**
 * Capitalize the first letter of a string.
 * 
 * @param   {string} str The string with the first letter to be capitalized.
 * 
 * @returns {string}     The input string with the first letter capitalized.
 * 
 * @example
 *      console.log(sentenceCaseStr("case"));
 *      // -> Outputs "Case".
 */
function sentenceCaseStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Shuffles/Randomizes an array.
 * 
 * @param   {array} arr The array with contents to be shuffled.
 * 
 * @return  {array}     The array with contents randomized.
 * 
 * @example
 *      console.log(randomizeArray([1, 2]));
 *      // -> Outputs [2, 1] 50% of the time and [1, 2] 50% of the time.
 */
function randomizeArray(arr) {
    try {
        return arr.sort(
            function (a, b) {
                return 0.5 - Math.random();
            }
        );
    } catch (error) {
        console.log("ERROR! 'Input is not an array.' OR '" + error + "'");
    }
};

/**
 * Renoves all the timeouts to prevent gitches and weird transitions.
 * 
 * @example 
 *      clearAllTimeouts();
 *      // -> Timeouts cleared.
 */
function clearAllTimeouts() {
    let mx = setTimeout("", 0);
    for (var i = clearAllTimeouts.last || (clearAllTimeouts.last = 0); i < mx; i++) {
        clearTimeout(i);
    }
};

/**
 * Sets the background music to a specified audio file.
 * 
 * @param {String} music The name of the audio file.
 * 
 * @example
 *      setBackgroundAudio("ambient-slowmotion.mp3");
 *      // -> Background changed to "ambient-slowmotion.mp3".
 */
function setBackgroundAudio(music = "ambient-slowmotion.mp3") {
    if (typeof backgroundAudio != "undefined") {
        window.backgroundAudio.pause();
    };

    window.backgroundAudio = document.createElement("audio");
    // backgroundAudio.src = "../audio/" + music;
    backgroundAudio.src = "audio/" + music;
    backgroundAudio.volume = 0.25;
    backgroundAudio.loop = true;

    backgroundAudio.play();
};

/**
 * Add a background audio that does not loop.
 * 
 * @param {String} music The name of the audio file.
 * 
 * @example
 *      addBackgroundAudio("victory.mp3");
 *      // -> the music "victory.mp3" added.
 */
function addBackgroundAudio(music = "victory.mp3") {
    if (typeof backgroundAudioOnce != "undefined") {
        window.backgroundAudioOnce.pause();
    };

    window.backgroundAudioOnce = document.createElement("audio");
    // backgroundAudioOnce.src = "../audio/" + music;
    backgroundAudioOnce.src = "audio/" + music;
    backgroundAudioOnce.volume = 1;

    backgroundAudioOnce.play();
};

/**
 * Erases everything on the document body and adds the animation for loading new content.
 * 
 * @example
 *      clearScreen();
 *      // -> Everything on the screen will be removed after an animation.
 */
function clearScreen() {
    clearAllTimeouts();

    document.body.classList.add("clear-screen");
    document.body.classList.add("no-click");
    document.body.innerHTML = "";
    // Remove the added class after some time
    window.setTimeout(() => {
        document.body.classList.remove("clear-screen");
        document.body.classList.remove("no-click");
    }, 500);

    addBackgroundAudio("transition.mp3");
};

/**
 * Add a custom cursor to the screen.
 * 
 * @example
 *      loadCursor();
 *      // -> Custom cursor added.
 */
function loadCursor() {
    let cursor = createHTMLElement({
        name: "div",
        setClass: "cursor"
    });

    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    let speed = 0.2;

    // Add animation to cursor
    function animateCursor() {
        const distX = mouseX - ballX;
        ballX += (distX * speed);
        cursor.style.left = ballX + "px";

        const distY = mouseY - ballY;
        ballY += (distY * speed);
        cursor.style.top = ballY + "px";

        requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Add custom cursor movement
    document.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    // Add custom cursor click
    document.addEventListener("click", function (e) {
        e.preventDefault;

        cursor.classList.remove("active");

        void cursor.offsetWidth;

        cursor.classList.add("active");
    }, false);
};

/**
 * Change of color mode of the document body. If the current mode is light, the color mode will be changed to dark and vice versa.
 * 
 * @example
 *      changeColorMode();
 *      // -> Changes the data-theme to "light" if its "dark" and vice versa.
 */
function changeColorMode() {
    let dataTheme = document.documentElement.attributes["data-theme"].textContent;

    if (dataTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark")
    } else if (dataTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light")
    };
};

/**
 * Find the function to load the subject the given level is apart of.
 * 
 * @param   {string}    levelType   The level name used to find subject
 * 
 * @return  {string}                The name of the function to load the subject
 * 
 * @example
 *      console.log(findSubject("algebraLevels"));
 *      // -> Outputs "loadMathematics()"
 */
function findSubject(levelType) {
    try {
        return "load" + sentenceCaseStr(window.subjects[levelType]) + "Menu()";
    } catch (error) {
        console.log("ERROR! 'Subject does not exist.' OR '" + error + "'");
    };
};

/**
 * Generate a random postive integer in between the specified minimum and maximum value, inclusive.
 * 
 * @param   {Number}    min     The minimum number the random number can be.
 * @param   {Number}    max     The maximum number the random number can be.
 * 
 * @return                      The random number.
 * 
 * @example
 *      console.log(genRandPositiveInt(4, 6));
 *      // -> Outputs a random number between 4 and 6, inclusive.
 * 
 */
function genRandPositiveInt(min = 0, max = 9) {
    if (min > max) {
        let tmp = min;
        min = max;
        max = tmp;
    };

    const range = Math.abs(max - min + 1);

    let random = Math.floor(Math.random() * range) + min;

    return random;
};