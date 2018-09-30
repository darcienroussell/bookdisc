import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { AllServices } from "../../../services/services";

@Component({
    selector: 'page-lend-cd',
    templateUrl: 'lend-cd.html'
})
export class LendCdPage {

    index: number;
    element: string;
    disque: {
        title: string;
        author: string;
        etat: boolean;
    };

    constructor(public navParams: NavParams, 
                private viewCrtl: ViewController, 
                private allServices: AllServices) {
    }

    ngOnInit(){
        this.index = this.navParams.get('index');
        this.disque = this.allServices.disques[this.index];
    }

    onToggleCd(){
        this.element = 'disques';
        this.allServices.elementStatus(this.index, this.element);
      }

    onDismiss() {
        this.viewCrtl.dismiss();
    }

}