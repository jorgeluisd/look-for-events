import React from 'react';
import PropTypes from 'prop-types';

const Event = props => {
    const {name} = props.event;

    if (!name) return null;

    let desc = props.event.description.text;
    
    if (desc !== null && desc.length > 250) {
        desc = desc.substr(0,250);
    }

    return (
        
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {props.event.logo !== null ?
                        <img src={props.event.logo.url} alt={props.event.name.text}/>
                    : ''
                    }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.event.name.text}</h3>
                    <p>
                        {desc}
                    </p>
                </div>

                <div className="uk-card-footer">
                    <a href={props.event.url} className="uk-button uk-button-secondary" target = "_blank">Más información</a>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired
}

export default Event;