import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lib-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  	showFilters: boolean = false;
    showSearch: boolean = false;
    constructor(){}
  	ngOnInit() {}

    toggleFilters(){
      this.showFilters = !this.showFilters;
    }
    toggleSearch(){
      this.showSearch = !this.showSearch;
    }

    clearFilters(){
      console.log("Filters hidden now")
      this.showFilters = false; 

    }
    closeSearch(){
       this.showSearch = false; 
    }
}
