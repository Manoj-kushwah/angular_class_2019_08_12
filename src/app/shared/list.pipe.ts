import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'list'
}) export class ListPipe implements PipeTransform{
    transform(value: any[], ...arg: any): any[]{
        console.log('ListPipe: value: ', value);
        value.sort();
        return value;
    }
}