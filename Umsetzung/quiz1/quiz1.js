"use strict";
var quizPrototype;
(function (quizPrototype) {
    window.addEventListener("load", handleLoad);
    let form;
    let formsubmit;
    let questions = [
        {
            "question": "Was ist die grundlegende Frage des Uses-and-Gratifications-Ansatzes?",
            "Answer1": ["Warum nutzen Menschen bestimmte Medien?"],
            "Answer2": ["Warum werden bestimmte Inhalte nur in ausgewählten Medien gezeigt?", "Mit dieser Frage befassen sich andere Studien"],
            "Answer3": [],
            "right": "Warum nutzen Menschen bestimmte Medien?",
            "wrongBefore": false
        },
        {
            "question": "Warum nutzen Menschen nach dieser Grundannahme Medien?",
            "Answer1": ["Um bestimmte Bedürfnisse zu befriedigen"],
            "Answer2": ["Um einen Überblick über die Inhalte zu bekommen", "Für was steht „Gratification“ im Uses-and-Gratifications-Ansatz?"],
            "Answer3": [],
            "right": "Um bestimmte Bedürfnisse zu befriedigen",
            "wrongBefore": false
        },
        {
            "question": "Was sind die zwei zentralen Bedürfnisse?",
            "Answer1": ["Ablenkung und Befriedigung", "In diesem Fall sind andere Bedürfnisse gemeint"],
            "Answer2": ["Information und Unterhaltung"],
            "Answer3": [],
            "right": "Information und Unterhaltung",
            "wrongBefore": false
        },
        {
            "question": "Bei wem liegt die Initiative zur Medienzuwendung?",
            "Answer1": ["Bei den Medien", "Wessen Bedürfnisse werden betrachtet?"],
            "Answer2": ["Beim Rezipienten"],
            "Answer3": [],
            "right": "Beim Rezipienten",
            "wrongBefore": false
        },
        {
            "question": "Welche Frage wird betrachtet?",
            "Answer1": ["Was macht der Mensch mit den Medien?"],
            "Answer2": ["Was machen die Medien mit dem Menschen?", "Von wem geht die Mediennutzung hier aus?"],
            "Answer3": [],
            "right": "Was macht der Mensch mit den Medien?",
            "wrongBefore": false
        },
        {
            "question": "Was wird bei der dritten Grundannahme betrachtet?",
            "Answer1": ["Die Konkurrenz zwischen Medien und anderen Mitteln der Bedürfnisbefriedigung"],
            "Answer2": ["Wie viel Prozent der menschlichen Bedürfnisse durch Medien befriedigt werden können", "Bei dieser Grundannahme spielt die Entscheidung des Nutzers für verschiedene Mittel der Bedürfnisbefriedigung eine große Rolle."],
            "Answer3": [],
            "right": "Die Konkurrenz zwischen Medien und anderen Mitteln der Bedürfnisbefriedigung",
            "wrongBefore": false
        },
        {
            "question": "Wie können menschliche Bedürfnisse ermittelt werden?",
            "Answer1": ["Durch Annahme anderer", "Keiner kennt die Bedürfnisse eines Menschen besser als er selbst."],
            "Answer2": ["Durch Selbstauskunft"],
            "Answer3": [],
            "right": "Durch Selbstauskunft",
            "wrongBefore": false
        }
    ];
    function handleLoad() {
        //Hello WOrld
        form = document.querySelector("#form");
        formsubmit = document.querySelector("#submitform");
        formsubmit.addEventListener("pointerup", checkQuiz);
        for (let i = 0; i < questions.length; i++) {
            createElements(questions[i], i);
        }
    }
    function createElements(_question, _index) {
        let div = document.createElement("div");
        let headline = document.createElement("h2");
        div.classList.add("question" + _index);
        headline.innerHTML = _question.question;
        div.appendChild(headline);
        let box1 = document.createElement("input");
        box1.setAttribute("type", "radio");
        box1.setAttribute("name", "question" + _index);
        box1.setAttribute("value", _question.Answer1[0] + "");
        box1.setAttribute("id", "question" + _index + "answer1");
        box1.classList.add("question");
        box1.classList.add("question" + _index);
        div.appendChild(box1);
        let tag1 = document.createElement("label");
        tag1.classList.add("tag");
        tag1.innerHTML = _question.Answer1[0] + "<br>";
        tag1.setAttribute("for", "question" + _index + "answer1");
        div.appendChild(tag1);
        let box2 = document.createElement("input");
        box2.setAttribute("type", "radio");
        box2.setAttribute("name", "question" + _index);
        box2.setAttribute("value", _question.Answer2[0] + "");
        box2.setAttribute("id", "question" + _index + "answer2");
        box2.classList.add("question");
        box2.classList.add("question" + _index);
        div.appendChild(box2);
        let tag2 = document.createElement("label");
        tag2.classList.add("tag");
        tag2.innerHTML = _question.Answer2[0] + "<br>";
        tag2.setAttribute("for", "question" + _index + "answer2");
        div.appendChild(tag2);
        if (_question.Answer3.length != 0) {
            let box3 = document.createElement("input");
            box3.setAttribute("type", "radio");
            box3.setAttribute("name", "question" + _index);
            box3.setAttribute("value", _question.Answer3[0] + "");
            box3.setAttribute("id", "question" + _index + "answer3");
            box3.classList.add("question");
            box3.classList.add("question" + _index);
            div.appendChild(box3);
            let tag3 = document.createElement("label");
            tag3.classList.add("tag");
            tag3.innerHTML = _question.Answer3[0] + "<br>";
            tag3.setAttribute("for", "question" + _index + "answer3");
            div.appendChild(tag3);
        }
        form.insertBefore(div, form.firstChild);
    }
    function checkQuiz(_event) {
        let formData = new FormData(document.forms[0]);
        let arr = questions;
        if (formData && arr) {
            console.log(formData);
            console.log(formData.get("question0"));
            for (let entry of formData) {
                let selector = "[value='" + entry[1] + "']";
                let item = document.querySelector(selector);
                console.log(item);
                let name = item.getAttribute("name");
                let index = name.replace("question", "");
                let nmbr = parseInt(index);
                console.log(nmbr);
                let answer = entry[1].toString();
                let id = item.id;
                let tag = document.querySelector("[for='" + id + "']");
                if (arr[nmbr].right == answer) {
                    let allQuestions = document.querySelectorAll(".question" + nmbr);
                    tag.classList.add("right");
                    for (let question of allQuestions) {
                        question.disabled = true;
                    }
                }
                else {
                    if (!item.classList.contains("wrong")) {
                        tag.classList.add("wrong");
                        item.classList.add("wrong");
                        let div = document.querySelector(".question" + nmbr);
                        let p = document.createElement("p");
                        if (arr[nmbr].Answer1[0] == answer) {
                            p.innerHTML = arr[nmbr].Answer1[1];
                        }
                        else if (arr[nmbr].Answer2[0] == answer) {
                            p.innerHTML = arr[nmbr].Answer2[1];
                        }
                        else if (arr[nmbr].Answer3[0] == answer) {
                            p.innerHTML = arr[nmbr].Answer3[1];
                        }
                        p.classList.add("hint");
                        div.appendChild(p);
                    }
                }
            }
        }
    }
})(quizPrototype || (quizPrototype = {}));
//# sourceMappingURL=quiz1.js.map