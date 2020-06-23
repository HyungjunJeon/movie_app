import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://mommyson.files.wordpress.com/2013/06/ec9984ec84b1-2.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://i.redditmedia.com/H-5wS65MOmInTfq1crupUSJKBiMlbyhKxrBUINHJrxs.jpg?w=320&s=d94afde9d3efe82e3fe4673ce25dcf6b",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://www.thespruceeats.com/thmb/4Qckb9A9KGyG-q_czTZieMWCGgk=/2048x1367/filters:fill(auto,1)/classic-korean-bibimbap-recipe-2118765_20_preview-5b1ee284ba61770037c8ad38.jpeg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "http://seonkyounglongest.com/wp-content/uploads/2017/07/donkasu-02-1000x667.jpg?x61413",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="100%" />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
