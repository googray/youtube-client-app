import { Component, Input, OnInit } from '@angular/core';
import { IArtist } from 'src/app/shared/interface';

@Component({
  selector: 'app-droll',
  templateUrl: './droll.component.html',
  styleUrls: ['./droll.component.scss'],
})
export default class DrollComponent implements OnInit {
  @Input() artist: IArtist = {};

  // @Output()
  // public isShown = true;

  constructor() {
    console.log('22: ', this.artist);
  }

  // eslint-disable-next-line class-methods-use-this
  getMoreInfo(): void {
    console.log('click2');
  }

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {}
}
