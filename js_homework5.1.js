let anime = {
  title: "One Piece",
  author: "Eiichiro Oda",
  genres: ["fantasy", "adventure"],
  category: ["shōnen"],
  
  getInfo: function() {
    for (let property in this) {
      if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
        console.log(property + ': ' + this[property]);
      }
    }
  }
};

anime.getInfo()
anime.episodesCount = 1041;
anime.getInfo();