import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, forwardRef } from '@angular/core';
import { CardComponent } from '../card/card';
import { Observable } from 'rxjs/Rx';
import { TimerComponent } from '../timer/timer';

@Component({
    selector: 'xn-gameboard',
    templateUrl: 'gameboard.html',
    styleUrls: ['gameboard.scss'],
})
export class GameboardComponent implements OnInit, AfterViewInit {

    @ViewChildren(TimerComponent)
    private timer: QueryList<TimerComponent>;
    @ViewChildren(forwardRef(() => CardComponent))
    private cardComponents: QueryList<CardComponent>;
    private cardComponentArray: CardComponent[];
    private currentSelectedCard: CardComponent = null;

    public cards: string[] = new Array<string>();
    public gameFinished = false;
    public finishTime = 0;

    public ngOnInit() {
        this.cards = new Array<string>();
        this.initGameboard();
    }

    public ngAfterViewInit() {
        this.cardComponentArray = this.cardComponents.toArray();
        this.timer.first.startTimer();
        this.cardComponents.changes.subscribe(evt => this.cardComponentArray = this.cardComponents.toArray());
    }

    public onNeustartClicked() {
        this.cardComponents.forEach(card => {
            card.found = false;
            card.open = false;
        });

        this.shuffle(this.cards);

        if (this.gameFinished) {
            this.gameFinished = false;
        }

        this.timer.first.resetTimer();
    }

    public onCardClicked(card: CardComponent) {
        if (!this.currentSelectedCard) {
            this.currentSelectedCard = card;
            return;
        }

        if (this.currentSelectedCard.id === card.id) {
            this.currentSelectedCard.found = true;
            card.found = true;
            this.currentSelectedCard = null;
            this.evaluateGameFinished();
            return;
        }

        const cardToClose = this.currentSelectedCard;
        this.currentSelectedCard = null;

        Observable.timer(800).subscribe(() => {
            card.open = false;
            cardToClose.open = false;
        });

        return;
    }

    private evaluateGameFinished() {
        if (!this.cardComponents) {
            return;
        }

        if (this.cardComponents.filter(card => !card.found).length < 1) {
            this.winGame();
        }
    }

    private winGame() {
        this.timer.first.stopTimer();
        this.finishTime = this.timer.first.getTime();
        this.gameFinished = true;
    }

    private initGameboard() {
        for (let i = 0; i < 10; i++) {
            this.cards.push(i + '.png');
        }
        for (let i = 0; i < 10; i++) {
            this.cards.push(i + '.png');
        }

        this.shuffle(this.cards);
    }

    private shuffle(a) {
        let j;
        let x;
        let i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

}
