import { Injectable } from '@angular/core';
import { ExternalHttpService } from './external-http.service';
import { ConfigurationService } from '../../../../@services/configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmailApi {
    private readonly featureName: string = 'sms-iq';
    private readonly apiController: string = 'Email';
    private api: ExternalHttpService;

    constructor(private http: HttpClient, private config: ConfigurationService) {
        this.api = new ExternalHttpService(this.http, this.config, this.featureName);
    }

    get(): Observable<any> {
        const response = this.api.get(`${this.apiController}`);
        return response;
    }

    getEmails(phoneNumber: string) {
        const response = this.api.get(`${this.apiController}/${phoneNumber}`);
        return response;
    }
}
