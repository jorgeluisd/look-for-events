import React, { Component } from 'react';
import Header from './components/Header';
import EventForm from './components/EventForm';
import Events from './components/Events'; 

class App extends Component {

  token = '2FNFEI3QQWJARQIB25GY';
  order = 'date'

  state = {
    categories: [],
    events: []
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;

    await fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({
            categories : data.categories
          })
        })
  }

  getEvents = async data => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${data.name}&categories=${data.category}&sort_by=${this.order}&token=${this.token}`;

    await fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.setState({
            events : data.events
          })
        })

  }



  render() {
    return (
      <div className="App">
        <Header 
          title="Eventos"
        />

        <div className="uk-container">
          <EventForm 
            categories = {this.state.categories}
            getEvents = {this.getEvents}
          />

          <Events 
            events = {this.state.events}
          />
        </div>
      </div>
    );
  }
}

export default App;
