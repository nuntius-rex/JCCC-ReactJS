import React,{Component} from 'react';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
          customers:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/')
        .then( (res) => res.json() )
        .then( (data) => {
            this.setState({customers:data})
        })
    }

    render(){
      return(
        <div>
          <table>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Country</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    this.state.customers.map( (customers, i) => (
                        <tr key={'customers_'+i}>
                          <td>{customers.customerNumber}</td>
                          <td>{customers.customerName}</td>
                          <td>{customers.country}</td>
                        </tr>
                    ))

                  }
              </tbody>
          </table>
        </div>
      )
    }
}

export default App;
