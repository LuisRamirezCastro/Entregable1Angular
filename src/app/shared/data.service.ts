import { Injectable } from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions,
    URLSearchParams,
    Response,
    ResponseContentType
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
    constructor(
        public http: Http
    ) { }

    public search(url: string, element: any): Observable<any> {
    	console.log('Data.Service: Search operation on the way...');
        let options: RequestOptions;
        let params: URLSearchParams;

        params = new URLSearchParams();

        for (let key in element) {
            if (element.hasOwnProperty(key)) {
                params.set(key, element[key]);
            }
        }

        options = new RequestOptions({ search: params });
        return this.http.get(url, options)
            .map(response => response.json());
    }


    public post(url: string, element: any): Promise<any> {
    	console.log('Data.Service: Post operation on the way...');
        console.log(element);
        return this.http.post(url, JSON.stringify(element))
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public put(url: string, element: any): Promise<any> {
    	console.log('Data.Service: Put operation on the way...');
        console.log('element',element);
        return this.http.put(url, JSON.stringify(element))
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public postFile(url: string, element: any): Promise<any> {
    	console.log('Data.Service: Post File operation on the way...');
        return this.http.post(url, JSON.stringify(element), { responseType: ResponseContentType.Blob })
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public getAll(url: string): Promise<any[]> {
    	console.log('Data.Service: Get All operation on the way...');
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any[])
            .catch(this.handleError);
    }

    // Observable
    // public get(url: string): Observable<any> {
    //     console.log('url',url);
    //     return this.http.get(url)
    //         .map(response => response.json())
    //         .catch((e: any) => { console.log(e); return Observable.throw(e || 'Internal Server error');});
    // }

    // Promise - One time execution
    public get(url: string): Promise<any> {
    	console.log('Data.Service: Get operation on the way...');
        console.log('url',url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    public delete(url: string, element?: any): Promise<any> {
    	console.log('Data.Service: Delete operation on the way...');
        if (element) {
            return this.http.delete(url, new RequestOptions({ body: element }))
                .toPromise()
                .then(response => response.json() as any)
                .catch(this.handleError);
        } else {
            return this.http.delete(url)
                .toPromise()
                .then(response => response.json() as any)
                .catch(this.handleError);
        }
    }

    private handleError(error: any): Promise<any> {
    	console.log('Data.Service: Handle Error operation on the way...');
        return Promise.reject(error.message || error);
    }
}