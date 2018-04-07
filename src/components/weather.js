import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <br/>
        { this.props.city && this.props.country && <p>Location : {this.props.city}, {this.props.country}</p>}
        { this.props.desc && <p>Conditions : {this.props.desc}</p>}
        { this.props.temp && <p>Temperature : {this.props.temp}</p>}
        { this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
        { this.props.err && <p>{this.props.err}</p>}
      </div>
    );
  }
}

export default Weather
