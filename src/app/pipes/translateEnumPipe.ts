import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translationService';

@Pipe({
    name: 'translateEnum',
    pure: false,
})
export class TranslateEnumPipe implements PipeTransform {

    constructor(private _translationService: TranslationService) {
    }

    public transform(key: string, name: string): string {
        let finalKey = (name !== null) ? `ENUMS.${name}.${key}` : key;
        return this._translationService.translateDefault(finalKey, key);
    }
}