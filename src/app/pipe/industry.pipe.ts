import { Pipe, PipeTransform } from '@angular/core';
import { Http }                from '@angular/http';

@Pipe({
    name: 'getIndustry'
})
export class GetIndustryPipe implements PipeTransform {
    private result = [];
    industry: string;
    url = 'http://test.irenmai.top/index.php?s=/Home/Test/getIndustry';
    constructor(private _http: Http) { }
    transform(value: string): string {
        this._http.get(this.url)
        .subscribe(
            result => {
                this.result = result.json();
                this.result.filter(
                    element => {
                         if (element.id === value.toString())    {
                            this.industry = element.name;
                         }
                    }
                );
            }
            );
            return this.industry;
}
}

