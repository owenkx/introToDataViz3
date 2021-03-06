function request(url, data, callback){
  var request = $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    data: data
  });

  request.done(function(response){
    callback(response);
  });
}

var url = 'http://search.twitter.com/search.json';
var query = { q: "pizza" };

request(url, query, function(data){
  var labels = [];
  var values = [];

  $.each(data, function(key, value){
    labels.push(data[key]['text']);
    console.log("it works");
    values.push(parseInt(data[key]['from_user_id']))
  });

  var data = {
    labels : labels,
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        data : values
      }
    ]
  }
  var ctx = document.getElementById("twitter").getContext("2d");
  var radarChart = new Chart(ctx).Radar(data);
});
