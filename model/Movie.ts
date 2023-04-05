import { Schema, model } from "mongoose";
interface IAwards {
  wins: number;
  nominations: number;
  text: String;
}
interface IMovie {
  title: String;
  genre: [String];
  runtime: number;
  cast: [String];
  poster: String;
  plot: String;
  languages: [String];
  released: Date;
  directors: [String];
  rated: String;
  awards: IAwards;
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [String];
  tomatoes: {
    viewer: { rating: number; numRevies: number; meter: number };
    fresh: number;
  };
  critic: { rating: number; numViewer: number; meter: number };
  rotten: number;
  lastUpdated: Date;
}

const movieSchema = new Schema<IMovie>({
  //   title: { type: String, required: true },
  //   genre: { type: [String], required: true },
  //   runtime: { type: Number, required: true },
  //   cast: { type: [String], required: true },
  //   poster: { type: String, required: true },
  //   plot: { type: String, required: true },
  //   languages: { type: [String], required: true },
  //   released: { type: Date, required: true },
  //   directors: { type: [String], required: true },
  //   rated: { type: String, required: true },
  //   awards: {},
  //   lastupdated: { type: Date, required: true },
  //   year: { type: Number, required: true },
  //   imdb: {},
  //   countries: { type: [String], required: true },
  //   tomatoes: {},
  //   critic: {},
  //   rotten: { type: Number },
  //   lastUpdated: { type: Date },
});

const movie = model("Movie", movieSchema);

export default movie;
