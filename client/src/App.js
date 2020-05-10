import React, {Component} from 'react';
import Dogs from './components/dogs';
import { fetchData } from './api';
class App extends Component {

  state = {
    data: []
  }

  /*componentDidMount() {
    fetch('http://localhost:8080/apidog')
    .then(res => res.json())
    .then((data) => {
      this.setState({ dogs: data })
    })
    .catch(console.log)
  }*/

  async componentDidMount() {
    const fetchedData = await fetchData();
    var data = fetchedData.data.data;
    this.setState({ data });
  }

  render () {
    const { data } = this.state;
    return (
      <div className="card">
            <div className="card-body">
              <Dogs data={data} />
            </div>
      </div>
    );
  }
}

export default App;
