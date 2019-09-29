"use strict";

/**
 * Takes in an element and its attributes as an object and assigns each attribute to that element. Every attribute is checked before being added.
 * 
 * @param {Object}  param0      The object containing properties to be added to the element.
 * @param {Object}  element     The main element neeing modification.
 * @param {any}     subElement  The sub element to be appended to the main element.
 * @param {string}  text        The text to be added in the text content.
 * @param {string}  target      The target that href links to.
 * @param {string}  targetOpen  The target action when opened to set.
 * @param {string}  setClass    The class to set.
 * @param {string}  setID       The ID to set.
 * @param {string}  event       The name of the on click event to add.
 * @param {string}  source      The source of where the element is (for images).
 * @param {string}  altText     The alternative text to set (for special needs).
 * @param {string}  h           The height to set.
 * @param {string}  w           The width to set.
 * @param {string}  data        The object data to set.
 * @param {string}  type        The object type to set.
 * 
 * @return {Object}             The element with attributes added.
 * 
 * @example
 *      let element = document.createElement("p");
 *      element = addHTMLAtribute({
 *          element: element,
 *          text: "Hello World?",
 *          setClass: "important"
 *      });
 *      document.body.appendChild(element);
 *      // -> Adds the "p" tag containing the text "Hello World?" with the class "important".
 */
function addHTMLAtribute({
    element,
    subElement,
    text,
    target,
    targetOpen,
    setClass,
    setID,
    event,
    source,
    altText,
    h,
    w,
    data,
    type
}) {
    // Div Attributes
    if (subElement instanceof HTMLElement) {
        element.appendChild(subElement);
    } else if (typeof (subElement) !== 'undefined') {
        element.textContent = subElement;
    } else if (typeof (subElement) === 'undefined') {
        // Do Nothing
    } else {
        console.log("ERROR create" + sentenceCaseStr(name) + "() Failed with subElement: ", subElement);
    };

    // General Attributes
    if (typeof (text) !== 'undefined') {
        element.textContent = text;
    }
    if (typeof (setClass) !== 'undefined') {
        element.setAttribute("class", setClass);
    }
    if (typeof (setID) !== 'undefined') {
        element.setAttribute("id", setID);
    };
    if (typeof (event) !== 'undefined') {
        element.setAttribute("onclick", event);
    };

    //Anchor Attributes
    if (typeof (target) !== 'undefined') {
        element.setAttribute("href", target);
    };
    if (typeof (targetOpen) !== 'undefined') {
        element.setAttribute("target", targetOpen);
    };

    // Image Attributes
    if (typeof (source) !== 'undefined') {
        element.setAttribute("src", source);
    };
    if (typeof (altText) !== 'undefined') {
        element.setAttribute("alt", altText);
    };
    if (typeof (h) !== 'undefined') {
        element.setAttribute("width", w);
    };
    if (typeof (w) !== 'undefined') {
        element.setAttribute("height", h);
    };

    // Object Attributes
    if (typeof (data) !== 'undefined') {
        element.setAttribute("data", data);
    };
    if (typeof (type) !== 'undefined') {
        element.setAttribute("type", type);
    };

    return element;
};

/**
 * Creates a HTML elememt with the specified attibutes.
 * 
 * @param {Object}  param0      The object containing properties to be added to the element.
 * @param {Object}  name        The name of the element to create.
 * @param {any}     subElement  The sub element to be appended to the main element.
 * @param {string}  text        The text to be added in the text content.
 * @param {string}  target      The target that href links to.
 * @param {string}  targetOpen  The target action when opened to set.
 * @param {string}  setClass    The class to set.
 * @param {string}  setID       The ID to set.
 * @param {string}  event       The name of the on click event to add.
 * @param {string}  source      The source of where the element is (for images).
 * @param {string}  altText     The alternative text to set (for special needs).
 * @param {string}  h           The height to set.
 * @param {string}  w           The width to set.
 * @param {string}  data        The object data to set.
 * @param {string}  type        The object type to set.
 * 
 * @return {Object}             The element with attributes added.
 * 
 * @example
 *      let divTable = createHTMLElement({
 *          name: "div",
 *          setClass: "table"
 *      });
 *      document.body.appendChild(divTable);
 *      // -> Adds a "div" tag with the "table" class.
 */
function createHTMLElement({
    name,
    subElement = null,
    text,
    target,
    targetOpen,
    setClass,
    setID,
    event,
    source,
    altText,
    h,
    w,
    data,
    type
}) {
    let element = document.createElement(name);

    element = addHTMLAtribute({
        element: element,
        subElement: subElement,
        text: text,
        target: target,
        targetOpen: targetOpen,
        setClass: setClass,
        setID: setID,
        event: event,
        source: source,
        altText: altText,
        h: h,
        w: w,
        data: data,
        type: type
    });

    return element;
};

/**
 * Creates a Div element with a large amount of sub elements.
 * 
 * @param  {...any} subElements The elements to be appended to the Div.
 * 
 * @return {Object}             The Div element with all the sub elements.
 * 
 * @example
 *      let person = createDivLarge(name, age, job);
 *      // -> Adds a "div" tag with the elements "name", "age", and "job".
 */
function createDivLarge(...subElements) {
    let mainElement = document.createElement("div");

    // Appends every sub element
    for (let element of subElements) {
        if (element instanceof HTMLElement) {
            mainElement.appendChild(element);
        } else if (isString(element)) {
            let textNode = document.createTextNode(element);
            mainElement.appendChild(textNode);
        } else {
            console.log("ERROR createDivLarge() Failed with subElement: ", element);
        };
    };

    return mainElement;
};

/**
 * Creates a Div elememt with the specified attibutes.
 * 
 * @deprecated                  Use createHTMLElement() instead.
 * 
 * @param {Object}  param0      The object containing properties to be added to the Div.
 * @param {any}     subElement  The sub element to be appended to the main element.
 * @param {string}  setClass    The class to set.
 * @param {string}  setID       The ID to set.
 * @param {string}  event       The name of the on click event to add.
 * 
 * @return {Object}             The Div element with attributes added.
 * 
 * @example
 *      let main = createDiv({
 *          setClass: "main col-12"
 *      });
 *      document.body.appendChild(main);
 *      // -> Adds a "div" tag with the class "main col-12".
 */
function createDiv({
    subElement = null,
    setClass,
    setID,
    event
}) {
    let mainElement = createHTMLElement({
        name: "div",
        subElement: subElement,
        setClass: setClass,
        setID: setID,
        event: event
    });

    return mainElement;
};