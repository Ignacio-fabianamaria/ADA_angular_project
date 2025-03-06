import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private api =
  'https://crudcrud.com/api/03b44a544c654a49823dbae2eb813ab2/contact';

  constructor(private httpClient: HttpClient) {
    // this.httpClient.
  }


  save(message:any): Observable<any> {
    return this.httpClient.post(this.api, message);
  }
}
