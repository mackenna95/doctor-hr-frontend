import React from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class TableEx extends React.Component {
    constructor() {
        super();
    }

    generateTableDataForLoop = () => {
      var prettyTableData = [];
      
      for (var i = 0; i < this.props.tableData.length; i++) {
          prettyTableData.push(
            <TableRow>
                <TableCell> {this.props.tableData[i][0]} </TableCell>
                <TableCell> {this.props.tableData[i][1]} </TableCell>
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
    var prettyTableData = this.generateTableMap();
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
