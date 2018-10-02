import React, { Component } from 'react';

export default class UserComponent extends Component {
  render() {
    return (
        <div className="container">
        <div className="fb-profile">
            <img  className="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example"/>
            <img  className="fb-image-profile thumbnail" src="http://lorempixel.com/180/180/people/9/" alt="Profile image example"/>
            <div className="fb-profile-text">
                <h1>Eli Macy</h1>
                <p>Girls just wanna go fun.</p>
            </div>
        </div>
    </div>
    )
  }
}
