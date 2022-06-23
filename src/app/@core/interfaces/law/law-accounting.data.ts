import { Observable } from 'rxjs';

export abstract class LawAccountingData {
    abstract get(id: string): Observable<any>;
    abstract update(id: string, update): Observable<any>;
}
