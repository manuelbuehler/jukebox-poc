export const UIController = {
  inputField(refs) {
    return {
      genre: refs.genre.current,
      playlist: refs.playlist.current,
      tracks: refs.tracks.current,
      submit: refs.submit.current,
      songDetail: refs.songDetail.current,
      token: refs.token?.current,
    };
  },

  createGenre(refs, text, value) {
    refs.genre.current.insertAdjacentHTML(
      "beforeend",
      `<option value="${value}">${text}</option>`
    );
  },

  createPlaylist(refs, text, value) {
    refs.playlist.current.insertAdjacentHTML(
      "beforeend",
      `<option value="${value}">${text}</option>`
    );
  },

  createTrack(refs, id, name) {
    refs.tracks.current.insertAdjacentHTML(
      "beforeend",
      `<a href="#" class="list-group-item" id="${id}">${name}</a>`
    );
  },

  createTrackDetail(refs, img, title, artist) {
    refs.songDetail.current.innerHTML = `
      <div><img src="${img}" alt=""></div>
      <div><label>${title}</label></div>
      <div><label>By ${artist}</label></div>
    `;
  },

  resetPlaylist(refs) {
    refs.playlist.current.innerHTML = "";
    this.resetTracks(refs);
  },

  resetTracks(refs) {
    refs.tracks.current.innerHTML = "";
    refs.songDetail.current.innerHTML = "";
  },

  storeToken(refs, value) {
    if (refs.token) refs.token.current.value = value;
  },

  getStoredToken(refs) {
    return { token: refs.token?.current.value || "" };
  },
};
