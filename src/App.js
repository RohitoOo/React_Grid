import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import {
  SelectionState,
  TreeDataState,
  CustomTreeData,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';

import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from '@devexpress/dx-react-grid-material-ui';

import {generateRows,
defaultColumnValues} from './data/generator'

const getChildRows = (row, rootRows) => (row ? row.items : rootRows);

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid
                rows={[
                  { location: 0, employeeName: 'DevExtreme',  },
                  { location: 1, employeeName: 'DevExtreme Reactive' },
                ]}
                columns={[
                  { name: 'location', title: 'Location' },
                  { name: 'employeeName', title: 'EmployeeName' },
                 
                ]}>
                <Table />

                <TableHeaderRow />
        </Grid>
      </div>
    );
  }
}

export default App;
