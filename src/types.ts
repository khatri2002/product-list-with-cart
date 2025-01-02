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
  price: number;
  image: string;
}>;

export type DessertsSectionProps = {
  cart: Cart;
  handleSetCart: (cart: Cart) => void;
};

export type CartSectionProps = {
  cart: Cart;
  handleSetCart: (cart: Cart) => void;
  handleSetOpenModal: (val: boolean) => void;
};

export type ModalProps = {
  cart: Cart;
  open: boolean;
  handleSetOpenModal: (val: boolean) => void;
  handleSetCart: (cart: Cart) => void;
};
