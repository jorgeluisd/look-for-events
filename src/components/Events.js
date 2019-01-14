import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {
    render() { 
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                {Object.keys(this.props.events).map(key => (
                    <Event 
                        key = {key}
                        event = {this.props.events[key]}
                    />
                ))}
            </div>
        );
    }
}
 
export default Events;