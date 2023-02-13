import { ArticleDto } from './article.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    baseAPI='http://localhost:4000/api/article';
  constructor(private _http: HttpClient) { }
  getAllArticles(): Observable<ArticleDto[]> {
    return this._http.get<ArticleDto[]>(this.baseAPI);
  }
}
