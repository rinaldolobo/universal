import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class API {

    constructor(private _http: Http) {

    }

    public static endpoints = {
        resource: 'https://dwello-in.appspot.com/_ah/api/resource/v1/',
        crm_resource: 'https://crm-dot-dwello-in.appspot.com/_ah/api/resource/v1/',
        crm: 'https://crm-dot-dwello-in.appspot.com/_ah/api/crm/v1/',
        pms_resource: 'https://pms-dot-dwello-in.appspot.com/_ah/api/resource/v1/',
        pms: 'https://pms-dot-dwello-in.appspot.com/_ah/api/pms/v1/',
        marketing_resource: 'https://marketing-dot-dwello-in.appspot.com/_ah/api/resource/v1/',
        marketing: 'https://marketing-dot-dwello-in.appspot.com/_ah/api/marketing/v1/',
        intelligence_resource: 'https://intelligence-dot-dwello-in.appspot.com/_ah/api/resource/v1/',
        intelligence: 'https://intelligence-dot-dwello-in.appspot.com/_ah/api/intelligence/v1/',
        ai: 'https://2.intelligence.dwello.in/analysis/'
    };

    api: 'https://2.intelligence.dwello.in/analysis/heuristics?name=space_optimization&product=2a56d21e-24a7-463a-be45-749a8b9bf82d'



    getPath(endpoint: string, method: string) {
        return API.endpoints[endpoint] + method;
    }



    private extractData(res) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw('error');
    }

    getdata(endpoint, name, product): Observable<Object> {

        var path = this.getPath(endpoint, 'heuristics') + '?name=' + name + '&product=' + product;
        return this._http.get(path).map(this.extractData);
    }

}