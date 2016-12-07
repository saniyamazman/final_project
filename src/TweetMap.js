import './TweetMap.css';
import 'materialize-css';
import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import TweetMarker from './TweetMarker.js'
const API_KEY = 'AIzaSyCaQka1I7iRAcB9hlZf9aeRoXbSE37c6Vk';

var tweets = require('../data/sample_tweets_with_loc.json');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

export default class TweetMap extends Component {
  static defaultProps = {
    center: {lat: 47.6475, lng: -122.3223},
    zoom:12,
    data: tweets['statuses']
  };

  render() {

    //console.log(this.props.data);
    let tweetDat = this.props.data;

    return (
      <div className ='map-div'>
      <GoogleMap bootStrapURLKeys = {{
          key: API_KEY,
          language: 'en'
        }}
        defaultCenter = {this.props.center}
        defaultZoom = {this.props.zoom}>
        {tweetDat.map(function(item, index) {
          var tweetLat;
          var tweetLng;

          if (item['geo'] != null) {
            tweetLat = item['geo']['coordinates'][0];
            tweetLng = item['geo']['coordinates'][1];
          } else {
            tweetLat = getRandomArbitrary(item['place']['bounding_box']['coordinates'][0][0][1],
              item['place']['bounding_box']['coordinates'][0][2][1]);
            tweetLng = getRandomArbitrary(item['place']['bounding_box']['coordinates'][0][0][0],
              item['place']['bounding_box']['coordinates'][0][2][0]);
          }
          return <TweetMarker key={item['id']} lat={tweetLat} lng={tweetLng} text={"T"}/>
        })}
        </GoogleMap>
      </div>
    )
  }
}
