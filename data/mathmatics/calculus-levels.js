"use strict";

window.calculusLevels = [];

i = 0;
calculusLevels.push({
    "level": i,
    "title": "Tutorial",
    "description": "A basic level for new players to learn to play MathWars. Below there is a question and four options to pick from. Try to answer the question and see what happens.",
    "question": "What is i^22 equal to?",
    "options": [
        "-1",
        "i",
        "-i",
        "1"
    ],
    "answer": "-1"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Complex Conjugate",
    "description": "The complex conjugate of a complex number z = a + bi is given by z(bar) = a - bi",
    "question": "Find the complex conjugate of z = -3 + 2i?",
    "options": [
        "-3 - 2i",
        "3 - 2i",
        "3 + 2i",
        "-3 + 2i",
    ],
    "answer": "-3 - 2i"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Advanced Complex Numbers",
    "description": "By using the polar form to find the radius and angle, the solution for this question can be reached.",
    "image": "../images/mathmatics/calculus/complex-number.jpg",
    "altText": "Complex Number Question",
    "question": "Calculate the polar form of w1 / w2",
    "options": [
        "5[cos(π/9) + i sin(π/9)]",
        "5[cos(π/6) + i sin(π/6)]",
        "5[cos(π/3) + i sin(π/3)]",
        "5[cos(π/2) + i sin(π/2)]",
    ],
    "answer": "5[cos(π/9) + i sin(π/9)]"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Basic Limits",
    "description": "Limits are functions that approach a ceratin value or reaches infinity. By graphing it or solving the function directly using trigonometric identities.",
    "image": "../images/mathmatics/calculus/limits.jpg",
    "altText": "Limits Question",
    "question": "Find the limit",
    "options": [
        -4,
        4,
        -5,
        "∞",
    ],
    "answer": -4
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Continuity",
    "description": "Using limits, we can find the answer.",
    "image": "../images/mathmatics/calculus/continuity.jpg",
    "altText": "Continuity Problem",
    "question": "Is this continuous at x=0?",
    "options": [
        "No",
        "Yes",
        "IDK",
        "Maybe",
    ],
    "answer": "No"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Differentiability",
    "description": "Check for the cases where the function is not differeniable and then use those cases to find the x values.",
    "image": "../images/mathmatics/calculus/differentiability.jpg",
    "altText": "Differentiability Graph",
    "question": "Find the x value is where h is NOT differentiable",
    "options": [
        -4,
        2,
        -3,
        4,
    ],
    "answer": -4
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Differentiation",
    "description": "Use the power rule.",
    "question": "Differentiate (x^5) + 2(x^3) - (x^2)",
    "options": [
        "5(x^4) + 6(x^2) - 2(x)",
        "6(x^4) + 5(x^2) - 2(x)",
        "(x^5) + 6(x^2) - (x^2)",
        "(x^5) + 2(x^3) - (x^2)",
    ],
    "answer": "5(x^4) + 6(x^2) - 2(x)"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Advanced Derivatives",
    "description": "Use the power rule and trigonometric identities.",
    "question": "Differentiate 3*ln(x) - 12sin(x)",
    "options": [
        "(3/x) - 12cos(x)",
        "(-3/x) - 12cos(x)",
        "(3/x) + 12cos(x)",
        "(-3/x) + 12cos(x)",
    ],
    "answer": "(3/x) - 12cos(x)"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Advanced Derivatives 2",
    "description": "Use the product rule.",
    "question": "Differentiate sin(x)*(x^2)",
    "options": [
        "(x^2)*cos(x) + 2x*sin(x)",
        "(x^2)*cos(x) - 2x*sin(x)",
        "- (x^2)*cos(x) + 2x*sin(x)",
        "- (x^2)*cos(x) - 2x*sin(x)",
    ],
    "answer": "(x^2)*cos(x) + 2x*sin(x)"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Advanced Derivatives 3",
    "description": "Use the quotient rule to solve this problem.",
    "question": "Differentiate (x^2)/(cos(x))",
    "options": [
        "(2x*cos(s) + (x^3)*sin(x))) / (cos^2(x))",
        "(2x*cos(s) - (x^3)*sin(x))) / (cos^2(x))",
        "(- 2x*cos(s) + (x^3)*sin(x))) / (cos^2(x))",
        "- (2x*cos(s) - (x^3)*sin(x))) / (- cos^2(x))",
    ],
    "answer": "(2x*cos(s) + (x^3)*sin(x))) / (cos^2(x))"
});

i++;
calculusLevels.push({
    "level": i,
    "title": "Concavity",
    "description": "Analyze the given graph to find the focal point and convativity to find the answer.",
    "image": "../images/mathmatics/calculus/concavity.jpg",
    "altText": "Concavity Graph",
    "question": "Find the two intervals where h'(x)>0 and h''(x)<0",
    "options": [
        "-2 < x < -1 AND -1.5 < x < 0",
        "3 < x < 4 AND 4.5 < x < ∞",
        "-∞ < x < -1 AND 2 < x < 4",
        "Solution Does Not Exist",
    ],
    "answer": "-2 < x < -1 & -1.5 < x < 0"
});

i++;
calculusLevels.push({
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