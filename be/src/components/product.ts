import { IItemListInstraction } from 'src/interfaces/item-list-instractions';
import { IProduct } from 'src/interfaces/product.interface';

export const ProductComponent = (
  prodcut: IProduct,
  isDisabled?: boolean,
): IItemListInstraction => {
  return {
    images: [
      {
        name: 'Image',
        props: {
          src: prodcut.img,
          width: '145px',
          height: '72px',
        },
      },
    ],
    texts: [
      {
        name: 'TypographyText',
        props: {},
        children: prodcut.name,
      },
      {
        name: 'TypographyText',
        props: {},
        children: prodcut.size,
      },
    ],
    actions: [
      {
        name: 'Button',
        props: {
          $width: '150px',
          disabled: isDisabled,
        },
        children: 'Buy now',
      },
    ],
  };
};
