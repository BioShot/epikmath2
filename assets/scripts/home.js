//Made By Bio Shot\\
$(document).ready(function() {
  var gamesListEl = document.querySelector('.games').querySelectorAll("div");
  $.getJSON("/assets/json/games.json",
    function (data, textStatus, jqXHR) {
      var gamesList = data["gamesList"];
      gamesList.forEach(game => {
        var name = game["name"];
        var iconUrl = game["icon"];

        $(".games").append(`<div class="${name}"></div>`)
        $('body').append(`<style>.${name}{
          display: flex;
          align-items: flex-end;
          transition: border-radius 0.5s;
          width: 200px;
          height: 200px;
          background-image: url("/assets/images/${iconUrl}");
          background-size: cover;
          border-radius: 26px;
          cursor: pointer;
        }
        .${name}:hover {
          transition: border-radius 0.5s;
          border-radius: 30px;
        }
        </style>`)

          $(`.${name}`).click(function (){
            document.location.href = $(`.${name}`).attr("class")
        });
      });
    }
  );


})
