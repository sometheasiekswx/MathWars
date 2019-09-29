"use strict";

/**
 * Set the animation for the correct screen for some time.
 * 
 * @example
 *      correctScreenAnimation();
 *      // -> The animation have take effect for some time.
 */
function correctScreenAnimation() {
    let dataTheme = document.documentElement.attributes["data-theme"].textContent;
    document.documentElement.setAttribute("data-theme", "transparent");
    document.body.classList.add("correct-screen");
    document.body.classList.add("no-click");
    window.setTimeout(() => {
        document.body.classList.remove("correct-screen");
        document.documentElement.setAttribute("data-theme", dataTheme);
        document.body.classList.remove("no-click");
    }, 750);
};

/**
 * Returns the screen for getting the answer correct. This screen shows a button to the next level or go back to levels. If there is no more levels, add an extra button to go back that level's subject menu.
 * 
 * @param   {string} levelType      The name of the next level to add.
 * @param   {number} levelNum       The number of the next level to add.
 * 
 * @return  {Object}                The correct screen element.
 * 
 * @example
 *      let correctScreen = addCorrectScreen();
 *      document.body.appendChild(correctScreen);
 *      // -> Correct screen componenets added.
 */
function addCorrectScreen(levelType, levelNum) {
    correctScreenAnimation();

    let level = createDiv({
        setClass: "main col-12 col-l-10"
    });

    if (window[levelType].length !== levelNum) {
        // Add button to go to the next level
        let levelButton = createHTMLElement({
            name: "button",
            text: " Level " + levelNum,
            setClass: "btn btn-level",
            event: "loadLevel(\"" + levelType + "\", " + levelNum + ")"
        });
        let levelButtonIcon = createHTMLElement({
            name: "i",
            setClass: "fas fa-level-up-alt"
        });
        levelButton.prepend(levelButtonIcon);
        let tmpDiv = createDiv({
            subElement: levelButton,
            setClass: "col-12 col-m-6 btn-wrapper"
        });
        level.appendChild(tmpDiv);
    };

    // Add button to go back
    let levelName = levelType.slice(0, -6);
    let gameMenu = createHTMLElement({
        name: "button",
        text: " Back To Levels",
        setClass: "btn btn-stripe",
        event: "load" + sentenceCaseStr(levelName) + "Menu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    gameMenu.prepend(backIcon);
    let tmpDiv = createDiv({
        subElement: gameMenu,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    level.appendChild(tmpDiv);

    if (window[levelType].length === levelNum) {
        // Add button to go back to subject menu
        levelName = levelType.slice(0, -6);
        gameMenu = createHTMLElement({
            name: "button",
            text: " Back To " + window.subjects[levelType] + " Menu",
            setClass: "btn btn-stripe",
            event: findSubject(levelType)
        });
        let backIcon = createHTMLElement({
            name: "i",
            setClass: "fas fa-arrow-circle-left"
        });
        gameMenu.prepend(backIcon);
        tmpDiv = createDiv({
            subElement: gameMenu,
            setClass: "col-12 col-m-6 btn-wrapper"
        });
        level.appendChild(tmpDiv);
    };

    return level;
};

/**
 * Displays the screen for getting the answer correct.
 * 
 * @param {string} levelType    The name of the next level to laod.
 * @param {number} levelNum     The number of the next level to load.
 * 
 * @example
 *      loadCorrectScreen();
 *      // -> Correct screen loaded.
 */
function loadCorrectScreen(levelType, levelNum) {
    clearScreen();
    loadCursor();

    loadNavBars("Level " + levelNum + " Completed!");

    let level = addCorrectScreen(levelType, parseInt(levelNum) + 1);
    document.body.appendChild(level);

    addBackgroundAudio("victory.mp3");
};

/**
 * Set the animation for the correct screen for some time.
 * 
 * @example
 *      incorrectScreenAnimation();
 *      // -> The animation have take effect for some time.
 */
function incorrectScreenAnimation() {
    let dataTheme = document.documentElement.attributes["data-theme"].textContent;
    document.documentElement.setAttribute("data-theme", "transparent");
    document.body.classList.add("incorrect-screen");
    document.body.classList.add("no-click");
    window.setTimeout(() => {
        document.body.classList.remove("incorrect-screen");
        document.documentElement.setAttribute("data-theme", dataTheme);
        document.body.classList.remove("no-click");
    }, 500);
};

/**
 * Returns the screen for getting the answer incorrect. This screen shows a button to try again or go back to levels.
 * 
 * @param   {string} levelType      The name of the current level to retry.
 * @param   {number} levelNum       The number of the current level to retry.
 * 
 * @return  {Object}                The incorrect screen element.
 * 
 * @example
 *      let incorrectScreen = addIncorrectScreen();
 *      document.body.appendChild(incorrectScreen);
 *      // -> Incorrect screen componenets added.
 */
function addIncorrectScreen(levelType, levelNum) {
    incorrectScreenAnimation();

    let screen = createDiv({
        setClass: "main col-12 col-l-10 pad-b"
    });

    // Add button to go to retry level
    let tryAgain = createHTMLElement({
        name: "button",
        text: " Try Again",
        setClass: "btn btn-level",
        event: "loadLevel(\"" + levelType + "\", " + levelNum + ")"
    });
    let tryAgainIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-undo-alt"
    });
    tryAgain.prepend(tryAgainIcon);
    let tmpDiv = createDiv({
        subElement: tryAgain,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    screen.appendChild(tmpDiv);

    // Add button to go back
    let levelName = levelType.slice(0, -6);
    let gameMenu = createHTMLElement({
        name: "button",
        text: " Back To Levels",
        setClass: "btn btn-stripe",
        event: "load" + sentenceCaseStr(levelName) + "Menu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    gameMenu.prepend(backIcon);
    tmpDiv = createDiv({
        subElement: gameMenu,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    screen.appendChild(tmpDiv);

    return screen;
}

/**
 * Displays the screen for getting the answer incorrect.
 * 
 * @param {string} levelType    The name of the current level to retry.
 * @param {number} levelNum     The number of the current level to retry.
 * 
 * @example
 *      loadIncorrectScreen();
 *      // -> Incorrect screen loaded.
 */
function loadIncorrectScreen(levelType, levelNum) {
    clearScreen();
    loadCursor();

    loadNavBars("Incorrect Answer!");

    let incorrectScreen = addIncorrectScreen(levelType, levelNum);
    document.body.appendChild(incorrectScreen);

    addBackgroundAudio("gameover-effect.mp3");
    window.setTimeout(() => {
        addBackgroundAudio("gameover-music.mp3");
    }, 1000);
};

/**
 * Compares the selected choice with the level's answer. Depending on if the the answer is correct, display the appropriate screen.
 * 
 * @param {Object}  param0      The object with the answers to check.
 * @param {string}  levelType   The name of level to check.
 * @param {string}  choice      The answer chosen to compare.
 * @param {string}  levelNum    The level number to find the answer.
 * 
 * @example
 *      checkAnswer({
 *          levelType: "algebraLevels",
 *          choice: "Yes",
 *          levelNum: "0"
 *      });
 *      // -> A new screen will appear based on the choice.
 */
function checkAnswer({
    levelType,
    choice,
    levelNum
}) {
    const answer = window[levelType][levelNum].answer.toString();

    if (choice === answer) {
        loadCorrectScreen(levelType, levelNum);
    } else {
        loadIncorrectScreen(levelType, levelNum);
    };
};

/**
 * Returns a multiple choice element that displays the question with the possible answers being in multiple chioce format. Different events will occur depending on if the user answered the question correctly or not.
 * 
 * @param   {Object}    param0      The Object with the choices and variables to find the right answer.
 * @param   {string}    levelType   The name of the level used to find the correct answer.
 * @param   {Object}    choices     The array of choices available.
 * @param   {number}    levelNum    The level number used to find the correct answer.
 * 
 * @return  {Object}                The multiple choice element.
 * 
 * @example
 *      let options = createMultipleChoice({
 *          levelType: "algebraLevels",
 *          choices: ["Yes", "No", "Not Sure", "IDK"],
 *          levelNum: 0
 *      });
 *      doucment.body.appendChild(options);
 *      // -> A multiple choice game will be added.
 */
function createMultipleChoice({
    levelType,
    choices,
    levelNum
}) {
    let element = createDiv({
        setClass: "col-12 level-multiple-choice"
    });

    randomizeArray(choices).forEach(ele => {
        const eleStr = ele.toString();

        // Make each option a button
        let tmpDiv = createHTMLElement({
            name: "button",
            text: ele,
            setClass: "col-6 level-multiple-choice-item",
            event: "checkAnswer({levelType: '" + levelType + "', choice: '" + eleStr + "', levelNum: '" + levelNum + "'})"
        });

        element.appendChild(tmpDiv);
    });

    return element;
};

/**
 * Returns a specific level based on input.
 * 
 * @param   {string}    levelType   The level name to display.
 * @param   {string}    levelNum    The level number to display.
 * 
 * @return  {Object}                The specific level display.
 * 
 * @example
 *      let level1 = addLevel("algebraLevels", "1");
 *      doucment.body.appendChild(level1);
 *      // -> Level 1 Algebra game components will be added.
 */
function addLevel(levelType, levelNum) {
    let level = createDiv({
        setClass: "main col-12 col-l-10"
    });

    let levelObj = window[levelType][levelNum];

    let title = createHTMLElement({
        name: "h2",
        setClass: "col-12 level-title",
        text: levelObj.title
    })

    let description = createHTMLElement({
        name: "p",
        setClass: "col-12 level-description",
        text: levelObj.description
    });

    let image = createHTMLElement({
        name: "img",
        setClass: "col-12 level-image",
        source: levelObj.image,
        altText: levelObj.altText
    });

    if (image.src !== "") {
        let extension = image.src.slice(-3);

        if (extension === "jpg") {
            image.setAttribute("class", "col-12 level-image-jpg");
        };
    };

    let question = createHTMLElement({
        name: "p",
        setClass: "col-12 level-question",
        text: "Question: " + levelObj.question
    });

    // Add Multiple Choice
    let options = createMultipleChoice({
        levelType: levelType,
        choices: levelObj.options,
        levelNum: levelNum
    });

    let gameLevel = createDivLarge(title, description, image, question, options);

    if (image.src === "") {
        gameLevel.removeChild(image);
    };

    gameLevel = addHTMLAtribute({
        element: gameLevel,
        setClass: "col-12 level-parent level-" + levelNum
    });
    level.appendChild(gameLevel);

    let levelName = levelType.slice(0, -6);
    let gameMenu = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "load" + sentenceCaseStr(levelName) + "Menu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    gameMenu.prepend(backIcon);
    let tmpDiv = createDiv({
        subElement: gameMenu,
        setClass: "col-12 level-back btn-wrapper"
    });
    level.appendChild(tmpDiv);

    return level;
};

/**
 * Display the specific level screen.
 * 
 * @param   {string}   levelType    The level name to display.
 * @param   {string}   levelNum     The level number to display.
 * 
 * @example
 *      loadLevel("algebraLevels", "0");
 *      // -> Algebra level 0 will be loaded.
 */
function loadLevel(levelType, levelNum) {
    clearScreen();
    loadCursor();

    loadNavBars("Level " + levelNum);

    let level = addLevel(levelType, levelNum);
    document.body.appendChild(level);
};