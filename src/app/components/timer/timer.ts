import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'xn-timer',
    templateUrl: 'timer.html',
})
export class TimerComponent {

    private currentTimer: Subscription;
    public currentTime = 0;

    public startTimer() {
        this.currentTimer = Observable.timer(2000, 1000)
            .subscribe(t => this.currentTime = t);
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
