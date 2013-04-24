# DAY 3! of introduction to data visualization


**In Chrome, install the JSONView extension:**  
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc  

**Twitter Search API:**  
http://search.twitter.com/search.json?q=pizza  

**Seattle Police Incident Responses feed:**  
http://data.seattle.gov/resource/3k2p-39jp.json  

You can also browse the police feed data:  
https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp

**WA population of counties:**
wa-population-data.json

**chart.js documentation:**  
http://www.chartjs.org/  


### query strings:
```
?q=pizza&format=jsonp
```

### jquery ajax requests:
```javascript
var request = $.ajax({
  type: "GET",
  url: "http://example.com",
  dataType: "jsonp",
  data: { q: "pizza" }
});

request.done(function(response){
  console.log(response);
});
```

# Workshop:
### Write a function where you can pass the url, query data, and a callback

**Example:**  
```javascript
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
```

**Example usage:**  
```javascript

var url = 'http://search.twitter.com/search.json';
var query = { q: "string" };

request(url, query, function(data){
  var labels = [];
  var values = [];

  $.each(data, function(key, value){
    labels.push(data[key]['neighborhood']);
    values.push(parseInt(data[key]['people']))
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
  var ctx = document.getElementById("myChart").getContext("2d");
  var radarChart = new Chart(ctx).Radar(data);
});
```

## Use this function to pull data from the Twitter Search API, the Seattle Police feed, and the WA population json file in this repository.
### Create three separate charts that show the data from those sources

### Things to think about:
- Which chart will work best for each data set?
- Are there ways to show relation information between the three data sources?
- What's the best way to arrange the information on the page? Do you need to add text to make things more clear?
- How can you break down the script into smaller functions?
