/* global React */

var WeatherClock = React.createClass({
  getInitialState: function(){
    return {timeNow: new Date(), weather: "", temperature: "", city: ""};
  },
  componentDidMount: function(){
    this.geoLocation = navigator.geolocation;
    var that = this;
    this.geoLocation.getCurrentPosition( function(position){
        that.getWeather(position.coords.latitude, position.coords.longitude);
    });
    this.timer = setInterval(this._tick, 1000);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  getWeather: function(lat, lng){
    var that = this;
    var requestURI = "http://api.openweathermap.org/data/2.5/weather?lat=" +
                     lat + "&lon=" + lng;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
      that.parseText(this.responseText);
    });
    oReq.open("GET", requestURI);
    oReq.send();
  },
  parseText: function(text){
    var response = JSON.parse(text);
    var weather = response.weather[0].description;
    var temperature = response.main.temp;
    var cityName = response.name;
    this.setState({weather: weather, temperature: temperature, city: cityName});
  },
  _tick: function(){
    this.setState({timeNow: new Date()});
  },

  render: function(){
    return (
      <div>
        <li>{this.state.timeNow.toString()}</li>
        <li>weather: {this.state.weather}</li>
        <li>temperature: {this.state.temperature}</li>
        <li>city: {this.state.city}</li>
      </div>
    );
  }
});

React.render(<WeatherClock/>, document.getElementById('weatherclock'));
