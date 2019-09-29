"use strict";

/**
 * Returns the about screen components.
 * 
 * @return  The about screen components.
 * 
 * @example
 *      let about = addAbout();
 *      document.body.appendChild(about);
 *      // -> About screen components will be added.
 */
function addAbout() {
    let about = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    let workInProgress = addWorkInProgress();
    about.appendChild(workInProgress);

    // Go back
    let settings = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadSettingsMenu()"
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
    about.appendChild(tmpDiv);

    return about;
}

/**
 * Display about screen.
 * 
 * @example
 *      loadAbout();
 *      // -> About screen loaded.
 */
function loadAbout() {
    clearScreen();
    loadCursor();

    loadNavBars("About");

    let about = addAbout();
    document.body.appendChild(about);
};

/**
 * Returns the support screen components.
 * 
 * @return  The support screen components.
 * 
 * @example
 *      let support = addSupport();
 *      document.body.appendChild(support);
 *      // -> Support screen components will be added.
 */
function addSupport() {
    let support = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10"
    });

    let workInProgress = addWorkInProgress();
    support.appendChild(workInProgress);

    // Go back
    let settings = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadSettingsMenu()"
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
    support.appendChild(tmpDiv);

    return support;
}

/**
 * Display support screen.
 * 
 * @example
 *      loadSupport();
 *      // -> Support screen loaded.
 */
function loadSupport() {
    clearScreen();
    loadCursor();

    loadNavBars("Support");

    let support = addSupport();
    document.body.appendChild(support);
};

/**
 * Returns the credits screen components.
 * 
 * @return  The credit screen components.
 * 
 * @example
 *      let credits = addCredits();
 *      document.body.appendChild(credits);
 *      // -> Credits screen components will be added.
 */
function addCredits() {
    let credits = createHTMLElement({
        name: "div",
        setClass: "main col-12 col-l-10",
    });

    // References
    for (let i = 0; i < window.licenses.length; i++) {
        // Arthor
        let reference = createHTMLElement({
            name: "section",
            setClass: "col-12 credits-reference",
        });
        let arthor = createHTMLElement({
            name: "h2",
            text: window.licenses[i][0],
        });
        let link = createHTMLElement({
            name: "a",
            subElement: arthor,
            target: window.licenses[i][1],
            targetOpen: "_blank",
        });
        reference.appendChild(link);
        credits.appendChild(reference);

        // Athour's Work
        let subElement = window.licenses[i][2];
        for (let j = 0; j < subElement.length; j++) {
            let file = createHTMLElement({
                name: "p",
                text: subElement[j]["name"],
            });
            let fileLink = createHTMLElement({
                name: "a",
                subElement: file,
                target: subElement[j]["link"],
                targetOpen: "_blank",
            });
            reference.appendChild(fileLink);
        };
    };

    // Go back
    let settings = createHTMLElement({
        name: "button",
        text: " Go Back",
        setClass: "btn btn-stripe",
        event: "loadSettingsMenu()"
    });
    let backIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-arrow-circle-left"
    });
    settings.prepend(backIcon);
    let tmpDiv = createHTMLElement({
        name: "div",
        subElement: settings,
        setClass: "back-smaller col-12 btn-wrapper"
    });
    credits.appendChild(tmpDiv);

    return credits;
}

/**
 * Display credits screen.
 * 
 * @example
 *      loadCredits();
 *      // -> Credits screen loaded.
 */
function loadCredits() {
    clearScreen();
    loadCursor();

    loadNavBars("Credits");

    let credits = addCredits();
    document.body.appendChild(credits);
};

/**
 * Return the settings button containing where the color mode can be changed.
 * 
 * @return The settings element.
 * 
 * @example
 *      let settings = addSettingsMenu();
 *      document.body.appendChild(settings);
 *      // -> The settings componenets will be added.
 */
function addSettingsMenu() {
    let settings = createDiv({
        setClass: "main col-12 col-l-10"
    });

    // About 
    let about = createHTMLElement({
        name: "button",
        text: " About",
        setClass: "btn btn-stripe",
        event: "loadAbout()"
    });
    let aboutIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-info-circle"
    });
    about.prepend(aboutIcon);
    let tmpDiv = createDiv({
        subElement: about,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    settings.appendChild(tmpDiv);

    // Color mode
    let colorMode = createHTMLElement({
        name: "button",
        text: " Change Color Mode",
        setClass: "btn btn-stripe",
        event: "changeColorMode()"
    });
    let colorModeIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-adjust"
    });
    colorMode.prepend(colorModeIcon);
    tmpDiv = createDiv({
        subElement: colorMode,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    settings.appendChild(tmpDiv);

    // Support
    let support = createHTMLElement({
        name: "button",
        text: " Support",
        setClass: "btn btn-stripe",
        event: "loadSupport()"
    });
    let supportIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-question-circle"
    });
    support.prepend(supportIcon);
    tmpDiv = createDiv({
        subElement: support,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    settings.appendChild(tmpDiv);

    // Credits
    let credits = createHTMLElement({
        name: "button",
        text: " Credits",
        setClass: "btn btn-stripe",
        event: "loadCredits()"
    });
    let creditsIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-file-alt"
    });
    credits.prepend(creditsIcon);
    tmpDiv = createDiv({
        subElement: credits,
        setClass: "col-12 col-m-6 btn-wrapper"
    });
    settings.appendChild(tmpDiv);

    // Go back
    let mainMenu = createHTMLElement({
        name: "button",
        text: " Go To Main Menu",
        setClass: "btn btn-stripe",
        event: "loadDashboard()"
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
    settings.appendChild(tmpDiv);

    return settings;
};

/**
 * Display the settings screen.
 * 
 * @example
 *      loadSettingsMenu();
 *      // -> The settings menu will be loaded.
 */
function loadSettingsMenu() {
    clearScreen();
    loadCursor();

    loadNavBars("Settings");

    let settings = addSettingsMenu();
    document.body.appendChild(settings);
};