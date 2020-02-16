import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
 
@Pipe({
  name: 'filterParent'
})
export class FilterParentPipe implements PipeTransform {
 
    transform(value: string, keyName: string, parentId: any, ): string {
        return _.filter(value, function (o) {
            return o[keyName] === +parentId;
        });
    }
 
}