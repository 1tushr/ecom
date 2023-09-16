import phone from "./assets/phone.png";
import laptop from "./assets/laptop.png";
import tablet from "./assets/tablet.png";
import watch from "./assets/watch.png";
import buds from "./assets/buds.png";
import desktop from "./assets/desktop.webp";
import pencil from "./assets/pencil.png";
import mini from "./assets/mini.png";
import speaker from "./assets/speaker.png";
// import keyboard from "./assets/keyboard.png";
import vision from "./assets/vision.png";

export const PRODUCTS = [
  {
    id: 1,
    productName: "iPhone 13 Pro",
    description: "The latest iPhone with Pro features.",
    category: "Smartphones",
    price: 999.99,
    productImage:  phone ,
    rating: 4.7,
  },
  {
    id: 2,
    productName: "MacBook Air",
    description: "A thin and lightweight laptop with M1 chip.",
    category: "Laptops",
    price: 1099.99,
    productImage:  laptop ,
    rating: 4.9,
  },
  {
    id: 3,
    productName: "iPad Pro",
    description: "Powerful tablet with Liquid Retina XDR display.",
    category: "Tablets",
    price: 799.99,
    productImage: tablet ,
    rating: 4.8,
  },
  {
    id: 4,
    productName: "Apple Watch Series 7",
    description: "The latest smartwatch with fitness features.",
    category: "Wearables",
    price: 399.99,
    productImage:  watch,
    rating: 4.6,
  },
  {
    id: 5,
    productName: "AirPods Pro",
    description: "Noise-cancelling wireless earbuds.",
    category: "Audio",
    price: 249.99,
    productImage:  buds ,
    rating: 4.5,
  },
  {
    id: 6,
    productName: "iMac 24-inch",
    description: "All-in-one desktop with M1 chip.",
    category: "Computers",
    price: 1299.99,
    productImage:  desktop ,
    rating: 4.8,
  },
  {
    id: 7,
    productName: "Apple Vision Pro",
    description: "The Powerful VR Headset",
    category: "Accessories",
    price: 99.99,
    productImage:  vision ,
    rating: 4.6,
  },
  {
    id: 8,
    productName: "Mac Mini",
    description: "Compact desktop computer with M1 chip.",
    category: "Computers",
    price: 699.99,
    productImage: mini ,
    rating: 4.6,
  },
  {
    id: 9,
    productName: "HomePod Mini",
    description: "Smart speaker with Siri integration.",
    category: "Audio",
    price: 99.99,
    productImage:  speaker,
    rating: 4.4,
  },
  // {
  //   id: 10,
  //   productnName: "Apple Vision Pro",
  //   description: "The Powerful VR Headset",
  //   category: "Accessories",
  //   price: 99.99,
  //   productImage:  vision ,
  //   rating: 4.6,
  // },
];

