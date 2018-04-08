import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Title from './components/title';
import Weather from './components/weather';

const API_KEY = '5d84d251c09163c9bc23972a27765b5d';

class App extends Component {
  state = {
    temperature : undefined,
    city: undefined,
    country: undefined ,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country ){
      console.log(data);
      this.setState({
        temperature : data.main.temp ,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature : undefined ,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error: "Please Fill The Form"
      });
    }
  }
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5">
                  <Title/>
                </div>
                <div className="col-xs-7">
                  <Form getWeath={this.getWeather}/>
                  <Weather temp={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  desc={this.state.description}
                  humidity={this.state.humidity}
                  err={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
