import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | getSex
 * Example:
 *   {{ 0 |  getSex}}
 *   formats to: 女
*/
@Pipe({
    name: 'getSex'
})
export class GetSexPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
        case 0:
            return '女';
        case 1:
            return '男';
        default: return '未知';
    }
  }
}
