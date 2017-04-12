import {Component, Input} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'centered-menu-header',
    templateUrl: 'centeredMenuHeader.html',
})
export class CenteredMenuHeaderComponent {

    @Input()
    public brandLogoSource: string;

    @Input()
    public brandName: string;

}
