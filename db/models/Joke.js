import mongoose, { Schema } from "mongoose";

const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;
