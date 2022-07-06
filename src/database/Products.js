import { v4 as uuid } from "uuid";

export const sizes = ["S", "M", "L", "XL"];
export const products = [
  {
    id: uuid(),
    brand: "HIGHLANDER",
    description: "Men Slim Fit Checkered Spread Collar Casual Shirt",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/kfoapow0-0/shirt/1/3/i/s-hlsh009325-highlander-original-imafw2ghqzwrryn2.jpeg?q=50",
    price: {
      original: 999,
      discounted: 519,
      discount: 48,
    },
    size: ["S", "M", "L", "XL"],
    gender: "Male",
  },
  {
    id: uuid(),
    brand: "AAYU",
    description: "Women Fit and Flare Multicolor Dress",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/kp8ntzk0/dress/r/i/z/s-aa-0119-boho-long-dress-aayu-original-imag3ghzyktnj3bz.jpeg?q=50",
    price: {
      original: 1099,
      discounted: 499,
      discount: 54,
    },
    size: ["S", "M", "L", "XL"],
    gender: "Female",
  },
  {
    id: uuid(),
    brand: "JOCKEY",
    description: "Solid Men Round Neck Black T-Shirt",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/kr0ynbk0/t-shirt/h/q/y/l-am95-0103-black-jockey-original-imag4wtygsxrfufg.jpeg?q=50",
    price: {
      original: 749,
      discounted: 749,
      discount: 0,
    },
    size: ["S", "M", "L"],
    gender: "Male",
  },
  {
    id: uuid(),
    brand: "EYEBOGLER",
    description: "Printed Men Hooded Neck Black, Blue T-Shirt",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/l48s9zk0/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv.jpeg?q=50",
    price: {
      original: 999,
      discounted: 519,
      discount: 48,
    },
    size: ["S", "M", "L", "XL"],
    gender: "Male",
  },
  {
    id: uuid(),
    brand: "LEVIS",
    description: "Printed Women Round Neck Orange T-Shirt",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/kpedle80/t-shirt/0/e/x/s-57977-0073-levi-s-original-imag3nf5hatr6tuz.jpeg?q=50",
    price: {
      original: 1199,
      discounted: 516,
      discount: 56,
    },
    size: ["S", "M", "L", "XL"],
    gender: "Female",
  },

  {
    id: uuid(),
    brand: "FOXTER",
    description: "Solid Men Blue, Grey Track Pants",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/l1jmc280/track-pant/f/q/v/l-solid-men-blue-and-dark-grey-track-pant-foxter-original-imagd36mzstfm6ez.jpeg?q=50",
    price: {
      original: 1999,
      discounted: 448,
      discount: 77,
    },
    size: ["S", "M", "L", "XL"],
    gender: "Male",
  },
  {
    id: uuid(),
    brand: "TOKYO TALKIES",
    description: "Women A-line White Dress",
    prodImage:
      "https://rukminim1.flixcart.com/image/880/1056/kkprmvk0/dress/r/n/e/s-ttj6005591-tokyo-talkies-original-imafzztyjtefm3sk.jpeg?q=50",
    price: {
      original: 1549,
      discounted: 526,
      discount: 66,
    },
    size: ["S", "M", "L"],
    gender: "Female",
  },
];
