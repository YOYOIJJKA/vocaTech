import { Injectable } from '@angular/core';
import { Client } from '../Interfaces/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const URL = 'https://vocatechback-yoyoijjka.amvera.io/';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private httpClient: HttpClient) {}

  sendMail(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(URL + 'sendmail', client);
  }
}
