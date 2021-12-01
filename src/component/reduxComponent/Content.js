import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from "../../redux/actions/counterActions";
import { setTagline } from "../../redux/actions/headActions";
 
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagline: this.props.tagline,
      error: false,
      success: false
    }
  }

  checkEmail = (tagline) => {
    this.setState({error: !this.state.error});
    this.props.setTagline(tagline);
  }

  render() {
    const { tagline, error } = this.state;
    const { incrementCounter, decrementCounter, counterObj, setTagline } = this.props;
    return (
      <div className="main">
 
        <div style={{ marginBottom: 20 }}>
          <h2>{counterObj.counterTitle}: {counterObj.count}</h2>
          <input type="button" className="btn" style={{ marginRight: 10 }} value="+1" onClick={incrementCounter} />
          <input type="button" className="btn" value="-1" onClick={decrementCounter} />

          {error && <h1>Error Occured</h1>}
        </div>
        
        <div style={{ marginBottom: 20 }}>
          Tagline: <input type="text" className="tagline" value={tagline} onChange={e => this.setState({ tagline: e.target.value })} />
          <input type="button" style={{ padding: '5px 7px', marginLeft: 10, width: 100 }} value="Set" onClick={() => this.checkEmail(tagline)} />
        </div>
                
        <h2>Lorem ipsum dolor</h2>
        <h5>quam pellentesque, Dec 10, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Nisi vitae suscipit..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum. Ornare aenean euismod elementum nisi quis eleifend quam.</p>
        <br />
        <h2>Placerat vestibulum</h2>
        <h5>elementum integer enim neque, Sep 21, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Bibendum est ultricies..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum.</p>
      </div>
    );
  }
}
 
const mapStateToProps = (storeProps) => {
  return {
    counterObj: storeProps.counter,
    tagline: storeProps.head.tagline
    
  }
}
 
const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  setTagline
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Content);