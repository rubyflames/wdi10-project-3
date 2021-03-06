import React, {PropTypes} from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import { Button, ButtonToolbar, Col ,Row,Grid} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
// import {fetchEvents} from '../../Actions/search';
// import {selectEvent} from '../../Actions/search';



export class Search extends Component {
 constructor(props) {
    super(props);

    this.state = {
      term: '',
      events: [],
      activeEvent: {}
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  } 
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.fetchEvents(this.state.term);
    this.props.selectEvent(null)
  }


  render() {
    return (
      <div id="search-bar">
      <form onSubmit="" className="input-group"onSubmit={(e) => this.onFormSubmit(e) }>
        <input
          placeholder="Search for events"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary search-btn">Search</button>
        </span>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    activeEvent: state.activeEvent
  };
}

function mapDispatchToProps(dispatch) {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
