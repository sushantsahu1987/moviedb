import React,{Component} from 'react';
import Searchbar from '../components/Searchbar';
import logo from '../imgs/logo.png'
import _ from 'lodash';
import {GET_SEARCH_MOVIES} from '../helpers/feeds';

class Home extends Component  {

  makeApiCall = (text) => {
    console.log(text);
    console.log('text changed : '+new Date().getTime());
    // console.log(GET_SEARCH_MOVIES('hello', 1));
    this.setState((prev, props) => {
      return ({
        ...prev,
        value: text
      })
    })
  }

  onTextChange = (text)=> {
    const deferfn = _.debounce(this.makeApiCall, 1000);
    deferfn(text);
  }

  constructor(props) {
    super(props)
    this.state =  {
      value: ''
    }
  }

  render() {

      return (
        <div style={center}>
            <div style={margin_top}>
              <img src={logo}/>
            </div>
            <Searchbar onTextChange={this.onTextChange}/> 
            <label>
              {this.state.value}
            </label>         
        </div>
      );
    }

};

const contStyle = {
  margin: '20px',
  position: 'relative',
};

const colStyle = {
  margin: 'auto',
  position: 'absolute',
};

const center = {
  margin: 'auto',
  width: '70%',
  padding: '10px',
};

const margin_top = {
  marginTop: '100px',
  padding: '20px'
}


export default Home;
