import { Component, OnInit } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { AllServices } from "../../../services/services";

@Component({
    selector: 'page-lend-book',
    templateUrl: 'lend-book.html'
})
export class LendBookPage implements OnInit{

    index: number;
    element: string;
    livre: {
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
        this.livre = this.allServices.books[this.index];
    }

    onTogglelivre(){
        this.element = 'books';
        this.allServices.elementStatus(this.index, this.element);
      }

    onDismiss() {
        this.viewCrtl.dismiss();
    }
}