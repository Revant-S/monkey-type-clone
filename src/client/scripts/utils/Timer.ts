export class Timer {
    totalTime: number;
    private isRunning: boolean;
    private startTime: number | null;

    constructor(totalTime: number) {
        this.totalTime = totalTime;
        this.isRunning = false;
        this.startTime = null;
    }

    private convertUnixTimeToMinutesAndSeconds(unixTime: number): string {
        const minutes = Math.floor(unixTime / 60);
        const seconds = Math.floor(unixTime % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.startTime = new Date().getTime();
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
        }
    }

    getTimeRemaining(): string {
        if (this.startTime === null) {
            return '00:00';
        }

        const now = new Date().getTime();
        const elapsedTime = (now - this.startTime) / 1000;
        const timeRemaining = Math.max(0, this.totalTime - elapsedTime);

        return this.convertUnixTimeToMinutesAndSeconds(timeRemaining);
    }
}
