"use strict";

window.algebraLevels = [];

let i = 0;
algebraLevels.push({
    "level": i,
    "title": "Tutorial",
    "description": "A basic level for new players to learn to play MathWars. Below there is a question and four options to pick from. Try to answer the question and see what happens.",
    "question": "There is a cake of 12 equal pieces. There are 8 people and each takes 1 piece of the cake. Is there cake left?",
    "options": [
        "Yes",
        "No",
        "Not Sure",
        "IDK"
    ],
    "answer": "Yes"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Basic Mathematics",
    "description": "This level will test you basic Mathematics skills. Specifically, this problem involves understanding the Order of Operations - PEMDAS",
    "question": "Calculate 1 + 4 * 2 + 5",
    "options": [
        1 + (4 * 2) + 5,
        (1 + 4) * 2 + 5,
        (1 + 4) * (2 + 5),
        1 + 4 * (2 + 5)
    ],
    "answer": 1 + (4 * 2) + 5
});

i++;
algebraLevels.push({
    "level": i,
    "title": "A Bit Harder",
    "description": "This level is the same the previous, but it is admittedly little bit harder.",
    "question": "Calculate 1 + 2 * 3 - 4  8",
    "options": [
        1 + (2 * 3) - (4 / 8),
        (1 + 2) * 3 - 4 / 8,
        (1 + 2) * (3 - 4 / 8),
        1 + 2 * ((3 - 4) / 8)
    ],
    "answer": 1 + (2 * 3) - (4 / 8)
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Basic Algebra",
    "description": "Manipulate the variables to solve for x",
    "question": "Solve 3x + 2 = 3",
    "options": [
        "1/3",
        "3/4",
        "3/5",
        "1/4"
    ],
    "answer": "1/3"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Slopes",
    "description": "This is a tricky Algebra problem that involves the formula: y = mx + b.",
    "image": "images/mathmatics/algebra/slope.svg",
    "altText": "Slope",
    "question": "Find the slope of 5x - 5y = 7",
    "options": [
        1,
        0.5,
        2,
        "2/3"
    ],
    "answer": 1
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Equations",
    "description": "Manipulate the variables to solve for x.",
    "question": "Solve −x + 5 + 2x = 3 − 4x",
    "options": [
        "-2/5",
        "2/5",
        "3/2",
        "-3/2",
    ],
    "answer": "-2/5"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Linear Equations",
    "description": "Manipulate the variables to solve the problem.",
    "question": "Find the number of solutions of −9(x + 6) = −9x + 108",
    "options": [
        "0",
        "1",
        "2",
        "∞",
    ],
    "answer": "0"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Linear Inequalities",
    "description": "Manipulate the variables to solve the inequality.",
    "question": "Find the solution(s) of (−8x + 44 ≥ 60) AND (−4x + 50 < 58)",
    "options": [
        "0 Solution",
        "∞ Solutions",
        "x > 2",
        "x > -2"
    ],
    "answer": "0 Solution"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Simplify Equation",
    "description": "Manipulate the variables to solve for x.",
    "question": "Solve −42x + 33 < 8x + 91",
    "options": [
        "x > -29/25",
        "x < -29/25",
        "x < 5/4",
        "x > 5/4",
    ],
    "answer": "x > -29/25"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Linear Inequalities",
    "description": "Manipulate the variables to solve the problem.",
    "question": "Solve 5x + 7 < 3(x + 1)",
    "options": [
        "x < –2",
        "x < 2",
        "x > 3",
        "x > -3"
    ],
    "answer": "x < –2"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "Linear Inequalities",
    "description": "Manipulate the variables to solve the problem.",
    "question": "Solve 3 − 2x ≥ 15",
    "options": [
        "x ≤ −6",
        "x ≤ −3",
        "x ≤ 6",
        "x ≤ 3"
    ],
    "answer": "x ≤ −6"
});

i++;
algebraLevels.push({
    "level": i,
    "title": "No More Levels...",
    "description": "You have reached the end the line... So far... With more support, I wil continue to develop MathWars. Feel free to let me know if you want to see more levels or to have issues/bugs you found fixed @sometheasiekswx@gmail.com.",
    "question": "Do you like this app so far?",
    "options": [
        "Yes",
        "No",
        "Not Sure",
        "IDK"
    ],
    "answer": "Yes"
});