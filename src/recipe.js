import greek_salad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.png';
import lemon_dessert from './assets/lemon dessert.jpg';
const recipes = [
    {
      id: 1,
      title: "Greek salad",
      image:greek_salad,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: 12.99,
    },
    {
      id: 2,
      title: "Bruchetta",
      image:bruchetta,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 5.99,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      image:lemon_dessert,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: 5.00,
    },
  ];

  export default recipes;