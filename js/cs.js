"use strict";

/**
 * Creates and returns the Computer Science menu components.
 * 
 * @return  The Computer Science menu components.
 * 
 * @example
 *      let menu = addCSMenu();
 *      document.body.appendChild(menu);
 *      // -> About Computer Science menu will be added.
 */
function addCSMenu() {
    let menu = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    // CS Concepts
    let csConcepts = createHTMLElement({
        name: "button",
        text: " CS Concepts",
        setClass: "btn btn-stripe",
        event: "loadCSConcepts()"
    });
    let csConceptsIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-brain"
    });
    csConcepts.prepend(csConceptsIcon);
    let tmpDiv = createDiv({
        subElement: csConcepts,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    menu.appendChild(tmpDiv);

    // Back
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
}

/**
 * Display the Computer Science menu.
 * 
 * @example
 *      loadCSMenu();
 *      // -> Computer Science menu will be loaded.
 */
function loadCSMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Computer Science");

    let menu = addCSMenu();
    document.body.appendChild(menu);
};