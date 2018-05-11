import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// fake API
@Injectable()
export class ApiService {

    dummyData = [
        {
            id: 1,
            title: 'Purchase order',
            text: 'Please release purchase order 4500049773',
            details: 'Purchase Order Details Purchase Order Details Purchase Order Details Purchase',
            type: 'Working-System',
            size: 'Medium'
        },
        {
            id: 2,
            title: 'Purchase order 4500049772',
            text: 'Please release purchase order 4500049772',
            details: 'Working-System Purchase Order Details Purchase Order Details Purchase Order Details Purchase',
            type: 'Working-System',
            size: 'Medium'
        },
        {
            id: 3,
            title: 'Purchase order 4500049771',
            text: 'Please release purchase order 4500049771',
            details: 'Purchase Order Details Purchase Order Details Purchase Order Details Purchase',
            type: 'Working-System',
            size: 'Medium'
        },
        {
            id: 4,
            title: 'Release of contract 46000022734',
            text: 'Release of contract 46000022734',
            details: 'Release of contract Purchase Order Details Purchase Order Details Purchase Order Details Purchase',
            type: 'Working-System',
            size: 'Medium'
        },
        {
            id: 5,
            title: 'Release of contract',
            text: 'Release of contract 46000022733',
            details: 'Medium Release of contract Purchase Order Details Purchase Order Details Purchase Order Details Purchase',
            type: 'Working-System',
            size: 'Medium'
        },
        {
            id: 6,
            title: 'Release of contract 46000022732',
            text: 'Release of contract 46000022732',
            details: 'Medium Purchase Order Details Purchase Order Details Purchase Order Details Purchase',
            type: 'Working-System',
            size: 'Medium'
        }
    ];

    getMails() {
        // hardcoded data
        return Observable.of(this.dummyData);
    }

}
