import axios from "axios";

/**
 * Function which fetches data from the backend
 * @param stateFunction function type setState to save the datas
 * @param url string of the target url
 */
export const fetchData = (stateFunction: Function, url: string) => {
  axios.get(url).then(({ data }) => {
    stateFunction(data[0]);
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
