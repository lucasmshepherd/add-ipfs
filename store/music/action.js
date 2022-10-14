export const musicActionTypes = {
  UPDATE_MUSIC_STATUS: "UPDATE_MUSIC_STATUS",
  REMOVE_MUSIC_STATUS: "REMOVE_MUSIC_STATUS"
};

export const playMusic = () => {
  return { type: musicActionTypes.UPDATE_MUSIC_STATUS };
};

export const stopMusic = () => {
  return { type: musicActionTypes.REMOVE_MUSIC_STATUS };
};