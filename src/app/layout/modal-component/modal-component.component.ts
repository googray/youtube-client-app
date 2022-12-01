import { Component, Input, OnInit } from '@angular/core';
import { IArtist } from 'src/app/shared/interface';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
})
export default class ModalComponentComponent implements OnInit {
  @Input() artist: IArtist = {};

  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {}
}
