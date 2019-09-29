"use strict";

/**
 * Creates either a sidebar for the hamburger or a sidebar for the main screen depending on the input.
 * 
 * @param   {string} type   The type of sidebar to create.
 * 
 * @return  {Object}        The sidebar.
 * 
 * @example
 *      let sidebar = createSidebar("section");
 *      navDiv.appendChild(sidebar);  
 *      // -> The sidebar componenets will be added to the navigation bar div.
 */
function createSidebar(type) {
    let sidebar = createHTMLElement({
        name: type
    });

    // Check where the sidebar goes
    if (type === "section") {
        sidebar.setAttribute("id", "menu");
    } else if (type === "div") {
        sidebar.setAttribute("class", "sidebar col-0 col-l-2");
    };

    // Add dashboard button
    let dashboard = createHTMLElement({
        name: "button",
        text: " Dashboard",
        setClass: "btn btn-sidebar",
        event: "loadDashboard()"
    });
    let dashboardIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-chalkboard"
    });
    dashboard.prepend(dashboardIcon);
    let tmpDiv = createDiv({
        subElement: dashboard,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add Algebra button
    let algebra = createHTMLElement({
        name: "button",
        text: " Algebra",
        setClass: "btn btn-sidebar",
        event: "loadAlgebraMenu()"
    });
    let algebraIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-square-root-alt"
    });
    algebra.prepend(algebraIcon);
    tmpDiv = createDiv({
        subElement: algebra,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add Trigonometry button
    let trigonometry = createHTMLElement({
        name: "button",
        text: " Trigonometry",
        setClass: "btn btn-sidebar",
        event: "loadTrigonometryMenu()"
    });
    let trigonometryIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-wave-square"
    });
    trigonometry.prepend(trigonometryIcon);
    tmpDiv = createDiv({
        subElement: trigonometry,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add Calculus button
    let calculus = createHTMLElement({
        name: "button",
        text: " Calculus",
        setClass: "btn btn-sidebar",
        event: "loadCalculusMenu()"
    });
    let calculusIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-infinity"
    });
    calculus.prepend(calculusIcon);
    tmpDiv = createDiv({
        subElement: calculus,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add Flashmath button
    let flashmath = createHTMLElement({
        name: "button",
        text: " Flashmath",
        setClass: "btn btn-sidebar",
        event: "loadFlashmathMenu()"
    });
    let flashmathIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-flask"
    });
    flashmath.prepend(flashmathIcon);
    tmpDiv = createDiv({
        subElement: flashmath,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add color mode button
    let colorMode = createHTMLElement({
        name: "button",
        text: " Color Mode",
        setClass: "btn btn-sidebar",
        event: "changeColorMode()"
    });
    let colorModeIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-adjust"
    });
    colorMode.prepend(colorModeIcon);
    tmpDiv = createDiv({
        subElement: colorMode,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add about button
    let about = createHTMLElement({
        name: "button",
        text: " About",
        setClass: "btn btn-sidebar",
        event: "loadAbout()"
    });
    let aboutIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-info-circle"
    });
    about.prepend(aboutIcon);
    tmpDiv = createDiv({
        subElement: about,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add support button
    let support = createHTMLElement({
        name: "button",
        text: " Support",
        setClass: "btn btn-sidebar",
        event: "loadSupport()"
    });
    let supportIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-question-circle"
    });
    support.prepend(supportIcon);
    tmpDiv = createDiv({
        subElement: support,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    // Add exit button
    let exit = createHTMLElement({
        name: "button",
        text: " Leave",
        setClass: "btn btn-sidebar",
        event: "loadExit()"
    });
    let exitIcon = createHTMLElement({
        name: "i",
        setClass: "fas fa-sign-out-alt"
    });
    exit.prepend(exitIcon);
    tmpDiv = createDiv({
        subElement: exit,
        setClass: "col-12 btn-wrapper"
    });
    sidebar.appendChild(tmpDiv);

    return sidebar;
};

/**
 * Creates a hamburger button that opens a menu.
 * 
 * @return  {Object}    The hamburger.
 * 
 * @example
 *      let hamburger = createHamburger();
 *      menu.appendChild(hamburger);
 *      // -> The hamburger componenets will be added to the menu.
 */
function createHamburger() {
    let hamburger = createHTMLElement({
        name: "nav"
    });

    let navDivInput = createHTMLElement({
        name: "input"
    });
    navDivInput.type = "checkbox";
    let navDiv = createDiv({
        subElement: navDivInput,
        setID: "menu-toggle"
    });
    hamburger.appendChild(navDiv);

    for (let i = 0; i < 3; i++) {
        let navDivSpan = createHTMLElement({
            name: "span"
        });
        navDiv.appendChild(navDivSpan);
    };

    let sidebar = createSidebar("section");
    navDiv.appendChild(sidebar);

    return hamburger;
};

/**
 * Creates a toolbar with a specified text title or SVG animation title.
 * 
 * @param   {string} titleText  The title of the toolbar.
 * 
 * @return  {Object}            The toolbar.
 * 
 * @example
 *      let toolbar = createToolbar("Mathematics");
 *      document.body.appendChild(toolbar);
 *      // -> The Mathematics toolbar componenets will be added.
 */
function createToolbar(titleText) {
    let toolbar = createDiv({
        setClass: "toolbar col-12"
    });

    let hamburger = createHamburger();
    let menu = createDiv({
        subElement: hamburger,
        setClass: "menu col-2"
    });
    toolbar.appendChild(menu);

    // Display text if the title not MathWars. If it is, display an SVG animation.
    if (titleText !== "MathWars") {
        let titleH1 = createHTMLElement({
            name: "h1",
            text: titleText,
            setClass: "title"
        });
        let title = createDiv({
            subElement: titleH1,
            setClass: "titleDiv col-8"
        });
        toolbar.appendChild(title);
    } else if (titleText === "MathWars") {
        let logoTextSvg = createHTMLElement({
            name: "object",
            data: "images/logo-text.svg",
            type: "image/svg+xml",
            setClass: "title-svg"
        });
        let title = createDiv({
            subElement: logoTextSvg,
            setClass: "titleDiv col-8"
        });
        toolbar.appendChild(title);
    };

    let logoSvg = createHTMLElement({
        name: "object",
        data: "images/logo.svg",
        type: "image/svg+xml",
        setClass: "logo col-6",
    });
    let logoDiv = createHTMLElement({
        name: "div",
        subElement: logoSvg,
        setClass: "logoDiv col-1"
    });
    toolbar.appendChild(logoDiv);

    let profileImg = createHTMLElement({
        name: "img",
        source: "images/profile.jpg",
        altText: "User Profile Image",
        h: "30px",
        w: "30px",
        setClass: "profile col-6"
    });
    let profile = createDiv({
        subElement: profileImg,
        setClass: "profileDiv col-1"
    });

    toolbar.appendChild(profile);

    return toolbar;
};

/**
 * Loads the toolbar and the sidebar (Desktops).
 * 
 * @param {String} title The toolbar title.
 * 
 * @example
 *      loadNavBars();
 *      // -> Toolbar and side loaded.
 */
function loadNavBars(title) {
    let toolbar = createToolbar(title);
    document.body.appendChild(toolbar);

    let sidebar = createSidebar("div");
    document.body.appendChild(sidebar);
};

/**
 * Creates and returns the work-in-progress components.
 * 
 * @return The work-in-progress components.
 * 
 * @example
 *      let progress = addWorkInProgress();
 *      document.body.appendChild(progress);
 *      // -> work-in-progress components added.
 */
function addWorkInProgress() {
    let element = createHTMLElement({
        name: "div",
        setClass: "work-in-progress col-12"
    });

    let title = createHTMLElement({
        name: "h2",
        text: "Work In Progress...",
        setClass: "work-in-progress-title col-12"
    });
    element.appendChild(title);

    // Progress Animation

    let leaf1 = createHTMLElement({
        name: "span",
        setClass: "leaf-1"
    });
    let leaf2 = createHTMLElement({
        name: "span",
        setClass: "leaf-2"
    });
    let leaf3 = createHTMLElement({
        name: "span",
        setClass: "leaf-3"
    });
    let leaf4 = createHTMLElement({
        name: "span",
        setClass: "leaf-4"
    });

    let cube = createDivLarge(leaf1, leaf2, leaf3, leaf4);
    cube.setAttribute("class", "cube");
    element.appendChild(cube);

    let text = createHTMLElement({
        name: "h2",
        text: "This feature is not yet complete. Please let me know what you think of MathWars. If you want to support me or just say something to me (I welcome criticism), feel free to contact me via the following links :)",
        setClass: "work-in-progress-text col-12"
    });
    element.appendChild(text);

    // Social media

    let githubI = createHTMLElement({
        name: "i",
        setClass: "fab fa-github fa-4x icon-3d",
    })
    let githubA = createHTMLElement({
        name: "a",
        subElement: githubI,
        target: "https://github.com/sometheasiekswx",
        targetOpen: "_blank"
    });

    let social = createHTMLElement({
        name: "div",
        subElement: githubA,
        setClass: "social-media col-12"
    });

    let twitterI = createHTMLElement({
        name: "i",
        setClass: "fab fa-twitter fa-4x icon-3d",
    })
    let twitterA = createHTMLElement({
        name: "a",
        subElement: twitterI,
        target: "https://twitter.com/sometheasiekswx",
        targetOpen: "_blank"
    });
    social.appendChild(twitterA);

    let facebookI = createHTMLElement({
        name: "i",
        setClass: "fab fa-facebook fa-4x icon-3d",
    })
    let facebookA = createHTMLElement({
        name: "a",
        subElement: facebookI,
        target: "https://www.facebook.com/sometheasiekswx",
        targetOpen: "_blank"
    });
    social.appendChild(facebookA);

    let instagramI = createHTMLElement({
        name: "i",
        setClass: "fab fa-instagram fa-4x icon-3d",
    })
    let instagramA = createHTMLElement({
        name: "a",
        subElement: instagramI,
        target: "https://www.instagram.com/sometheasiekswx2/",
        targetOpen: "_blank"
    });
    social.appendChild(instagramA);
    element.appendChild(social);

    return element;
};