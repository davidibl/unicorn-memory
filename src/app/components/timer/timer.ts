import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    moduleId: __moduleName,
    selector: 'timer',
    templateUrl: 'timer.html',
})
export class TimerComponent {

    private currentTime: number = 0;
    private currentTimer: Subscription;

    public startTimer() {
        let timer = Observable.timer(2000, 1000);
        this.currentTimer = timer.subscribe(t => this.currentTime = t);
    }

    public stopTimer() {
        this.currentTimer.unsubscribe();
    }

    public getTime(): number {
        return this.currentTime;
    }

    public resetTimer() {
        this.currentTimer.unsubscribe();
        this.startTimer();
    }
}
