import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Login } from "../models/login.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly http = inject(HttpClient);

  login(body: Login): Observable<Login> {
    return this.http.post<Login>(`${environment.baseURL}/api/login`, body);
  }
}
