import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventForm extends Component {

    nameRef = React.createRef();
    categoryRef = React.createRef();

    fillCategories = key => {
        const category = this.props.categories[key];

        const {id, name_localized} = category;

        if(!id || ! name_localized) return null
        
        return <option key={id} value={id}>{name_localized}</option>
    }

    getEvents = e => {
        e.preventDefault();

        const data = {
            name: this.nameRef.current.value,
            category: this.categoryRef.current.value
        }
        
        this.props.getEvents(data)
    }

    render() { 
        const categories = Object.keys(this.props.categories);
        
        return (
            <form onSubmit={this.getEvents}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoria
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.nameRef} type="text" className="uk-input" placeholder="Nombre de evento o ciudad" />
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.categoryRef} className="uk-select">
                                {categories.map(this.fillCategories)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">
                                Buscar
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

EventForm.propTypes = {
    getEvents: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
 
export default EventForm;