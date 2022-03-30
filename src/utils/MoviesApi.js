class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});

