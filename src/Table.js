import React from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class TableEx extends React.Component {
    constructor() {
        super();
    }

    generateTableDataForLoop = () => {
      var prettyTableData = [];
      console.log(this.props.heart_rate)
      for (var i = 0; i < this.props.heart_rate.length; i++) {
          prettyTableData.push(
            <TableRow>
                <TableCell> {this.props.heart_rate[i]} </TableCell>
                <TableCell> {this.props.date_time[i]} </TableCell>
            </TableRow>
          );
      }
      return prettyTableData
    }
    
    generateTableMap = () => {
        var prettyTableData = this.props.tableData.map( (element) => {
            return (
            <TableRow>
                <TableCell> {element[0]} </TableCell>
                <TableCell> {element[1]} </TableCell>
            </TableRow>
            )
        });
        
        return prettyTableData;
    }
    
  render() {
    const { tableData, heart_rate, date_time } = this.props
    var prettyTableData = this.generateTableDataForLoop();
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> HR </TableCell>
                        <TableCell> Time </TableCell>
                    </TableRow>
                </TableHead>
                {prettyTableData}
            </Table>
      </div>
    );
  }
}

export default TableEx;
