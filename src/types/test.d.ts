import { Timer } from "../client/scripts/utils/Timer"

export interface TestState {
    wordIndex: number,
    textArray: string[],
    started: boolean,
    timer: Timer,
    timerIntervalId: NodeJS.Timeout | null,
    resultObject: ResultObject
}


export interface TestStateToServer {
    wordIndex: number,
    timer: Timer,
    resultObject : ResultObject
}

export interface ResultObject {

    correctLetters: number,
    incorrectLetters: number,
    correctedLetters: number,

}