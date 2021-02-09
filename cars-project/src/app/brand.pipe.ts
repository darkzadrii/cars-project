import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandcar'
})
export class BrandPipe implements PipeTransform {

  transform(items: any, brand?: any[], doors?: any, power?: any[], name?: string): any {

    if(brand){
      items = items.filter((item) => item.brand === brand)
    }

    if(doors){
      items = items.filter((item) => item.doors == doors)
    }

    if(power){
      items = items.filter((item) => item.typePower == power)
    }

    if(name){
      items = items.filter((item) => item.model.toLowerCase().match(name.toLowerCase()))
    }

    return items;
  }

}
