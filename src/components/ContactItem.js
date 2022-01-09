import React, { Component } from 'react';

export default class ContactItem extends Component {
  render() {
    return (
      <div className="contact-item">
        <div className="contact-item_icon">
          <i className={this.props.logoName} aria-hidden="true"></i>
        </div>
        <div className="contact-item_subtitle">
          <h3>{this.props.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
        </div>
      </div>
    );
  }
}
