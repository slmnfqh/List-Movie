/** @format */

// Ketika tombol Searching Di Tekan
$(".buttonSearch").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=e144f5f6&s=" + $(".inputKeyword").val(),
    success: (result) => {
      const moviesList = result.Search;
      let cards = "";
      moviesList.forEach((m) => {
        cards += showCards(m);
        $(".container-card").html(cards);
      });
      $(".detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=e144f5f6&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            let movieDetail = showDetailMovie(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            alert(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      alert(e.responseText);
    },
  });
});

$.ajax({
  url: "http://www.omdbapi.com/?apikey=e144f5f6&s=avengers",
  success: (result) => {
    const moviesList = result.Search;
    let cards = "";
    moviesList.forEach((m) => {
      cards += showCards(m);
      $(".container-card").html(cards);
    });
    $(".detail-button").on("click", function () {
      $.ajax({
        url:
          "http://www.omdbapi.com/?apikey=e144f5f6&i=" + $(this).data("imdbid"),
        success: (m) => {
          let movieDetail = showDetailMovie(m);
          $(".modal-body").html(movieDetail);
        },
        error: (e) => {
          alert(e.responseText);
        },
      });
    });
  },
  error: (e) => {
    alert(e.responseText);
  },
});

// _________________________________function penampung_________________________________
function showCards(m) {
  return `   <div class="col-md-3 my-4">
              <div class="card">
                <img src="${m.Poster}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">
                  ${m.Year}
                  </h6>
                  <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal"
                  data-bs-target="#exampleModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
              </div>
            </div>`;
}

function showDetailMovie(m) {
  return `  <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <img src="${m.Poster}" alt="" />
                </div>
                <div class="col-md">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h3><b>${m.Title}</b></h3></li>
                    <li class="list-group-item"><strong>Year: </strong>${m.Year}</li>
                    <li class="list-group-item">
                      <strong>Released: </strong>${m.Released}
                    </li>
                    <li class="list-group-item">
                      <strong>Runtime: </strong>${m.Runtime}
                    </li>
                    <li class="list-group-item"><strong>Genre: </strong>${m.Genre}</li>
                    <li class="list-group-item">
                      <strong>Director: </strong>${m.Director}
                    </li>
                    <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                  </ul>
                </div>
              </div>
            </div>`;
}
