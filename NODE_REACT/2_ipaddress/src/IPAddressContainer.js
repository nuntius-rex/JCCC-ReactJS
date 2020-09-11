import React, {Component} from "react";
import IPAddress from "./IPAddress";
import IPInfo from "./IPInfo";


var xhr;

class IPAddressContainer extends Component{

    constructor(props){
      super(props);

      /*
      this.state={
        //ip_address: "...",
        ///city: "..."
      };
      */

      this.state={
        "query": "",
        "status": "",
        "country": "",
        "countryCode": "",
        "region": "",
        "regionName": "",
        "city": "",
        "zip": "",
        "lat": "",
        "lon": "",
        "timezone": "",
        "isp": "",
        "org": "",
        "as": ""
      };

      this.processRequest=this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr=new XMLHttpRequest();
        //xhr.open("GET","https://ipinfo.io/json", true);
        xhr.open("GET","http://ip-api.com/json/136.37.201.5")
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest(){
      if(xhr.readyState===4 && xhr.status===200 ){
        var response=JSON.parse(xhr.responseText);
        /*
        this.setState({
          //ip_address:response.ip,
          //city:response.city
        });
        */
        this.setState({
          "query": response.query,
          "status": response.status,
          "country": response.country,
          "countryCode": response.countryCode,
          "region": response.region,
          "regionName": response.regionName,
          "city": response.city,
          "zip": response.zip,
          "lat": response.lat,
          "lon": response.lon,
          "timezone": response.timezone,
          "isp": response.isp,
          "org": response.org,
          "as": response.as
        });

      }
    }

    render(){
      return (
        <div>
          <IPInfo data={this.state} />
        </div>
      )
    }
}

/* <IPAddress ip={this.state.ip_address}  /> */

export default IPAddressContainer;
