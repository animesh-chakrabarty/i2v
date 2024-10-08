// src/app/leaderboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaderBoard } from '../models/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {
  private apiUrl = 'http://localhost:5182/leaderboard';

  constructor(private http: HttpClient) {}

  // get leaderboard
  getLeaderBoard(): Observable<LeaderBoard[]> {
    return this.http.get<LeaderBoard[]>(this.apiUrl);
  }
}
