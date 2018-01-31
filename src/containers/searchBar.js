import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import getWeather from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ' '
        }
    }

submitForm = (event) => {
    event.preventDefault();
    this.props.getWeather(this.state.term)
}

 render() {
    //  console.log(this.state);
        return(
        <form className="input-group" 
        onSubmit = {(event) => this.submitForm(event)}>
        <input
         className="form-control" 
         onChange = {(event) => this.setState({term:event.target.value})}
          />
       <span className="input-group-btn">
       <button type="submit" className="btn-btn-secondary">Click</button>
       </span>
       </form>
        );
 }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getWeather:getWeather},dispatch);
}
 export default connect(null,mapDispatchToProps)(SearchBar);