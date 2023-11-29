import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/books';
  constructor(private hc: HttpClient) {}

  getData():Observable<any> {
    return this.hc.get(this.url);
  }
  postData(data:any)
  {
     return this.hc.post(`${this.url}`,data)
  }
  updateData(id:any,data:any) {
     return this.hc.put(`${this.url}/${id}`,data) 
  }
  deleteData(id: any)
  {
    return this.hc.delete(`${this.url}/${id}`)
  }
}
