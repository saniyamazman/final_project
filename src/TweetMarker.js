import 'materialize-css';
import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import {TweetMarkerStyle, TweetMarkerStyleHover} from './TweetMarkerStyle.js'

export default class TweetMarker extends Component {
  static propTypes = {
    text: PropTypes.string,
    hover: PropTypes.bool
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }
  /*<div style={{width : 80}} className="hint_content">
    {this.props.text}
  </div>*/
  render() {
    const style = this.props.hover ? TweetMarkerStyleHover : TweetMarkerStyle;
    return (
      <div style={style}>
        <div>T</div>

      </div>
    );
  }
}
