import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/BandInput.js'
import BandInput from '../components/BandInput.js';

class BandsContainer extends Component {

  addBand = (band) => {
    // debugger
    return (
      this.props.dispatch({
      type: 'ADD_BAND',
      band: {name: band}
    })
    )
  }

  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);
