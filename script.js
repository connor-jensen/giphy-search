var apiKey = "X2c75fqVGeoSgvnqjHNPwa56EwpAzBY1";
var endpoint = "https://api.giphy.com/v1/gifs/search";
var query = "";

$(document).ready(function() {
  $("#searchButton").click(function(e) {
    query = $("#searchField").val();
    e.preventDefault();
    console.log(query)
    $.ajax({
      url: endpoint,
      dataType: "json",
      data: {
        key: apiKey,
        q: query
      },
      success: function(result){
        console.log(result);
        var imageURL = result['data'][0]['images'].original.url;
        console.log(imageURL);
        $("#giphy-image").attr("src", imageURL);
      }
    })
  })
});

