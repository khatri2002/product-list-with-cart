import {
  ImageBaklavaDesktop,
  ImageBaklavaMobile,
  ImageBaklavaTablet,
  ImageBaklavaThumbnail,
  ImageBrownieDesktop,
  ImageBrownieMobile,
  ImageBrownieTablet,
  ImageBrownieThumbnail,
  ImageCakeDesktop,
  ImageCakeMobile,
  ImageCakeTablet,
  ImageCakeThumbnail,
  ImageCremeBruleeDesktop,
  ImageCremeBruleeMobile,
  ImageCremeBruleeTablet,
  ImageCremeBruleeThumbnail,
  ImageMacaronDesktop,
  ImageMacaronMobile,
  ImageMacaronTablet,
  ImageMacaronThumbnail,
  ImageMeringueDesktop,
  ImageMeringueMobile,
  ImageMeringueTablet,
  ImageMeringueThumbnail,
  ImagePannaCottaDesktop,
  ImagePannaCottaMobile,
  ImagePannaCottaTablet,
  ImagePannaCottaThumbnail,
  ImageTiramisuDesktop,
  ImageTiramisuMobile,
  ImageTiramisuTablet,
  ImageTiramisuThumbnail,
  ImageWaffleDesktop,
  ImageWaffleMobile,
  ImageWaffleTablet,
  ImageWaffleThumbnail,
} from "../assets/images";
import { Items } from "./type";

export const items: Items = [
  {
    image: {
      thumbnail: ImageWaffleThumbnail,
      mobile: ImageWaffleMobile,
      tablet: ImageWaffleTablet,
      desktop: ImageWaffleDesktop,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: ImageCremeBruleeThumbnail,
      mobile: ImageCremeBruleeMobile,
      tablet: ImageCremeBruleeTablet,
      desktop: ImageCremeBruleeDesktop,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: ImageMacaronThumbnail,
      mobile: ImageMacaronMobile,
      tablet: ImageMacaronTablet,
      desktop: ImageMacaronDesktop,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: ImageTiramisuThumbnail,
      mobile: ImageTiramisuMobile,
      tablet: ImageTiramisuTablet,
      desktop: ImageTiramisuDesktop,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: ImageBaklavaThumbnail,
      mobile: ImageBaklavaMobile,
      tablet: ImageBaklavaTablet,
      desktop: ImageBaklavaDesktop,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: ImageMeringueThumbnail,
      mobile: ImageMeringueMobile,
      tablet: ImageMeringueTablet,
      desktop: ImageMeringueDesktop,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: ImageCakeThumbnail,
      mobile: ImageCakeMobile,
      tablet: ImageCakeTablet,
      desktop: ImageCakeDesktop,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: ImageBrownieThumbnail,
      mobile: ImageBrownieMobile,
      tablet: ImageBrownieTablet,
      desktop: ImageBrownieDesktop,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: ImagePannaCottaThumbnail,
      mobile: ImagePannaCottaMobile,
      tablet: ImagePannaCottaTablet,
      desktop: ImagePannaCottaDesktop,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
