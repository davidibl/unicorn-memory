import { Component, Input, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'card',
    templateUrl: 'card.html',
})
export class CardComponent {

    @Input()
    public id: string;

    @Output()
    public cardClick: EventEmitter<CardComponent> = new EventEmitter<CardComponent>();

    @HostBinding('class.open')
    public open: boolean = false;

    public found: boolean = false;

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
