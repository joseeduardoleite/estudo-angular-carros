import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Carro } from "./carro";
import { Observable } from "rxjs";

@Injectable()
export class CarroService {

    constructor(private http: HttpClient) { }
    
    protected UrlServiceV1: string = "http://localhost:3000";

    obterCarros() : Observable<Carro[]> {
        return this.http.get<Carro[]>(this.UrlServiceV1 + "/carros");
    }
}