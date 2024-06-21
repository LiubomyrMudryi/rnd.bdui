import { Injectable } from '@nestjs/common';
import { ProductComponent } from './components/product';
import { data } from './data/data';
import { IItemListInstraction } from './interfaces/item-list-instractions';

@Injectable()
export class AppService {
  getItems(): IItemListInstraction[] {
    // fetch data
    const products = data.items;
    // generate instructions for products
    const instructions = products.map((prodcut) => {
      const component = ProductComponent(prodcut);
      if (prodcut.id === '2' || prodcut.id === '5') {
        component.actions.push({
          name: 'Button',
          props: {
            $width: '150px',
            $margin: '0 0 0 20px',
            $background: 'firebrick',
            $color: 'greenyellow',
            $fontWeight: 'bold',
          },
          children: 'Add to cart',
        });
      }
      if (prodcut.id === '2') {
        component.texts[0].props = {
          $color: 'red',
          $fontWeight: 'bold',
          $fontColor: '20px',
        };
      }

      return component;
    });

    return instructions;
  }
}
