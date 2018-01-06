import { Component, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'xn-card',
    templateUrl: 'card.html',
    styleUrls: ['card.scss'],
})
export class CardComponent {

    @Input()
    public id: string;

    @Output()
    public cardClick: EventEmitter<CardComponent> = new EventEmitter<CardComponent>();

    @HostBinding('class.open')
    public open = false;

    public found = false;

    @HostListener('click')
    public onCardClick() {
        if (this.open) {
            return;
        }

        this.open = true;

        if (this.open) {
            this.cardClick.emit(this);
        }
    }
}
