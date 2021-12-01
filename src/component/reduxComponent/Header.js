import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class Header extends Component {
  render() {
    // const { tagline, nameText, name } = this.props;
    const { tagline, nameText } = this.props;
    return (
        <div className="header">
        <h1>Redux Application</h1>
        <p>{tagline}</p>
        <p>{nameText.name}</p>
        {/* <p>{name}</p> */}
      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
    return {
      tagline: state.head.tagline,
      nameText: state.nameText,
      // name: state.nameText.name,
    }
  }
   
  export default connect(mapStateToProps)(Header);