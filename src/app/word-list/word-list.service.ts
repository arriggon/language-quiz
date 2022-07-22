import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from '../store/models/word.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordListService {

  constructor(private http: HttpClient) { }

  getWords(): Observable<Array<Word>> {
    // TODO Load from db

    return of();
  }
}
