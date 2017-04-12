import { Component, OnInit } from '@angular/core';
import * as de from './translations/de';
import { TranslationService } from './services/translationService';
import { Language } from './model/constant/language';

@Component({
    moduleId: __moduleName,
    selector: 'app',
    templateUrl: 'app.html',
})
export class AppComponent implements OnInit {

    public brandLogoSource: string = 'img/xn_logo_symbol_gray.png';
    public brandName: string = 'xnoname';

    public constructor(private _translationService: TranslationService) {
    }

    public ngOnInit(): void {
        this._translationService.addTranslation(Language.DE, de);
    }

}
