import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getIndustry'
})
export class GetIndustryPipe implements PipeTransform {
    private industry: string;
    transform(value: string, industrys: any): string {
      industrys.filter(
          element => {
              if (element.id === value.toString()) {
                  this.industry = element.name;
              }
          }
      );
     return this.industry;
}
}

