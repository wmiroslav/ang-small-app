import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mailsfilter'
    // pure: false
})
export class MailsPipe implements PipeTransform {
    transform(items: any[], filter: String): any {
        if (!items || !filter) {
            return items;
        }
        filter = filter.toLocaleLowerCase();
        return items.filter(item => item.text.toLocaleLowerCase().indexOf(filter) !== -1);
    }
}
