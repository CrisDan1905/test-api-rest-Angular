import { Component, OnInit } from '@angular/core';
declare var jQuery;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() {
    console.log(jQuery('div'));

   }

  ngOnInit() {
    jQuery('.button-collapse').sideNav();
  }




}
