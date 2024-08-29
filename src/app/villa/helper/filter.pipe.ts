import { Pipe, PipeTransform } from '@angular/core';
import { Villa } from '../Models/Villa.Model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(villas: Villa[], filterText: string) {
    if (villas.length === 0 || filterText === '') {
      return villas;
    } else {
      const filterValue = parseFloat(filterText);
      return villas.filter((villa) => {
        // return villa.name.toLowerCase() === filterText.toLowerCase();
        const villaRate = parseFloat(villa.rate.toString());
        const nameMatch = villa.name.toLowerCase().includes(filterText.toLowerCase());
        return !isNaN(villaRate) && villaRate == filterValue || nameMatch;
      })
    }
  }

}
