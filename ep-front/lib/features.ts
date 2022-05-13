import axios from "axios";

/**
 * Function which fetches data from the backend
 * @param stateFunction function type setState to save the datas
 * @param url string of the target url
 * @param wanted string which ask if you wanna to fetch all data, or just one
 * @param index if you wanna to fetch one data, you have to choose the index of the corresponding data
 */
export const fetchData = (
  stateFunction: Function,
  url: string,
  wanted: "All" | "One",
  index: number
) => {
  axios.get(url).then(({ data }) => {
    wanted === "One" ? stateFunction(data[index]) : stateFunction(data);
  });
};

/**
 *Function to play a sound, with an optionnal setup to delay it
 * @param {string} soundUrl path of the sound to play
 * @param {number} soundDelay optionnal, needed delay before playing the sound
 */
export const soundEffect = (soundUrl: string, soundDelay: number = 0) => {
  setTimeout(() => {
    new Audio(soundUrl).play();
  }, soundDelay);
};
