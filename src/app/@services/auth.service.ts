import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../../environments/config";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    entityID: string,
    address: string,
    hash: string
  ): Observable<any> {
    if (!firstName || !lastName || !entityID || !email || !address || !hash)
      return;
    return this.http.post(
      API_URL + "register",
      {
        firstName,
        lastName,
        email,
        entityID,
        address,
        hash,
      },
      httpOptions
    );
  }
}
