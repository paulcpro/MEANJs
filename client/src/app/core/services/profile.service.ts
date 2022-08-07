import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  profiles$!: Observable<Profile[]>;
  profiles: Profile[] = []
  profile$!: Observable<Profile>;

    constructor(private http: HttpClient) {}

    getAllProfiles(): Observable<Profile[]>
    {
      return this.http.get<Profile[]>('http://localhost:3000/profiles');
    }

    getProfileById(profileId: number = 0): Observable<Profile>
    {
      return this.http.get<Profile>(`http://localhost:3000/profiles/${profileId}`);
    }

    addProfileFromForm(formValue: { title: string, description: string, imageUrl: string, location?: string }) : Observable<Profile>
    {
      return this.getAllProfiles().pipe(
        map(Profiles => [...Profiles].sort((a: Profile,b: Profile) => a.id - b.id)),
        map(sortedProfile => sortedProfile[sortedProfile.length - 1]),
        map(previousProfile => ({
          ...formValue,
          id: previousProfile.id + 1
        })),
        switchMap(newProfile =>
            this.http.post<Profile>(`http://localhost:3000/profiles/`, newProfile)
          )
      );
    }

}
