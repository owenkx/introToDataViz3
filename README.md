# DAY 3! of introduction to data visualization


**In Chrome, install the JSONView extension:**  
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc  

**Twitter Search API:**  
http://search.twitter.com/search.json?q=pizza  

**Seattle Police Incident Responses feed:**  
http://data.seattle.gov/resource/3k2p-39jp.json  

You can also browse the police feed data:  
https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp


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

Example:  
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

## Use this function to pull data from the Twitter Search API, and the Seattle Police feed.
### Create separate graphs that show the data from those sources
