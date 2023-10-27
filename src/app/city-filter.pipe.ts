import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(data: any[], cityFilter: string): any[] {
    if (!data || !cityFilter) {
      return data;
    }

    return data.filter(item => item.address.city.toLowerCase().includes(cityFilter.toLowerCase()));
  }

}
