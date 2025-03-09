import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private api =
  'https://crudcrud.com/api/954c9497520649388ad2686f31cf42f0/contact';

  constructor(private httpClient: HttpClient) {
    // this.httpClient.
  }


  save(message:any): Observable<any> {
    return this.httpClient.post(this.api, message);
  }
}
