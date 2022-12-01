import { Component, OnInit, Output } from '@angular/core';
import { IArtist } from '../shared/interface';
import DrollsService from './drolls.service';

@Component({
  selector: 'app-drolls',
  templateUrl: './drolls.component.html',
  styleUrls: ['./drolls.component.scss'],
  providers: [DrollsService],
})
export default class DrollsComponent implements OnInit {
  public artists: IArtist[] = [];

  @Output()
  public isShown = true;

  constructor(private drollsService: DrollsService) {}

  ngOnInit(): void {
    this.drollsService.getArtists().subscribe((artists) => {
      console.log(artists);
      this.artists = artists;
    });
  }
}
