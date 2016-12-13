import { Pipe, PipeTransform } from '@angular/core';
import { Http, Response }                from '@angular/http';

@Pipe({
    name: 'getIndustry',
    pure: false
})
export class GetIndustryPipe implements PipeTransform {
    private result = [];
    private industry: string ;
    private preVaule ='';
    url = 'http://test.irenmai.top/index.php?s=/Home/Test/getIndustry';
    constructor(private _http: Http) { }
    transform(value: string): string{
        if(value !== this.preVaule){
            this.preVaule = value;
            this._http.get(this.url)
            .subscribe(
                res =>{
                    this.result = res.json();
                    this.result.filter(
                        element => {
                            if (element.id === value.toString())    {
                                this.industry = element.name;
                            }
                        }
                    );
                }
            );
        }
     return this.industry;
}
}

