import React,{ Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  
        render() {
            console.log(this.props.weatherInfoProp);
            return(
                <h1>this is list</h1>
            );
        }
    }

function mapStateToProps(state) {
    return {
        weatherInfoProp: state.weatherInfo
    }
}

export default connect(mapStateToProps)(WeatherList);