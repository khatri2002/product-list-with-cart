export type Items = Array<{
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}>;

export type Cart = Array<{
  name: string;
  quantity: number;
}>;

export type DessertsSectionProps = {
  cart: Cart;
  handleSetCart: (cart: Cart) => void;
};
