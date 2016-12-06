import './TweetMap.css';
import 'materialize-css';
import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import TweetMarker from './TweetMarker.js'
const API_KEY = 'AIzaSyCaQka1I7iRAcB9hlZf9aeRoXbSE37c6Vk';

export default class TweetMap extends Component {
  static defaultProps = {center: {lat: 43.1401, lng: -79.1200},
  zoom:9
  };

  render() {
    return (
      <div className ='map-div'>
      <GoogleMap bootStrapURLKeys = {{
          key: API_KEY,
          language: 'en'
        }}
        defaultCenter = {this.props.center}
        defaultZoom = {this.props.zoom}>
        <TweetMarker lat={43.1400} lng={-79.1205} text={'T'}/>
        </GoogleMap>
      </div>
    )
  }
}
