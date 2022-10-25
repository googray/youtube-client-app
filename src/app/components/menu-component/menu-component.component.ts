import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss'],
})
export default class MenuComponentComponent implements OnInit {
  hideSearch = true;

  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {}
}
