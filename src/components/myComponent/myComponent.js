import React, { Component } from  'react'
import './myComponent.scss'

export default class myComponent extends  Component {
  constructor(props) {
    super(props);
    console.log(props, ' props');
    this.state = {};
  }
  handlerPush = () => {
    console.log(this.props.myprops);
  };

  render() {
    return (
        <>
          <h1>Header</h1>
          <p>uper text  {this.props.myprops}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Corporis cupiditate dolorem ducimus et eveniet facilis natus nobis
            quia sequi vitae?
          </p>
          <button onClick={this.handlerPush} >push me</button>
        </>
    )
  }
}