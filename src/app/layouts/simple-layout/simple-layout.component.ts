import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.css']
})
export class SimpleLayoutComponent implements OnInit {

  constructor() { }

  isLoading: boolean = true;
  ngOnInit() {
  	this.isLoading = false;
  }

}
