import React, {Component} from "react";
import './IPInfo.css';

class IPAddress extends Component{

  render(){
    return (
      <div>
        <h1>IP Info for {this.props.data.query}</h1>
        <p>isp: {this.props.data.isp}</p>
        <p>org: {this.props.data.org}</p>
        <p>{this.props.data.city}, {this.props.data.country} ({this.props.data.countryCode}), {this.props.data.regionName} ( {this.props.data.region} ) {this.props.data.zip} <br /> {this.props.data.timezone} {this.props.data.lat}, {this.props.data.lon} </p>

      </div>
    )
  }

}

export default IPAddress;
