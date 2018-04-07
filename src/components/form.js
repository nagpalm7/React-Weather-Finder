import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form-inline" onSubmit={this.props.getWeath}>
      <input className="form-control" type="text" name="city" placeholder="city..."/>
      <input className="form-control" type="text" name="country" placeholder="country..."/>
      <button className="btn btn-default">Get Weather</button>
      </form>
    );
  }
}

export default Form;
