import './TweetMap.css';
import 'materialize-css';
import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import TweetMarker from './TweetMarker.js';
import controllable from 'react-controllables';
import {K_SIZE} from './TweetMarkerStyle.js';
const API_KEY = 'AIzaSyBD-pYp4i3hhI5VRJOQrjKeTxhbR5AUnEU';

var tweets = require('../data/sample_tweets_with_loc.json');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

export default class TweetMap extends Component {
  static defaultProps = {

    zoom:12,
    data: tweets['statuses']
  };

  _onChildClick = (key, childProps) => {
    console.log(key);
  }

  render() {

    let tweetDat = this.props.data;
    console.log(tweetDat);
    return (
      <div className='map-div'>
      <GoogleMap bootStrapURLKeys={{
          key: API_KEY,
          language: 'en'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChildClick={this._onChildClick}
        {tweetDat.map(function(item, index) {
          var tweetLat;
          var tweetLng;
          var url = "https://twitter.com/statuses/" + item['id_str'];

          if (item['geo'] != null) {
            tweetLat = item['geo']['coordinates'][0];
            tweetLng = item['geo']['coordinates'][1];
          } else {
            tweetLat = getRandomArbitrary(item['place']['bounding_box']['coordinates'][0][0][1],
              item['place']['bounding_box']['coordinates'][0][2][1]);
            tweetLng = getRandomArbitrary(item['place']['bounding_box']['coordinates'][0][0][0],
              item['place']['bounding_box']['coordinates'][0][2][0]);
          }
          return <TweetMarker key={item['id']} lat={tweetLat} lng={tweetLng} text={"T"} tweetUrl={url}/>
        })}
        </GoogleMap>
      </div>
    )
  }
}
