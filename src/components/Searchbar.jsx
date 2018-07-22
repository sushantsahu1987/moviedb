import React, { Component } from 'react';
import { PreviousMap } from 'postcss';

class Searchbar extends Component {

  constructor(props) {
    super(props)
  }

  onTextChange = (event) => {
    this.props.onTextChange(event.target.value);
  }

  render() {

    const input_style = {
      boxShadow: '5px 5px #e9ecef',
    };


    const inner_container = {
    }

    const btn_search = {
      width: '40%',
      margin: 'auto',
      lineHeight: '2'
    }
  
    return (
        <div>
          <form className="form-group">
            <input type="search" 
                   className="form-control form-control-lg" 
                   placeholder="Search for something here !" 
                   id="email" 
                   autocomplete="off"
                   style={input_style}
                   onChange={this.onTextChange}
            />
          </form>
          {/* <div>
            <button type="submit" className="btn btn-light btn-block" style={btn_search}>Search</button>
          </div>           */}
        </div>
    )

  }
}

export default Searchbar;
