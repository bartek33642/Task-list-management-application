import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
    getAll(){
      return this.http.get(this.url + '/api/tasks');
    }
    getById(id: string) {
      return this.http.get(this.url + '/api/task/' + id);
    }

    addTask(data: any){
      return this.http.post(this.url + '/api/task', data);
    }
    deleteTask(id: string) {
  return this.http.delete(`${this.url}/api/task/${id}`);
}
    updateTask(id: string, data: any) {
      return this.http.put(`${this.url}/api/task/${id}`, data);
    }
}
