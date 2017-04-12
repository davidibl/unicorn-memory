import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translationService';

@Pipe({
    name: 'secondsToString',
    pure: false,
})
export class SecondsPipe implements PipeTransform {

    constructor(private _translationService: TranslationService) {
    }

    public transform(seconds: number): string {
        let date = new Date(null);
        date.setSeconds(seconds);
        let timstring = date.toISOString().substr(11, 8);
        return timstring;
    }
}
