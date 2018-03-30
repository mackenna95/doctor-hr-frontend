import React from 'react';
import './App.css';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import AutoComplete from 'material-ui/AutoComplete';

// want to use gunicorn (rather than flask) deployed on the vcm
// mongoDB

// eslint-disable-next-line
const style = {
        "margin": "20px",
        "color": "blue",
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            "data": ["Nothing yet"],
            dataSource: [],
            inputValue: ["No User Input"],
        };
    }

// http://vcm-3587.vm.duke.edu:5000/api/heart_rate/suyash@suyashkumar.com
    getData = () => {
        //userInput = TextField.getValue()
        this.setState({inputValue: TextField.getValue});
        axios.get("http://adpl.suyash.io/api/sites").then( (response) => {
            console.log(response);
            console.log(response.status); // this is equivalent to response["status"]
            this.setState({"data": response.data});
        });
    }
    
  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }
    
// need to get this grabbing values from the database
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        "Derrick",
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic Heart Rate Viewer</h1>
        </header>
        <p className="App-intro">
          To get started...
        </p>
          <div>
            <MuiThemeProvider>
                <AutoComplete
                  hintText="suyash@suyashkumar.com"
                  dataSource={this.state.dataSource}
                  filter={AutoComplete.caseInsensitiveFilter}
                  //onUpdateInput={this.handleUpdateInput}
                  onChange={evt => this.updateInputValue(evt)}
                  floatingLabelText="Enter Patient Email"
                  floatingLabelFixed={true}
                /><br />
                <Button variant="raised" label="Display Patient Heart Rate" primary={true} style={style} onClick={this.getData}>
                    <ActionFavoriteBorder />
                </Button>
            </MuiThemeProvider>
            {this.state.data[0]}
            {this.state.inputValue}
          </div>
      </div>
    );
  }
}

export default App;
