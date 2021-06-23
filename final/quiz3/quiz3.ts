namespace quizPrototype {
    window.addEventListener("load", handleLoad);

    let form: HTMLFormElement;
    let formsubmit: HTMLButtonElement;

    interface Question {
        question: string;
        Answer1: (string)[];
        Answer2: (string)[];
        Answer3: (string)[];
        right: string;
        wrongBefore: boolean;
    }

    let questions: Question[] = [
        {
            "question": "Wie nennen sich Bedürfnisse, die sich jederzeit ändern können?",
            "Answer1": ["Mittelfristige Bedürfnisse", "Mittelfristige Bedürfnisse sind zwar terminiert, aber sie können sich doch nicht jederzeit verändern, oder?"],
            "Answer2": ["Situative Bedürfnisse"],
            "Answer3": ["Langfristige Bedürfnisse", "Langfristige Bedürfnisse sind grundlegende Persönlichkeitseigenschaften, die damit nur schwer zu beeinflussen sind."],
            "right": "Situative Bedürfnisse",
            "wrongBefore": false
        },
        {
            "question": "Zwischen welchen Begrifflichkeiten unterscheiden McLeod und Becker in ihrem transaktionalen Modell zum Uses-and Gratifications-Ansatz?",
            "Answer1": ["Zwischen grundlegenden Bedürfnissen und Motiven"],
            "Answer2": ["Zwischen den sozialen und psychologischen Ursprüngen von Bedürfnissen", "Dies ist die Systematisierung des Uses-and-Gratifications-Ansatz nach Katz. "],
            "Answer3": [],
            "right": "Zwischen grundlegenden Bedürfnissen und Motiven",
            "wrongBefore": false
        },
        {
            "question": "Integriert Maslows Bedürfnishierarchie das gesamte Spektrum menschlicher Motivationen? ",
            "Answer1": ["Nein", "Ist eine Integration von Primär- und Sekundärtrieben, sowie Konditionierungen, Wünsche, Intentionen und Zwecke, aber auch politischen und kulturellen Werten nicht das gesamte Spektrum menschlicher Motivationen? Oder fällt dir ein weiterer Aspekt ein?"],
            "Answer2": ["Ja"],
            "Answer3": [],
            "right": "Ja",
            "wrongBefore": false
        },
        {
            "question": "Welches Bedürfnis bildet das Fundament der Pyramide und welches die Spitze?",
            "Answer1": ["Fundament: biologische Bedürfnisse, Spitze: Sicherheitsbedürfnis", "Das Fundament ist ein angeborener Instinkt oder auch überlebenswichtig und die Spitze ist esoterisch orientiert."],
            "Answer2": ["Fundament: Bindungsbedürfnis, Spitze: Selbstverwirklichung", "Das Fundament ist ein angeborener Instinkt oder auch überlebenswichtig und die Spitze ist esoterisch orientiert."],
            "Answer3": ["Fundament: biologische Bedürfnisse, Spitze: die Transzendenz"],
            "right": "Fundament: biologische Bedürfnisse, Spitze: die Transzendenz",
            "wrongBefore": false
        },
        {
            "question": "Wie heißen die vier Dimensionen, in die McGuire unterscheidet?",
            "Answer1": ["Sicherheit, Bindung, Selbstwert und Ästhetik", "Diese Werte/Bedürfnisse spielen eine Rolle in einer anderen Unterscheidung von Bedürfnissen und Motiven."],
            "Answer2": ["Hoffnung, Trauer, Angst und Freude", "Das sind nicht unbedingt Dimensionen, sondern eher Aspekte, die in den unterschiedlichen Dimensionen aufgegriffen werden können."],
            "Answer3": ["Modus, Stabilität, Initiative und Orientierung"],
            "right": "Modus, Stabilität, Initiative und Orientierung",
            "wrongBefore": false
        },
        {
            "question": "Welche Schwäche weist McGuires Systematisierung auf?",
            "Answer1": ["Die Dimensionen werden nicht eindeutig beschrieben"],
            "Answer2": ["Sie ist eine Kopie von Maslows Bedürfnishierarchie", "Wenn es eine reine Kopie wäre, hätte McGuire diese dann veröffentlicht? "],
            "Answer3": [],
            "right": "Die Dimensionen werden nicht eindeutig beschrieben",
            "wrongBefore": false
        },
        {
            "question": "Was zeigt das Paradigma menschlicher Bedürfnisse auf?",
            "Answer1": ["Es zeigt lediglich die 16 Grundbedürfnisse, die sich aus McGuires Systematisierung ergeben auf", "Wovon lassen sich die 16 Grundbedürfnisse ableiten?"],
            "Answer2": ["Es zeigt alle Dimensionen der Systematisierung psychologischer Mediennutzungsmotive nach McGuire auf und die daraus abgeleiteten Grundbedürfnisse"],
            "Answer3": [],
            "right": "Es zeigt alle Dimensionen der Systematisierung psychologischer Mediennutzungsmotive nach McGuire auf und die daraus abgeleiteten Grundbedürfnisse",
            "wrongBefore": false
        }
    ];

    function handleLoad(): void {
        //Hello WOrld
        form = <HTMLFormElement>document.querySelector("#form");
        formsubmit = <HTMLButtonElement>document.querySelector("#submitform");

        formsubmit.addEventListener("pointerup", checkQuiz);

        for (let i: number = 0; i < questions.length; i++) {
            createElements(questions[i], i);
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

        form.insertBefore(div, form.firstChild);
    }

    function checkQuiz(_event: PointerEvent): void {

        let formData: FormData | null = new FormData(document.forms[0]);
        let arr: Question[] | null = questions;


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
}