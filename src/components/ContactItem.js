import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  padding: 20px 0;
`;

const StyledIconContainer = styled.div`
  min-width: 60px;
  height: 60px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
`;

const StyledTextContainer = styled.div`
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  font-weight: normal;
  display: flex;
  flex-direction: column;
`;

const StyledH3 = styled.h3`
  text-weight: bold;
  color: #17a2b8;
`;

export default class ContactItem extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledIconContainer>
          <i className={this.props.logoName} aria-hidden="true"></i>
        </StyledIconContainer>
        <StyledTextContainer>
          <StyledH3>{this.props.title}</StyledH3>
          <p dangerouslySetInnerHTML={{ __html: this.props.content }}></p>
        </StyledTextContainer>
      </StyledContainer>
    );
  }
}
