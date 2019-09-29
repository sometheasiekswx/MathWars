"use strict";

function addCSConcepts() {
    let csConcepts = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    let workInProgress = addWorkInProgress();
    csConcepts.appendChild(workInProgress);

    // Go back
    let settings = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadCSMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    settings.prepend(backIcon);
    let tmpDiv = createHTMLElement({
        name: "div",
        subElement: settings,
        setClass: "col-12 btn-wrapper"
    });
    csConcepts.appendChild(tmpDiv);

    return csConcepts;
};

function loadCSConcepts() {
    resetFlashmathLevelScore();
    clearScreen();
    loadCursor();

    loadNavBars("CS Concepts");

    let csConcepts = addCSConcepts();
    document.body.appendChild(csConcepts);

    setBackgroundAudio("flashmath.mp3");
};