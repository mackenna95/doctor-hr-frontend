import React from 'react';
import './App.css';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

// want to use gunicorn (rather than flask) deployed on the vcm
// mongoDB

// eslint-disable-next-line
const style = {
        "margin": "20px",
        "color": "black",
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
        axios.get("http://vcm-3587.vm.duke.edu:5000/api/heart_rate/" + this.state.inputValue).then( (response) => {
            console.log(response);
            console.log(response.status); // this is equivalent to response["status"]
            this.setState(response.data);
        });
    }
    
  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

// could create a new array that is a tuple of the two values and then print that
// new = hr.map(e) => {
    // return(
        //<raw>
            //e
        //</raw>
    //}),
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic Heart Rate Viewer</h1>
        </header>
        <p className="App-intro">
        </p>
          <div>
            <MuiThemeProvider>
                <TextField
                    id="with-placeholder"
                    label="Enter Patient Email"
                    placeholder="suyash@suyashkumar.com"
                    className={this.props.textField}
                    margin="normal"
                    onChange={evt => this.updateInputValue(evt)}
                /><br />
                <Button variant="raised" color="secondary" style={style} onClick={this.getData}>
                    Display Patient Heart Rate
                </Button>
            </MuiThemeProvider>
            {this.state.date_time}
            {this.state.heart_rate}
          </div>
      </div>
    );
  }
}

export default App;
