import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {
  isLoading: boolean = true;
  constructor() { }

  ngOnInit() {
  	this.isLoading = false;
  }

}
