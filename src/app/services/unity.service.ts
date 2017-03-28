import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UnityService {
    constructor(private http: Http) { }
    getUnityResult(): Observable<any> {
        return this.http.get("http://localhost:3000/unitesty")
            .map((response: Response) => {
                return response.json();
            });
    }
}