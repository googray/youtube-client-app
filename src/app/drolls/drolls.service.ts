import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import { IArtist } from '../shared/interface';

@Injectable({
  providedIn: 'root',
})
export default class DrollsService {
  // public artists: IArtist[] = [
  //   { id: '21' },
  //   { id: '22' },
  //   { id: '23' },
  //   { id: '24' },
  //   { id: '25' },
  //   { id: '26' },
  // ];
  // public artists: {} = {};

  // eslint-disable-next-line operator-linebreak
  url: string =
    'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb';

  getArtists() {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        const artists = response.results;
        return artists.map((artist: any) => ({
          name: `${artist.name.first} ${artist.name.last}`,
          image: artist.picture.large,
        }));
        // eslint-disable-next-line @typescript-eslint/comma-dangle
      })
    );
  }

  constructor(private http: HttpClient) {}
}
