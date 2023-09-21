import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private http:HttpClient) { }
//connect to backend
apiUrl = "http:localhost:4200/table_name";

//get all data

getAllData():Observable<any>{
  return this.http.get('${this.apiUrl}');
}

}