"use strict";

/**
 * Creates and returns the Engineering menu components.
 * 
 * @return  The Engineering menu components.
 * 
 * @example
 *      let menu = addEngineeringMenu();
 *      document.body.appendChild(menu);
 *      // -> About engineering menu will be added.
 */
function addEngineeringMenu() {
    let menu = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    let workInProgress = addWorkInProgress();
    menu.appendChild(workInProgress);

    // Go back
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
    let tmpDiv = createDiv({
        subElement: dashboard,
        setClass: "col-12 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    return menu;
}

/**
 * Display the Engineering menu.
 * 
 * @example
 *      loadEngineeringMenu();
 *      // -> Engineering menu will be loaded.
 */
function loadEngineeringMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Engineering");

    let menu = addEngineeringMenu();
    document.body.appendChild(menu);
};