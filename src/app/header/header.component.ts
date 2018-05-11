import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // toggle menu on small devices
  isMenuOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
