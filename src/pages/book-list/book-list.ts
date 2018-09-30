import { Component, OnInit } from "@angular/core";
import { AllServices } from "../../services/services";
import { ModalController, MenuController } from "ionic-angular";
import { LendBookPage } from "./lend-book/lend-book";

@Component({
    selector: 'page-book-list',
    templateUrl: 'book-list.html'
})
export class BookListPage implements OnInit {

    livres: any[];

    constructor(private modalCrtl: ModalController, 
                private allServices: AllServices, 
                private menuCtrl: MenuController){}

    ngOnInit(){
        this.livres = this.allServices.books.slice();
    }

    onLoadLivre(index: number ) {
        let modal = this.modalCrtl.create(LendBookPage, {index: index});
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}