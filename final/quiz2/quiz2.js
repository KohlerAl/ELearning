"use strict";
var quizPrototype;
(function (quizPrototype) {
    window.addEventListener("load", handleLoad);
    let form;
    let formsubmit;
    let questions = [
        {
            "question": "Was ist der Uses-and-Gratifications-Ansatz?",
            "Answer1": ["Ein Forschungsfeld"],
            "Answer2": ["Eine Theorie", "Für eine Theorie werden mehrere, miteinander verbundene Hypothesen benötigt. Trifft das auf den Uses-and-Gratifications-Ansatz zu?"],
            "Answer3": ["Eine Hypothese", "Hypothesen müssen falsifizierbar sein. Der Uses-and-Gratifications-Ansatz basiert auf der Annahme, dass Menschen das Medium nutzen, das ihre Bedürfnisse am besten befriedigt. "],
            "right": "Ein Forschungsfeld",
            "wrongBefore": false
        },
        {
            "question": "Welches Verhalten wird in den Uses-and-Gratifications-Studien überwiegend untersucht?",
            "Answer1": ["Situatives Verhalten, da sich Bedürfnisse jeden Augenblick ändern können", "Eine einzelne Nutzungssituation kann sehr spezifisch und damit schwer vergleichbar sein. "],
            "Answer2": ["Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt"],
            "Answer3": [],
            "right": "Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt",
            "wrongBefore": false
        },
        {
            "question": "Welches Verhalten wird in den Uses-and-Gratifications-Studien überwiegend untersucht?",
            "Answer1": ["Situatives Verhalten, da sich Bedürfnisse jeden Augenblick ändern können", "Eine einzelne Nutzungssituation kann sehr spezifisch und damit schwer vergleichbar sein. "],
            "Answer2": ["Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt"],
            "Answer3": [],
            "right": "Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt",
            "wrongBefore": false
        },
        {
            "question": "Welches Verhalten wird in den Uses-and-Gratifications-Studien überwiegend untersucht?",
            "Answer1": ["Situatives Verhalten, da sich Bedürfnisse jeden Augenblick ändern können", "Eine einzelne Nutzungssituation kann sehr spezifisch und damit schwer vergleichbar sein. "],
            "Answer2": ["Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt"],
            "Answer3": [],
            "right": "Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt",
            "wrongBefore": false
        },
        {
            "question": "Welcher Trugschluss entsteht durch die Medienzentrierte Sichtweise? ",
            "Answer1": ["Medien werden für ein einziges, bestimmtes Bedürfnis geschaffen"],
            "Answer2": ["Medien erfüllen viele verschiedene Bedürfnisse", "Medien werden meist für ein bestimmtes Bedürfnis konzipiert. Was der Nutzer dann aber mit diesem Angebot macht, ist eine ganz andere Sache. "],
            "Answer3": [],
            "right": "Medien werden für ein einziges, bestimmtes Bedürfnis geschaffen",
            "wrongBefore": false
        },
        {
            "question": "Von welchem Nutzungskontext wird in den UG-Studien ausgegangen?",
            "Answer1": ["Rezipienten nutzen Medien ausschließlich allein und autonom"],
            "Answer2": ["Rezipienten nutzen Medien ausschließlich in Gesellschaft", "Die gemeinsame Mediennutzung unterscheidet sich stark von der alleinigen Mediennutzung. Werden Medien allein konsumiert, lässt sich dieser Nutzungskontext einfacher reproduzieren als der in der Gruppe (weil hier auch immer darauf geachtet werden muss, in welchem Verhältnis die einzelnen Personen zueinanderstehen). "],
            "Answer3": [],
            "right": "Rezipienten nutzen Medien ausschließlich allein und autonom",
            "wrongBefore": false
        },
        {
            "question": "Was wird in den Uses-and-Gratifications-Studien abgefragt? ",
            "Answer1": ["Spezifische Nutzungssituationen", "Die Situation spielt in den meisten Befragungen weniger eine Rolle als die Bedürfnisse des Rezipienten und sein Weg, diese zu befriedigen."],
            "Answer2": ["Die Wahrnehmung des eigenen, alltäglichen Nutzungsverhaltens"],
            "Answer3": ["Ungewöhnliche Situationen", "Ungewöhnliche Situationen sind der Ausnahmefall. Die Nutzung von Medien kann sich hier stark von der normalen Mediennutzung unterscheiden."],
            "right": "Die Wahrnehmung des eigenen, alltäglichen Nutzungsverhaltens",
            "wrongBefore": false
        },
        {
            "question": "Welchen Einfluss könnte die Beeinflussung externer Faktoren auf das Umfrageergebnis haben? ",
            "Answer1": ["Wenn der Einfluss externer Faktoren hoch ist, fällt das eigene Bedürfnis nicht sehr stark ins Gewicht"],
            "Answer2": ["Ohne Einfluss von außen ist es schwer, Medienangebote zu finden, die zum eigenen Bedürfnis passen", "Es kann beim heutigen Medienangebot nötig sein, Hilfsmittel zu verwenden, um sich zu orientieren. Werden die externen Faktoren zu mächtig, wird die Entscheidung des Nutzers mehr von diesen als vom eigenen Bedürfnis gelenkt. "],
            "Answer3": [],
            "right": "Wenn der Einfluss externer Faktoren hoch ist, fällt das eigene Bedürfnis nicht sehr stark ins Gewicht",
            "wrongBefore": false
        },
        {
            "question": "Welche Probleme ergeben sich aus der Annahme, der Nutzer habe in der Nutzungssituationen vollständiges Wissen über sämtliche Medienangebote und freien Zugang zu diesen? ",
            "Answer1": ["Wenn der Nutzer sämtliche Medienangebote kennen würde und Zugriff auf diese hätte, wäre er überfordert und würde aus dieser aus Überforderung Medien auswählen, die nicht seinen Bedürfnissen entsprechen.", "Ist es möglich, vollständiges Wissen über sämtliche Medienangebote zu haben? "],
            "Answer2": ["Diese Annahme entspricht einer idealisierten Situation, nicht der tatsächlichen Nutzungssituation"],
            "Answer3": [],
            "right": "Diese Annahme entspricht einer idealisierten Situation, nicht der tatsächlichen Nutzungssituation",
            "wrongBefore": false
        },
        {
            "question": "Welche Frage ergab sich mit der Verlagerung von Medieninhalten ins Internet?",
            "Answer1": ["Kann das Internet selbst bereits als Gattung gezählt werden? ", "Die Inhalte bleiben bei der Verlagerung ins Internet meistens ähnlich. Allerdings unterscheidet sich das Trägermedium stark. "],
            "Answer2": ["Erfüllt bereits die Medientechnik, bzw. das Trägermedium ein Bedürfnis oder geht es dem Rezipienten allein um die Inhalte? "],
            "Answer3": [],
            "right": "Erfüllt bereits die Medientechnik, bzw. das Trägermedium ein Bedürfnis oder geht es dem Rezipienten allein um die Inhalte? ",
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
                            p.innerHTML = arr[nmbr].Answer2[1];
                        }
                        p.classList.add("hint");
                        div.appendChild(p);
                    }
                }
            }
        }
    }
})(quizPrototype || (quizPrototype = {}));
//# sourceMappingURL=quiz2.js.map