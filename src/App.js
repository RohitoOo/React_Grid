import React, { Component } from 'react';
import './App.css';
import {
  TreeDataState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';


const row = [
  { location: 0, employeeName: 'DevExtreme',  },
  { location: 1, employeeName: 'DevExtreme Reactive' }
];
const column = [
  { name: 'location', title: 'Location' },
  { name: 'employeeName', title: 'EmployeeName' },
 
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid
          rows={row}
          columns={column}
        >
          <Table />
          <TreeDataState/>
          <TableHeaderRow />
        </Grid>
      </div>
    );
  }
}

export default App;
