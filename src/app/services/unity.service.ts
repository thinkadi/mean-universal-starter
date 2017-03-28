import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from "../../environments/environment";

@Injectable()
export class UnityService {
    constructor(private http: Http) { }
    getUnityResult(): Observable<any> {
        return this.http.get(environment.baseUrl + "/unitesty")
            .map((response: Response) => {
                return response.json();
            });
    }
}