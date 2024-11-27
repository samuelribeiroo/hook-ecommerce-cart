import type { ProductCardProps } from "../@types";

export const currencies = [
  { code: "BRL", symbol: "R$", name: "Real" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "USD", symbol: "$", name: "Dollar" },
  { code: "JPY", symbol: "¥", name: "Yen" },
];


export const products: ProductCardProps[] = [
  {
    data: { id: 0, name: "What The Dunk CO.JP", price: 289.91, quantity: 12 },
    properties: { ratingRange: 3, imageSrc: "https://imgnike-a.akamaihd.net/360x360/07538815A5.jpg" },
  },
  {
    data: { id: 1, name: "Phantom Light Bone", price: 189.9, quantity: 10 },
    properties: { ratingRange: 4, imageSrc: "https://imgnike-a.akamaihd.net/360x360/07499351A5.jpg" },
  },
  {
    data: { id: 2, name: "Nike SB Dunk Low Pro", price: 149.95, quantity:  5},
    properties: { ratingRange: 4, imageSrc: "https://imgnike-a.akamaihd.net/360x360/075540BRA6.jpg" },
  },
  {
    data: { id: 3, name: "Burnt Sunrise", price: 350.0, quantity:  9},
    properties: { ratingRange: 4, imageSrc: "https://imgnike-a.akamaihd.net/360x360/074799A1A5.jpg" },
  },
  {
    data: { id: 4, name: "University Blue", price: 120.0, quantity:  14},
    properties: { ratingRange: 5, imageSrc: "https://imgnike-a.akamaihd.net/360x360/07554153A6.jpg" },
  },
  {
    data: { id: 5, name: "Jordan Spizike Low", price: 485.0, quantity: 21 },
    properties: { ratingRange: 4, imageSrc: "https://imgnike-a.akamaihd.net/360x360/075061P2A6.jpg" },
  },
  {
    data: { id: 6, name: "Method of Make", price: 370.0, quantity:  4},
    properties: { ratingRange: 3, imageSrc: "https://imgnike-a.akamaihd.net/360x360/029166NXA4.jpg" },
  },
  {
    data: { id: 7, name: "Syracuse", price: 170.0, quantity:  5},
    properties: { ratingRange: 5, imageSrc: "https://imgnike-a.akamaihd.net/360x360/07480256A5.jpg" },
  },
];

console.log(products[0])
console.log(products[3])



