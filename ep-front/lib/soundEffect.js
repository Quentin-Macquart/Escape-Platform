/**
 *Function to play a sound, with an optionnal setup to delay it
 * @param {string} soundUrl path of the sound to play
 * @param {number} soundDelay optionnal, needed delay before playing the sound
 */
export const soundEffect = (soundUrl, soundDelay = 0) => {
  setTimeout(() => {
    new Audio(soundUrl).play();
  }, soundDelay);
};
