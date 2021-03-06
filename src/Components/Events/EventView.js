import React, {Component,PropTypes} from 'react';

import { getEvent } from '../EventDetails/EventDetails';
import {Link } from 'react-router-dom';

import './Events.css';


export class EventView extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   completed: this.props.todo.completed
    // }

  }
 


  render() {
    return (
      <div className="eventview">
        <h4 className="eventviewtitle"> <Link to={'/api/event'+this.props.event._id}>{this.props.event.name}</Link></h4>
        <p>{this.props.event.start} to {this.props.event.end}</p>
        <p>{this.props.event.venue}</p>
        <noscript>{this.props.event._id}</noscript>
      </div>);
  }

}

export default EventView;
