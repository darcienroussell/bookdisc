import { Component, OnInit } from "@angular/core";
import { AllServices } from "../../services/services";
import { LendCdPage } from "./lend-cd/lend-cd";
import { ModalController, MenuController } from "ionic-angular";

@Component({
    selector: 'page-cd-list',
    templateUrl: 'cd-list.html'
})
export class CdListPage implements OnInit {

    disques: any[];

    constructor(private modalCrtl: ModalController, 
                private allServices: AllServices, 
                private menuCtrl: MenuController) {}

    ngOnInit(){
        this.disques = this.allServices.disques.slice();
    }

    onLoadCd(index: number ) {
        let modal = this.modalCrtl.create(LendCdPage, {index: index});
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

}