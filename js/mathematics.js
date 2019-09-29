"use strict";

/**
 * Creates and returns the Calculus Levels
 * 
 * @return  The Calculus levels.
 * 
 * @example
 *      let calculus = addCalculusMenu();
 *      document.body.appendChild(calculus);
 *      // -> The Calculus menu components will be added.
 */
function addCalculusMenu() {
    let calculus = createDiv({
        setClass: "main col-12 col-l-10"
    });

    let tmpDiv = null;

    // Add the levels available
    for (let i = 0; i < window.calculusLevels.length; i++) {
        let level = createHTMLElement({
            name: "button",
            text: " Level " + i,
            setClass: "btn btn-level",
            event: "loadLevel(\"calculusLevels\", " + i + ")"
        });
        let levelIcon = createHTMLElement({
            name: "i",
            setClass: "fab fa-connectdevelop"
        });
        level.prepend(levelIcon);
        tmpDiv = createDiv({
            subElement: level,
            setClass: "col-12 col-m-4 btn-wrapper"
        });
        calculus.appendChild(tmpDiv);
    };

    let mainMenu = createHTMLElement({
        name: "button",
        text: " Go To Mathematics Menu",
        setClass: "btn btn-stripe",
        event: "loadMathematicsMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    mainMenu.prepend(backIcon);
    tmpDiv = createDiv({
        subElement: mainMenu,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    calculus.appendChild(tmpDiv);

    return calculus;
};

/**
 * Display the Calculus Levels.
 * 
 * @example
 *      loadCalculusMenu();
 *      // -> The Calculus menu will be loaded.
 */
function loadCalculusMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Calculus");

    let calculus = addCalculusMenu();
    document.body.appendChild(calculus);
};

/**
 * Creates and returns the Trigonometry Levels
 * 
 * @return  The Trigonometry levels.
 * 
 * @example
 *      let trigonometry = addTrigonometryMenu();
 *      document.body.appendChild(trigonometry);
 *      // -> The Trigonometry menu components will be added.
 */
function addTrigonometryMenu() {
    let trigonometry = createDiv({
        setClass: "main col-12 col-l-10"
    });

    let tmpDiv = null;

    // Add the levels available
    for (let i = 0; i < window.trigonometryLevels.length; i++) {
        let level = createHTMLElement({
            name: "button",
            text: " Level " + i,
            setClass: "btn btn-level",
            event: "loadLevel(\"trigonometryLevels\", " + i + ")"
        });
        let levelIcon = createHTMLElement({
            name: "i",
            setClass: "fab fa-connectdevelop"
        });
        level.prepend(levelIcon);
        tmpDiv = createDiv({
            subElement: level,
            setClass: "col-12 col-m-4 btn-wrapper"
        });
        trigonometry.appendChild(tmpDiv);
    };

    let mainMenu = createHTMLElement({
        name: "button",
        text: " Go To Mathematics Menu",
        setClass: "btn btn-stripe",
        event: "loadMathematicsMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    mainMenu.prepend(backIcon);
    tmpDiv = createDiv({
        subElement: mainMenu,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    trigonometry.appendChild(tmpDiv);

    return trigonometry;
};

/**
 * Display the Trigonometry Levels.
 * 
 * @example
 *      loadTrigonometryMenu();
 *      // -> The Trigonometry menu will be loaded.
 */
function loadTrigonometryMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Trigonometry");

    let trigonometry = addTrigonometryMenu();
    document.body.appendChild(trigonometry);
};

/**
 * Creates and returns the Algebra Levels
 * 
 * @return  The Algebra levels.
 * 
 * @example
 *      let algebra = addAlgebraMenu();
 *      document.body.appendChild(algebra);
 *      // -> The Algebra menu components will be added.
 */
function addAlgebraMenu() {
    let algebra = createDiv({
        setClass: "main col-12 col-l-10"
    });

    let tmpDiv = null;

    // Add the levels available
    for (let i = 0; i < window.algebraLevels.length; i++) {
        let level = createHTMLElement({
            name: "button",
            text: " Level " + i,
            setClass: "btn btn-level",
            event: "loadLevel(\"algebraLevels\", " + i + ")"
        });
        let levelIcon = createHTMLElement({
            name: "i",
            setClass: "fab fa-connectdevelop"
        });
        level.prepend(levelIcon);
        tmpDiv = createDiv({
            subElement: level,
            setClass: "col-12 col-m-4 btn-wrapper"
        });
        algebra.appendChild(tmpDiv);
    };

    let mainMenu = createHTMLElement({
        name: "button",
        text: " Go To Mathematics Menu",
        setClass: "btn btn-stripe",
        event: "loadMathematicsMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    mainMenu.prepend(backIcon);
    tmpDiv = createDiv({
        subElement: mainMenu,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    algebra.appendChild(tmpDiv);

    return algebra;
};

/**
 * Display the Algebra Levels.
 * 
 * @example
 *      loadAlgebraMenu();
 *      // -> The Algebra menu will be loaded.
 */
function loadAlgebraMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Algebra");

    let algebra = addAlgebraMenu();
    document.body.appendChild(algebra);
};

/**
 * Creates and returns the Mathematics menu containing Algebra, Trigonometry, and Calculus.
 * 
 * @return  The Mathematics menu.
 * 
 * @example
 *      let mathematics = addMathematicsMenu();
 *      document.body.appendChild(mathematics);
 *      // -> The Mathematics menu components will be added.
 */
function addMathematicsMenu() {
    let menu = createDiv({
        setClass: "main col-12 col-l-10"
    });

    // Add Algebra
    let algebra = createHTMLElement({
        name: "button",
        text: " Algebra",
        setClass: "btn btn-stripe",
        event: "loadAlgebraMenu()"
    });
    let algebraIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-square-root-alt"
    });
    algebra.prepend(algebraIcon);
    let tmpDiv = createDiv({
        subElement: algebra,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Add Trigonometry
    let trigonometry = createHTMLElement({
        name: "button",
        text: " Trigonometry",
        setClass: "btn btn-stripe",
        event: "loadTrigonometryMenu()"
    });
    let trigonometryIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-wave-square"
    });
    trigonometry.prepend(trigonometryIcon);
    tmpDiv = createDiv({
        subElement: trigonometry,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Add Calculus
    let calculus = createHTMLElement({
        name: "button",
        text: " Calculus",
        setClass: "btn btn-stripe",
        event: "loadCalculusMenu()"
    });
    let calculusIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-infinity"
    });
    calculus.prepend(calculusIcon);
    tmpDiv = createDiv({
        subElement: calculus,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Add Flashmath
    let flashmath = createHTMLElement({
        name: "button",
        text: " Flashmath",
        setClass: "btn btn-stripe",
        event: "loadFlashmathMenu()"
    });
    let flashmathIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-flask"
    });
    flashmath.prepend(flashmathIcon);
    tmpDiv = createDiv({
        subElement: flashmath,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Add Back
    let dashboard = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadDashboard()"
    });
    let dashboardIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    dashboard.prepend(dashboardIcon);
    tmpDiv = createDiv({
        subElement: dashboard,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    return menu;
};

/**
 * Display the Mathematics menu containing Algebra, Trigonometry, and Calculus.
 * 
 * @example
 *      loadMathematicsMenu();
 *      // -> Mathematics menu will be loaded.
 */
function loadMathematicsMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Mathematics");

    let menu = addMathematicsMenu();
    document.body.appendChild(menu);

    setBackgroundAudio("ambient-memories.mp3");
};