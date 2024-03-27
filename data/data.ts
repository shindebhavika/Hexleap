import img1 from "../public/Images/img1.png";
import img2 from "../public/Images/img2.png";
import img3 from "../public/Images/img3.png";
import collection2 from "../public/Images/collection1.png";
import collection1 from "../public/Images/collection2.png";
import collection3 from "../public/Images/collection3.jpeg";
import collection4 from "../public/Images/collection4.jpeg";
import collection5 from "../public/Images/collection5.jpeg";
import collection6 from "../public/Images/collection6.jpeg";
import collection7 from "../public/Images/collection7.jpeg";
type Collection = {
  id: number;
  imageUrl: string;
  name: string;

  place: string;
  action: string;
};
export const collectionItems: Collection[] = [
  {
    id: 1,
    imageUrl: collection1.src,
    // Using the src property of the imported image
    name: "Las Vegas Aviators",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    action: "Take Flight Collection",
  },
  {
    id: 2,
    imageUrl: collection2.src, // Using the src property of the imported image
    name: "Sacramento River Cats",
    place: "Sutter Health Park, Sacramento, California",
    action: "Orange Collection",
  },
  {
    id: 3,
    imageUrl: collection3.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    action: "Take Flight Collection",
  },
  {
    id: 4,
    imageUrl: collection4.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    action: "Take Flight Collection",
  },
  {
    id: 5,
    imageUrl: collection5.src, // Using the src property of the imported image
    name: "Sacramento River Cats",
    place: "Sutter Health Park, Sacramento, California",
    action: "Orange Collection",
  },
  {
    id: 6,
    imageUrl: collection6.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    action: "Take Flight Collection",
  },
  {
    id: 7,
    imageUrl: collection7.src, // Using the src property of the imported image
    name: "Sacramento River Cats",
    place: "Sutter Health Park, Sacramento, California",
    action: "Orange Collection",
  },
  {
    id: 8,
    imageUrl: collection3.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    action: "Take Flight Collection",
  },
  {
    id: 9,
    imageUrl: collection1.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
    action: "Take Flight Collection",
  },
];
type Item = {
  id: number;
  imageUrl: string;
  name: string;
  totalEvents: number;
  sport: string;
};

const items: Item[] = [
  {
    id: 1,
    imageUrl: img1.src, // Using the src property of the imported image
    name: "Sacramento River Cats",
    totalEvents: 48,
    sport: "baseball",
  },
  {
    id: 2,
    imageUrl: img2.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    totalEvents: 28,
    sport: "baseball",
  },
  {
    id: 3,
    imageUrl: img3.src, // Using the src property of the imported image
    name: "new jersey devils",
    totalEvents: 15,
    sport: "Ice Hockey",
  },
  {
    id: 4,
    imageUrl: img2.src, // Using the src property of the imported image
    name: "Las Vegas Aviators",
    totalEvents: 28,
    sport: "baseball",
  },
  // Add more items here if needed
];

export default items;
