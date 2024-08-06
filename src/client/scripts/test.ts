import { Timer } from "./utils/Timer";
import { TestState } from "../../types/test";
import { submitTest } from "./utils/apiCalls";
const contentDiv = <HTMLDivElement>document.getElementById("testingWindow")
const text = contentDiv.querySelector("p")?.textContent;
const startBtn = <HTMLButtonElement>document.getElementById("startTimer");

let testState: TestState = {
    wordIndex: 0,
    textArray: [],
    started: false,
    timer: new Timer(5 * 60),
    timerIntervalId: null,
    resultObject: {
        correctedLetters: 0,
        incorrectLetters: 0,
        correctLetters: 0
    }
}

export const getTextArray = (text: string): string[] => {
    return text.trim().replace("\n", ",").split("").splice(480, text.length - 1);

}
export const validateKey = (key: string): boolean => {
    const pattern = /^[a-zA-Z0-9 ,.]$/;
    return pattern.test(key);
}

export const convertToSpan = (textArray: string[]) => {
    return textArray.map((text, index) => {
        const span = document.createElement("span");
        span.innerText = text;
        span.id = `letter-${index}`
        return span
    })
}


function goBack() {
    if (testState.wordIndex <= 0) return;
    testState.wordIndex--;
    const element = document.getElementById(`letter-${testState.wordIndex}`);
    if (!element) return
    if (element.classList.contains("text-white")) element.classList.remove("text-white");
    if (element.classList.contains("bg-green-800")) element.classList.remove("bg-green-800");
    if (element.classList.contains("bg-red-800")) {
        element.classList.remove("bg-red-800");
        testState.resultObject.correctedLetters++;
        testState.resultObject.incorrectLetters--;
    }
    if (element.classList.contains("text-red-600")) {
        testState.resultObject.correctedLetters++;
        testState.resultObject.incorrectLetters--;
        element.classList.remove("text-red-600");
    }
}

export const highlight = (e: KeyboardEvent) => {
    e.preventDefault();
    if (!testState.started) return
    const keyPressed = e.key;
    if (keyPressed === "Backspace") return goBack();
    if (!validateKey(keyPressed)) return;
    const textRequired: string = testState.textArray[testState.wordIndex]
    const element = document.getElementById(`letter-${testState.wordIndex++}`);
    if (!element) return
    if (textRequired.toLocaleLowerCase() === keyPressed.toLocaleLowerCase()) {
        element.classList.add("text-white");
        testState.resultObject.correctLetters++;
        return;
    }
    if (textRequired === " ") return element.classList.add("bg-red-800");
    testState.resultObject.incorrectLetters++
    return element.classList.add("text-red-600");
}
export const showText = () => {
    if (!text) return;
    const textArray = getTextArray(text);
    console.log(text);

    const spanList = convertToSpan(textArray);
    if (!spanList || !spanList.length) return alert("SomeThing went worng");
    contentDiv.innerHTML = "";
    spanList.forEach(spanElement => {
        contentDiv.appendChild(spanElement);
    })
    testState.textArray = textArray;
}
showText()

window.addEventListener("keydown", highlight);





startBtn.addEventListener("click", (e) => {
    const element = e.target
    if (!element) return
    if (!testState.started) {
        testState.started = true
        testState.timer.start();
        testState.timerIntervalId = setInterval(() => {

            const timeElement = document.getElementById("timer");
            if (!timeElement) return;

            timeElement.innerText = testState.timer.getTimeRemaining()
            if (parseInt(testState.timer.getTimeRemaining()) <= 0) {
                if (!testState.timerIntervalId) return
                submitTest(testState);
                clearInterval(testState.timerIntervalId)
            }
        }, 1000);
        (element as HTMLButtonElement).innerText = "Submit"
        return;
    }
    if (!testState.timerIntervalId) return
    testState.timer.stop();
    submitTest(testState);
    testState.started = false;
    clearInterval(testState.timerIntervalId)
})
