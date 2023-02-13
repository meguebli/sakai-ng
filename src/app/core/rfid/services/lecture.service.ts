import { Lecture } from './../models/lecture';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  Base_API_URL = 'http://localhost:4000/api/lecture/all/200';
  constructor(private _http:HttpClient) { }
  getAllLectures():Observable<Lecture[]> {
    return this._http.get<Lecture[]>(this.Base_API_URL);
}
}
