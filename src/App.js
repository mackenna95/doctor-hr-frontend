import React from 'react';
import './App.css';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import TableEx from './Table.js'

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
            "tableData": [],
            "heart_rate": [],
        };
    }

    getData = () => {
        axios.get("http://vcm-3587.vm.duke.edu:5000/api/heart_rate/" + this.state.inputValue).then( (response) => {
            console.log(response);
            console.log(response.status); // this is equivalent to response["status"]
            this.setState(response.data);
        });
        this.CreateTableData()
    }
    
    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    }

    CreateTableData = () => {
        var c = []
        for (var i = 0; i < this.state.heart_rate.length; i++) {
            c.push([this.state.heart_rate[i], this.state.date_time[i]]);
        }
        this.setState({
            'tableData': c,
        });
        console.log(c);
        console.log(this.state.tableData);
    }


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
            <TableEx tableData={this.state.tableData} heart_rate={this.state.heart_rate} date_time={this.state.date_time}/>
          </div>
      </div>
    );
  }
}

export default App;
