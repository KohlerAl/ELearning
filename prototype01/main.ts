namespace quizPrototype {
    window.addEventListener("load", handleLoad);


    let formCriticism: HTMLFormElement;
    let submitCriticism: HTMLButtonElement;

    /* let questionsCriticism: string[][][] = [
        [
            ["Was ist der UG-Ansatz?", "Ein Forschungsfeld", "Eine Theorie", "Eine Hypothese"],
            ["Ein Forschungsfeld"],
            ["Hypothesen müssen falsifizierbar sein", "Für eine Theorie werden mehrere, miteinander verbundene Hypothesen benötigt"],
            ["false"]
        ], 
        [
            ["Welches Verhalten wird in den UG-Studien überwiegend untersucht?", "Situatives Verhalten, da sich Bedürfnisse jeden Augenblick ändern können", "Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt"], 
            ["Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt"], 
            ["Hint 1", "Hint 2"],
            ["false"]
        ]
    ]; */

    interface Question {
        question: string;
        Answer1: (string)[];
        Answer2: (string)[];
        Answer3: (string)[];
        right: string;
        wrongBefore: boolean;
    }

    let questionsG: Question[] = [];
    let questionsC: Question[] = [
        {
            "question": "Was ist der UG-Ansatz?",
            "Answer1": ["Ein Forschungsfeld"],
            "Answer2": ["Eine Theorie", "Für eine Theorie werden mehrere, miteinander verbundene Hypothesen benötigt"],
            "Answer3": ["Eine Hypothese", "Hypothesen müssen falsifizierbar sein"],
            "right": "Ein Forschungsfeld",
            "wrongBefore": false
        },
        {
            "question": "Welches Verhalten wird in den UG-Studien überwiegend untersucht?",
            "Answer1": ["Situatives Verhalten, da sich Bedürfnisse jeden Augenblick ändern können", "Hint 1"],
            "Answer2": ["Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt"],
            "Answer3": [],
            "right": "Situationsübergreifendes Verhalten, da dieses überdauerende Nutzungsmuster erklärt",
            "wrongBefore": false
        }
    ];

    function handleLoad(): void {
        //Hello WOrld
        formCriticism = <HTMLFormElement>document.querySelector("#criticism");
        submitCriticism = <HTMLButtonElement>document.querySelector("#submitCriticism");

        submitCriticism.addEventListener("pointerup", checkQuiz);

        for (let i: number = 0; i < questionsC.length; i++) {
            createElements(questionsC[i], i);
        }
    }

    function createElements(_question: Question, _index: number): void {
        let div: HTMLDivElement = document.createElement("div");
        let headline: HTMLHeadingElement = document.createElement("h2");

        div.classList.add("question" + _index);

        headline.innerHTML = _question.question;
        div.appendChild(headline);

        let box1: HTMLInputElement = document.createElement("input");
        box1.setAttribute("type", "radio");
        box1.setAttribute("name", "question" + _index);
        box1.setAttribute("value", _question.Answer1[0] + "");
        box1.setAttribute("id", "question" + _index + "answer1");
        box1.classList.add("question");
        box1.classList.add("question" + _index);
        div.appendChild(box1);

        let tag1: HTMLLabelElement = document.createElement("label");
        tag1.classList.add("tag");
        tag1.innerHTML = _question.Answer1[0] + "<br>";
        tag1.setAttribute("for", "question" + _index + "answer1");
        div.appendChild(tag1);


        let box2: HTMLInputElement = document.createElement("input");
        box2.setAttribute("type", "radio");
        box2.setAttribute("name", "question" + _index);
        box2.setAttribute("value", _question.Answer2[0] + "");
        box2.setAttribute("id", "question" + _index + "answer2");
        box2.classList.add("question");
        box2.classList.add("question" + _index);
        div.appendChild(box2);

        let tag2: HTMLLabelElement = document.createElement("label");
        tag2.classList.add("tag");
        tag2.innerHTML = _question.Answer2[0] + "<br>";
        tag2.setAttribute("for", "question" + _index + "answer2");
        div.appendChild(tag2);

        if (_question.Answer3.length != 0) {
            let box3: HTMLInputElement = document.createElement("input");
            box3.setAttribute("type", "radio");
            box3.setAttribute("name", "question" + _index);
            box3.setAttribute("value", _question.Answer3[0] + "");
            box3.setAttribute("id", "question" + _index + "answer3");
            box3.classList.add("question");
            box3.classList.add("question" + _index);
            div.appendChild(box3);

            let tag3: HTMLLabelElement = document.createElement("label");
            tag3.classList.add("tag");
            tag3.innerHTML = _question.Answer3[0] + "<br>";
            tag3.setAttribute("for", "question" + _index + "answer3");
            div.appendChild(tag3);
        }

        formCriticism.insertBefore(div, formCriticism.firstChild);
    }

    function checkQuiz(_event: PointerEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        let formData: FormData | null;
        let arr: Question[] | null;
        switch (id) {
            case ("submitGeneral"):
                formData = new FormData(document.forms[0]);
                arr = questionsG;
                break;
            case ("submitCriticism"):
                formData = new FormData(document.forms[1]);
                arr = questionsC;
                break;
            default:
                formData = null;
                arr = null;
                break;
        }

        if (formData && arr) {
            console.log(formData);
            console.log(formData.get("question0"));

            for (let entry of formData) {
                let selector: string = "[value='" + entry[1] + "']";
                let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
                console.log(item);

                let name: string = <string>item.getAttribute("name");
                let index: string = name.replace("question", "");
                let nmbr: number = parseInt(index);
                console.log(nmbr);

                let answer: string = entry[1].toString();
                
                let id: string = item.id; 
                let tag: HTMLLabelElement = <HTMLLabelElement>document.querySelector("[for='" + id + "']"); 


                if (arr[nmbr].right == answer) {
                    let allQuestions: NodeListOf<HTMLInputElement> = document.querySelectorAll(".question" + nmbr);
                    tag.classList.add("right");
                    for (let question of allQuestions) {
                        question.disabled = true;
                    }
                }
                else {
                    if (!item.classList.contains("wrong")) {
                        tag.classList.add("wrong");
                        item.classList.add("wrong"); 

                        let div: HTMLDivElement = <HTMLDivElement>document.querySelector(".question" + nmbr);
                        let p: HTMLParagraphElement = document.createElement("p");

                        if (arr[nmbr].Answer1[0] == answer) {
                            p.innerHTML = arr[nmbr].Answer1[1];
                        }

                        else if (arr[nmbr].Answer1[0] == answer) {
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
}