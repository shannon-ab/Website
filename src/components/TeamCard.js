import React, { Component } from 'react';
import styled from 'styled-components';

const TeamCardBox = styled.div`
  text-align: center;
  padding: 20px 0px;
  background-color: #fff;
  margin-bottom: 30px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  box-shadow: 8px 7px 18px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TeamCardImg = styled.img`
  border-radius: 50%;
  width: 9em;
  max-width: 160px;
`;

const TeamCardH3 = styled.h3`
  font-weight: bold;
  margin-top: 28px;
  margin-bottom: 8px;
  color: inherit;
`;

const TeamCardP = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: #d0d0d0;
  letter-spacing: 2px;
  font-size: 13px;
`;

const TeamCardSocial = styled.div`
  font-size: 18px;
  color: #a2a8ae;

  &:hover {
    font-size: 18px;
    color: #f80808;
  }
`;

const SocialLinks = styled.a`
    color: inherit;
    margin: 0 10px;
    display: inline-block;
    opacity: 0.7;
    padding: 6px

    &:hover {
        opacity: 1
    }
`;

const FontAwesome = styled.i`
  font-size: 28px;
`;

export default class TeamCard extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4 item">
        <TeamCardBox>
          <TeamCardImg src={this.props.image} alt={this.props.alt} />
          <TeamCardH3>{this.props.name}</TeamCardH3>
          <TeamCardP>{this.props.position}</TeamCardP>
          <TeamCardSocial>
            <SocialLinks href={`mailto:${this.props.contact.email}`}>
              <FontAwesome className="fas fa-paper-plane"></FontAwesome>
            </SocialLinks>
            <SocialLinks href={`tel:+1${this.props.contact.phone}`}>
              <FontAwesome className="fas fa-phone-alt"></FontAwesome>
            </SocialLinks>
            <SocialLinks target="_blank" href={this.props.contact.linkedin}>
              <FontAwesome className="fab fa-linkedin"></FontAwesome>
            </SocialLinks>
          </TeamCardSocial>
        </TeamCardBox>
      </div>
    );
  }
}
