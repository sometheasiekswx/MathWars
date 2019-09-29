"use strict";

/**
 * Add the exit app screen with a 'yes' that exits the window and 'no' option to go back to the dashbaord.
 * 
 * @example     
 *      let exit = addExit();
 *      document.body.appendChild(exit);
 *      // -> Exit components added.
 */
function addExit() {
    let exit = createDiv({
        setClass: "main col-12 exit-screen"
    });

    let prompt = createHTMLElement({
        name: "h2",
        text: "Are you sure you want to exit?",
        setClass: "exit-text"
    })
    let tmpDiv = createDiv({
        subElement: prompt,
        setClass: "col-12 exit-wrapper"
    });
    exit.appendChild(tmpDiv);

    // Add 'yes' button                       
    let exitButton = createHTMLElement({
        name: "button",
        text: " Yes",
        setClass: "btn btn-stripe exit-yes",
        event: "window.close()"
    });
    let exitIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-angry"
    });
    exitButton.prepend(exitIcon);
    tmpDiv = createDiv({
        subElement: exitButton,
        setClass: "col-6 btn-wrapper"
    });
    exit.appendChild(tmpDiv);

    // Add 'no' button
    let backButton = createHTMLElement({
        name: "button",
        text: " No",
        setClass: "btn btn-stripe exit-no",
        event: "loadDashboard()"
    });
    let noIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-smile-beam"
    });
    backButton.prepend(noIcon);
    tmpDiv = createDiv({
        subElement: backButton,
        setClass: "col-6 btn-wrapper"
    });
    exit.appendChild(tmpDiv);

    return exit;
};

/**
 * Display the exit app screen with a 'yes' and 'no' option.
 * 
 * @example 
 *      loadExit();
 *      // -> Exit screen loaded. 
 */
function loadExit() {
    clearScreen();
    loadCursor();

    let exit = addExit();
    document.body.appendChild(exit);
};

/**
 * Creates and returns the dashboard menu containing the Mathematics, Computer Science, and Engineering, Settings, and Exit button.
 * 
 * @return  The Dashboard menu.
 * 
 * @example
 *      let dashbaord = addDashboard();
 *      document.body.appendChild(dashbaord);
 *      // -> Dashboard components added.
 */
function addDashboard() {
    let dashboard = createDiv({
        setClass: "main col-12 col-l-10"
    });

    // Add Mathematics button
    let mathematics = createHTMLElement({
        name: "button",
        text: " Mathematics",
        setClass: "btn btn-stripe",
        event: "loadMathematicsMenu()"
    });
    let mathematicsIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-calculator"
    });
    mathematics.prepend(mathematicsIcon);
    let tmpDiv = createDiv({
        subElement: mathematics,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    dashboard.appendChild(tmpDiv);

    // Add Computer Science button
    let cs = createHTMLElement({
        name: "button",
        text: " Computer Science",
        setClass: "btn btn-stripe",
        event: "loadCSMenu()"
    });
    let csIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-laptop-code"
    });
    cs.prepend(csIcon);
    tmpDiv = createDiv({
        subElement: cs,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    dashboard.appendChild(tmpDiv);

    // Add Engineering button
    let engineering = createHTMLElement({
        name: "button",
        text: " Engineering",
        setClass: "btn btn-stripe",
        event: "loadEngineeringMenu()"
    });
    let engineeringIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-hard-hat"
    });
    engineering.prepend(engineeringIcon);
    tmpDiv = createDiv({
        subElement: engineering,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    dashboard.appendChild(tmpDiv);

    // Add settings button
    let settings = createHTMLElement({
        name: "button",
        text: " Settings",
        setClass: "btn btn-stripe",
        event: "loadSettingsMenu()"
    });
    let settingsIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-cog"
    });
    settings.prepend(settingsIcon);
    tmpDiv = createDiv({
        subElement: settings,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    dashboard.appendChild(tmpDiv);

    // Add exit button
    let exit = createHTMLElement({
        name: "button",
        text: " Exit",
        setClass: "btn btn-stripe",
        event: "loadExit()"
    });
    let exitIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-sign-out-alt"
    });
    exit.prepend(exitIcon);
    tmpDiv = createDiv({
        subElement: exit,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    dashboard.appendChild(tmpDiv);

    return dashboard;
};

/**
 * Display the dashboard menu.
 * 
 * @example
 *      loadDashboard();
 *      // -> Dashboard screen loaded.
 */
function loadDashboard() {
    clearScreen();
    loadCursor();

    loadNavBars("MathWars");

    let dashboard = addDashboard();
    document.body.appendChild(dashboard);

    setBackgroundAudio("ambient-slowmotion.mp3");
};

/**
 * Creates and returns the starting app screen that requies a click to continue.
 * 
 * @return  Starting app screen.
 * 
 * @example
 *      let app = addApp();
 *      document.body.appendChild(app);
 *      // -> Starting app screen components added.
 */
function addApp() {
    let app = createDiv({
        setClass: "app"
    });

    // Dashboard
    let click = createHTMLElement({
        name: "button",
        text: " Click To Continue",
        setClass: "app-button",
        event: "loadDashboard()"
    });
    let subText = createHTMLElement({
        name: "p",
        text: "Enable Audio For Best Experience",
        setClass: "app-sub-text"
    });
    click.appendChild(subText);
    let noIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-mouse fa-2x app-icon"
    });
    click.prepend(noIcon);
    let tmpDiv = createDiv({
        subElement: click,
        setClass: "app-div"
    });
    app.appendChild(tmpDiv);

    return app;
};

/**
 * Display the starting app screen.
 * 
 * @example
 *      loadApp();
 *      // -> Starting app screen loaded.
 */
function loadApp() {
    clearScreen();
    loadCursor();

    let app = addApp();
    document.body.appendChild(app);
};

// Load the dashboard menu when the window loads
window.onload = loadApp;