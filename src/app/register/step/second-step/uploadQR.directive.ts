import { Directive, OnChanges, Input, SimpleChanges } from '@angular/core';

@Directive({ selector: '[uploadQR]' })
export class UploadQRDirective {
     @Input() avatar: String;
    ngOnChanges(changes: SimpleChanges) {

  }
}
