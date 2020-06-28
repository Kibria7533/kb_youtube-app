import React, { Component } from 'react';

class MainView extends Component {
    render() {
        return (
            <div>
                 <iframe className="embed-responsive embed-responsive-16by9" style={{height:"600px"}}  src={`https://www.youtube.com/embed/${this.props.id}`}></iframe>
        <h3>{this.props.title}</h3>
                  <br>
                  </br>
                  <h2>Description:</h2>
                  <hr></hr>
        <p>{this.props.des}</p>
            </div>
        );
    }
}

export default MainView;