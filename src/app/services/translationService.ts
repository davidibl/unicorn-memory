import { Injectable } from '@angular/core';
import { Language } from '../model/constant/language';

@Injectable()
export class TranslationService {

    private _registeredLanguagesAndTranslations = new Map<string, Map<string, string>>();

    public addTranslation(language: string, translationObject: Object) {

        let translations = this._registeredLanguagesAndTranslations[language];

        if (!translations) {
            this._registeredLanguagesAndTranslations[language] = translations = new Map<string, string>();
        }

        this.addTranslationValue(translations, translationObject, '');
    }

    public translateDefault(key: string, defaultValue?: string): string {
        let translations = this._registeredLanguagesAndTranslations[Language.DE];
        let translation = translations && translations[key]
            || defaultValue;
        return translation;
    }

    private addTranslationValue(translations: Map<string, string>, translationObject: Object, prefix: string) {
        for (const key in translationObject) {
            if (translationObject.hasOwnProperty(key)) {
                const value = translationObject[key];
                if (typeof value === 'string') {
                    translations[prefix + key] = value;
                } else {
                    this.addTranslationValue(translations, value, prefix + key + '.');
                }
            }
        }
    }

}
