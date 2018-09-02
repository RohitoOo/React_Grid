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
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'city', title: 'City' },
      ],
      tableColumnExtensions: [
        { columnName: 'name', width: 300 },
      ],
      data: generateRows({
        columnValues: {
          ...defaultColumnValues,
          items: ({ random }) => (random() > 0.5
            ? generateRows({
              columnValues: {
                ...defaultColumnValues,
                items: () => (random() > 0.5
                  ? generateRows({
                    columnValues: {
                      ...defaultColumnValues,
                    },
                    length: Math.trunc(random() * 5) + 1,
                    random,
                  })
                  : null),
              },
              length: Math.trunc(random() * 3) + 1,
              random,
            })
            : null),
        },
        length: 2,
      }),
    };
  }

  render() {
    const {
      data, columns, tableColumnExtensions, expandedRowIds, loading,
    } = this.state;
    return (
      <div className="App">
       <Paper>
        <Grid
          rows={data}
          columns={columns}
        >
          <SelectionState />
          <TreeDataState />
          <CustomTreeData
            getChildRows={getChildRows}
          />
          <IntegratedSelection />
          <Table
            columnExtensions={tableColumnExtensions}
          />
          <TableHeaderRow />
          {/* TableTreeColumn - renders the table column with an indent, toggle button, and selection controls */}
          <TableTreeColumn
            for="name"
          />
        </Grid>
      </Paper>
      </div>
    );
  }
}

export default App;
