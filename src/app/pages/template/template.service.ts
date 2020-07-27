import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class TemplateService {


    private url = 'https://login-app-eef87.https://i8x70qcdvl.execute-api.us-east-1.amazonaws.com/desarrollo/registroseguro/registrarpersonavisita.com';

    constructor(private http: HttpClient){}

    save (body: any){

        let headers = new HttpHeaders()
        headers = headers.set('apikey', 'AAlmASbQ5Q4aqAgE7gQ4HaC84h2GeEcE2ZALG15K');
        return this.http.post(this.url, body, {headers});
    }
}
