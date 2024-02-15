import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor(private http : HttpClient) { }
//   getUsersData(){
//     return this.http.get<any>(`http://localhost:3000/data`)
// }
}
