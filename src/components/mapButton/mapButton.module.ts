import { IonicModule } from 'ionic-angular';
import { NgModule } from '../../../node_modules/@angular/core';
import { MapButtonComponent } from './mapButton';

@NgModule({
    declarations:[
        MapButtonComponent,
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        MapButtonComponent
    ]
})

export class MapButtonModule{}
