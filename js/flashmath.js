"use strict";

/**
 * Sets the Flashmath level to 1 and score to 0.
 * 
 * @example
 *      resetFlashmathLevelScore()
 *      // -> Level and score resets.
 */
function resetFlashmathLevelScore() {
    // Initial conditions
    window.flashmathLevel = 1;
    window.flashmathScore = 0;
}

/**
 * Adds the Flashmath scoreboard components.
 * 
 * @return      The Flashmath scoreboard components.
 * 
 * @example 
 *      let scoreboard = addFlashmathScoreboard();
 *      document.body.appendChild(scoreboard);
 *      // -> Scoreboard added.
 */
function addFlashmathScoreboard() {
    let scoreboard = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    let progress = addWorkInProgress();
    scoreboard.appendChild(progress);

    // Back
    let back = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadFlashmathMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    back.prepend(backIcon);
    let tmpDiv = createHTMLElement({
        name: "div",
        subElement: back,
        setClass: "col-12 btn-wrapper"
    });
    scoreboard.appendChild(tmpDiv);

    return scoreboard;
};

/**
 * Display the Flashmath scoreboard.
 * 
 * @example
 *      loadFlashmathScoreboard()
 *      // -> Flashmath scoreboard loaded.
 */
function loadFlashmathScoreboard() {
    clearScreen();
    loadCursor();

    loadNavBars("Flashmath Scoreboard");

    let scoreboard = addFlashmathScoreboard();
    document.body.appendChild(scoreboard);
}

/**
 * Adds the Flashmath score submit screen components.
 * 
 * @return  The FLashmath score submit screen components.
 * 
 * @example 
 *      let submit = addFlashmathScoreSubmit();   
 *      document.body.appendChild(submit);
 *      // -> Score submit screen added.
 */
function addFlashmathScoreSubmit() {
    let submit = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    // Title
    let title = createHTMLElement({
        name: "h2",
        setClass: "col-12 fm-level-title",
        text: "Final Score: " + window.flashmathScore,
    });
    let tmpDiv = createHTMLElement({
        name: "div",
        subElement: title,
        setClass: "col-12 submit"
    })
    submit.appendChild(tmpDiv);

    // Flashmath
    let flashmath = createHTMLElement({
        name: "button",
        text: " Try Again",
        setClass: "btn btn-level",
        event: "loadFlashmath()"
    });
    let flashmathIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-undo"
    });
    flashmath.prepend(flashmathIcon);
    tmpDiv = createDiv({
        subElement: flashmath,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    submit.appendChild(tmpDiv);

    // Flashmath Scoreboard
    let flashmathScoreboard = createHTMLElement({
        name: "button",
        text: " Scoreboard",
        setClass: "btn btn-stripe",
        event: "loadFlashmathScoreboard()"
    });
    let flashmathScoreboardIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-chess-board"
    });
    flashmathScoreboard.prepend(flashmathScoreboardIcon);
    tmpDiv = createDiv({
        subElement: flashmathScoreboard,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    submit.appendChild(tmpDiv);

    // Back
    let back = createHTMLElement({
        name: "button",
        text: " Flashmath Menu",
        setClass: "btn btn-stripe",
        event: "loadMathematicsMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    back.prepend(backIcon);
    tmpDiv = createDiv({
        subElement: back,
        setClass: "col-12 col-m-6 center btn-wrapper"
    });
    submit.appendChild(tmpDiv);

    return submit;
};

/**
 * Loads the Flashmath Score Submit screen.
 * 
 * @example
 *      loadFlashmathScoreSubmit();
 *      // -> Flashmath Score Submit screen loaded.
 */
function loadFlashmathScoreSubmit() {
    clearScreen();
    loadCursor();

    loadNavBars("Flashmath");

    let submit = addFlashmathScoreSubmit();
    document.body.appendChild(submit);

    resetFlashmathLevelScore();
};

/**
 * Check the real answer and the answer given and increase/decrease the score and level accordingly.
 * 
 * @param {Number}  answer   The correct number.
 * @param {Number}  choice   The number chose.
 * 
 * @example
 *      let checkButton = createHTMLElement({
 *          name: "button",
 *          event: "checkFlashmathAnswer(2, 3)"
 *      });
 *      document.body.appendChild(checkButton);
 *      // -> Checking button with the incorrect choice added.
 */
function checkFlashmathAnswer(answer, choice) {
    let luck = genRandPositiveInt(0, 5);

    if (answer === choice) {
        window.flashmathLevel += 1;
        window.flashmathScore += 123 + luck;
    } else if (answer !== choice) {
        window.flashmathLevel -= 1;
        window.flashmathScore -= 123 - luck;
    };

    loadFlashmath();
};

/**
 * Returns the multiple choice buttons.
 * 
 * @param {Number} answer   The correct number.
 * 
 * @return                  The multiple choice buttons.
 * 
 * @example
 *      let options = createFlashmathMultipleChoice(Math.round(answer));
 *      document.body.appendChild(options);
 *      // -> Multiple choice added.
 */
function createFlashmathMultipleChoice(answer) {
    let element = createDiv({
        setClass: "col-12 level-multiple-choice"
    });

    let choices = [answer];

    console.log("[to be removed on release]");
    console.log("Answer: " + answer);

    // Random choices 
    let luck = genRandPositiveInt(0, 3);
    switch (luck) {
        case 0:
            // [a, r, r, r]
            for (let i = 1; i < 4; i++) {
                choices.push(answer + i);
            };
            break;

        case 1:
            // [r, a, r, r]
            choices.push(answer - 1);
            choices.push(answer + 1);
            choices.push(answer + 2);
            break;

        case 2:
            // [r, r, a, r]
            choices.push(answer - 1);
            choices.push(answer - 2);
            choices.push(answer + 1);
            break;

        case 3:
            // [r, r, r, a]
            for (let i = 1; i < 4; i++) {
                choices.push(answer - i);
            };
            break;

        default:
            break;
    };

    randomizeArray(choices).forEach(choice => {
        let tmpDiv = createHTMLElement({
            name: "button",
            text: choice,
            setClass: "col-6 level-multiple-choice-item",
            event: "checkFlashmathAnswer(" + answer + ", " + choice + ")",
        });

        element.appendChild(tmpDiv);
    });

    return element;
};

/**
 * Add the Flashmath components.
 * 
 * @return  The Flashmath components.
 * 
 * @example
 *      let flashmath = addFlashmath();
 *      document.body.appendChild(flashmath);
 *      // -> The Flashmath components added.
 */
function addFlashmath() {
    let flashmath = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    // Prevent negatives
    if (window.flashmathLevel < 1) {
        window.flashmathLevel = 1;
    };
    if (window.flashmathScore < 0) {
        window.flashmathScore = 0;
    };

    // Timer 
    let timer = createHTMLElement({
        name: "div",
        setClass: "col-12 fm-level-timer"
    });
    window.label = createHTMLElement({
        name: "label",
        setClass: "col-12 fm-level-timer-label"
    });
    timer.appendChild(label);
    window.progress = createHTMLElement({
        name: "progress",
        setClass: "col-12 fm-level-timer-progress"
    });
    progress.setAttribute("value", "1");
    progress.setAttribute("max", "11");
    timer.appendChild(progress);

    // Title
    let title = createHTMLElement({
        name: "h2",
        setClass: "col-12 fm-level-title",
        text: "Level " + window.flashmathLevel,
    })

    // Description
    let description = createHTMLElement({
        name: "p",
        setClass: "col-12 fm-level-description",
        text: "Answer the questions as fast as possible!"
    });

    // Score
    let score = createHTMLElement({
        name: "p",
        setClass: "col-12 fm-level-score",
        text: "Current Score: " + window.flashmathScore
    });

    // Question & Answer

    let questionText = "";
    let answer = 0;

    if (window.flashmathLevel < 5) {
        let question1 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 15);
        let question2 = genRandPositiveInt(window.flashmathLevel + 5, window.flashmathLevel + 20);
        let question3 = genRandPositiveInt(window.flashmathLevel + 10, window.flashmathLevel + 25);
        questionText = createHTMLElement({
            name: "p",
            setClass: "col-12 fm-level-question",
            text: question1 + " + " + question2 + " - " + question3
        });

        answer = question1 + question2 - question3;
    } else if (window.flashmathLevel < 10) {
        let question1 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 15);
        let question2 = genRandPositiveInt(window.flashmathLevel + 5, window.flashmathLevel + 5);
        let question3 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 15);
        let question4 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 5);
        questionText = createHTMLElement({
            name: "p",
            setClass: "col-12 fm-level-question",
            text: question1 + " + " + question2 + " - (" + question3 + " * " + question4 + ")"
        });

        answer = question1 + question2 - (question3 * question4);
    } else {
        let question1 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 1);
        let question2 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 2);
        let question3 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 1);
        let question4 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 2);
        let question5 = genRandPositiveInt(window.flashmathLevel, window.flashmathLevel + 1);
        questionText = createHTMLElement({
            name: "p",
            setClass: "col-12 fm-level-question",
            text: "(" + question1 + " * " + question2 + ") - " + question3 + " + (" + question4 + " / " + question5 + ")"
        });

        answer = (question1 * question2) - question3 + (question4 / question5);
    };

    let options = createFlashmathMultipleChoice(Math.round(answer));

    let gameLevel = createDivLarge(timer, title, description, score, questionText, options);
    gameLevel = addHTMLAtribute({
        element: gameLevel,
        setClass: "col-12 fm-level-parent"
    });
    flashmath.appendChild(gameLevel);

    // Back
    let back = createHTMLElement({
        name: "button",
        text: " Back To Menu",
        setClass: "btn btn-stripe",
        event: "loadFlashmathMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    back.prepend(backIcon);
    let tmpDiv = createDiv({
        subElement: back,
        setClass: "col-12 level-back btn-wrapper"
    });
    flashmath.appendChild(tmpDiv);

    // Timer logic
    let timerLogic = setInterval(() => {
        progress.value += 0.005;
        label.textContent = Math.round(11 - progress.value) + " seconds left...";
        if (progress.value >= 11) {
            label.textContent = "Timeout!";
            loadFlashmathScoreSubmit();
            return clearInterval(timerLogic);
        }
    }, 1);

    return flashmath;
};

/**
 * Display FLashmath game.
 * 
 * @example
 *      loadFlashmath();
 *      // -> FLashmath added.
 */
function loadFlashmath() {
    clearScreen();
    loadCursor();

    loadNavBars("Flashmath");

    let flashmath = addFlashmath();
    document.body.appendChild(flashmath);
};

/**
 * Adds the Flashmath menu components.
 * 
 * @return      The Flashmath menu components.
 * 
 * @example 
 *      let flashmathMenu = addFlashmathMenu();
 *      document.body.appendChild(flashmathMenu);
 *      // -> Flashmenu added.
 */
function addFlashmathMenu() {
    let menu = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    // Flashmath
    let flashmath = createHTMLElement({
        name: "button",
        text: " Start",
        setClass: "btn btn-level",
        event: "loadFlashmath()"
    });
    let flashmathIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-gamepad"
    });
    flashmath.prepend(flashmathIcon);
    let tmpDiv = createDiv({
        subElement: flashmath,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Flashmath Scoreboard
    let flashmathScoreboard = createHTMLElement({
        name: "button",
        text: " Scoreboard",
        setClass: "btn btn-stripe",
        event: "loadFlashmathScoreboard()"
    });
    let flashmathScoreboardIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-chess-board"
    });
    flashmathScoreboard.prepend(flashmathScoreboardIcon);
    tmpDiv = createDiv({
        subElement: flashmathScoreboard,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Back
    let back = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadMathematicsMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    back.prepend(backIcon);
    tmpDiv = createDiv({
        subElement: back,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    return menu;
};

/**
 * Display the Flashmath menu.
 * 
 * @example
 *      loadFlashmathMenu();
 *      // -> Flashmath menu loaded.
 */
function loadFlashmathMenu() {
    resetFlashmathLevelScore();
    clearScreen();
    loadCursor();

    loadNavBars("Flashmath");

    let flashmathMenu = addFlashmathMenu();
    document.body.appendChild(flashmathMenu);

    setBackgroundAudio("flashmath.mp3");
};