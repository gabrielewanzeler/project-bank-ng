import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url: string = "http://192.168.0.105:8080/login";

  constructor(private httpcliente: HttpClient) { }

  public login(username: string, pasword: string): Observable<boolean> {


    const user = {
      username: username,
      password: pasword
    };

    return this.httpcliente.post(this.url, user).pipe(
      map((response: any) => {
        return response === 'OK';
      }),
      catchError(error => {
        console.error('Erro durante a requisição de login', error);
        return of(false); // Retorna um Observable indicando que o login falhou
      })
    );
  }
}
