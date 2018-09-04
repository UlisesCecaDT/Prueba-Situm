import { IonicModule } from 'ionic-angular';
import { NgModule } from '../../../node_modules/@angular/core';
import { NavbarComponent } from './navbar';

@NgModule({
    declarations:[
        NavbarComponent,
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        NavbarComponent
    ]
})

export class NavbarModule{}
