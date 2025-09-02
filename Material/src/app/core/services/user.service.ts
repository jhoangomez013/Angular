import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { CreateUser, User } from "../models/user";


 const API = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http:HttpClient) {}

      // Obtiene la lista de usuarios
    getUsers() : Observable<User[]> {
        return this.http.get<User[]>(API)
        .pipe(
          
        catchError(this.handleError)); 
    }   

     // Crea un nuevo usuario
createUser(dto: CreateUser): Observable <User> { 
    return this.http.post<User>(API,dto)
    .pipe(catchError(this.handleError));
 }

 // Maneja los errores de la API
private handleError(err: HttpErrorResponse) {
  const errorMessage = err.error?.message || `Error ${err.status}: ${err.statusText}`;
  return throwError(() => new Error(errorMessage));
}


}