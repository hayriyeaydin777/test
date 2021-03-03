import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TablePagination } from '@material-ui/core';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import ContexifyMenu from './data-table-menu/ContexifyMenu';
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#235e7c',
    },
    secondary: {
      main: '#3a8bb8',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
  },
});

const Table = (props) => {
  const [gridData, setGridData] = useState({
    data: props.data,
    columns: props.col,
    selectedCount: props.selectedCount,
    pageName: props.pageName,
    selection: props.selection,
    resolve: () => {},
    updatedAt: new Date(),
  });

  useEffect(() => {
    gridData.resolve();
    /* console.log('RESOLVE AT:', gridData.updatedAt); */
  }, [gridData]);

  /* const onRowAdd = (newData) =>
    new Promise((resolve, reject) => {
      const data = [...gridData.data];
      data.push(newData);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      // Copy current state data to a new array
      const data = [...gridData.data];
      // Get edited row index
      const index = data.indexOf(oldData);
      // replace old data
      data[index] = newData;
      // update state with the new array
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  const onRowDelete = (oldData) =>
    new Promise((resolve, reject) => {
      let data = [...gridData.data];
      const index = data.indexOf(oldData);
      data.splice(index, 1);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    }); */

  const { show } = useContextMenu({ id: 'menu-id' });

  function showMenu(e) {
    show(e);
  }
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Paper onContextMenu={showMenu}>
          <div>
            <MaterialTable
              className="data-grid"
              title={props.pageName}
              columns={gridData.columns}
              data={props.data}
              icons={tableIcons}
              onRowClick={(event, rowData) => {}}
              /*editable={{
            isEditable: rowData => true,
            isDeletable: rowData => true,
            onRowAdd: onRowAdd,
            onRowUpdate: onRowUpdate,
            onRowDelete: onRowDelete
          }}*/

              components={{
                Pagination: (props) => (
                  <TablePagination
                    {...props}
                    /* labelRowsPerPage={<div style={{ fontSize: 14 }}>{props.labelRowsPerPage}</div>}
                    labelDisplayedRows={(row) => (
                      <div style={{ fontSize: 14 }}>{props.labelDisplayedRows(row)} </div>
                    )} */
                    SelectProps={{
                      style: {
                        fontSize: 12,
                      },
                    }}
                  />
                ),
                Container: (props) => <Paper {...props} elevation={0} />,
              }}
              localization={{
                pagination: {
                  labelDisplayedRows: '{from}-{to} of {count}',
                  previousTooltip: '',
                  nextTooltip: '',
                  firstTooltip: '',
                  lastTooltip: '',
                },
                toolbar: {
                  nRowsSelected: '{0} ÜRÜN SEÇİLDİ',
                  searchPlaceholder: 'Arama Yapınız',
                  searchTooltip: '',
                  showColumnsTitle: '',
                  exportCSVName: 'Excel İndir',
                  exportPDFName: 'Pdf İndir',
                },
                header: {
                  actions: 'Actions',
                },
                body: {
                  emptyDataSourceMessage: 'Veri Görüntülenemiyor',
                  filterRow: {
                    filterTooltip: 'Filter',
                  },
                },
              }}
              options={{
                actionsColumnIndex: -1,
                columnsButton: true,
                exportButton: true,
                selection: props.selection,
                selectionProps: { style: { padding: '0px' } },
                rowStyle: (rowData) => ({
                  backgroundColor: rowData.tableData.checked ? '#c5eaff' : '',
                  fontSize: '12px',
                  height: props.height,
                  padding: '0',
                  textTransform: 'uppercase',
                }),
                /* cellStyle: {
                  width: 150,
                  maxWidth: 150,
                }, */
                /* headerStyle: {
                  width: 150,
                  maxWidth: 150,
                },  */
                pageSize: 50,
                pageSizeOptions: [50, 100, 200],
                search: true,
                /*rowStyle: {
                  backgroundColor: '#fff',
                  fontSize: '12px',
                  height: '14px',
                  padding: '0',
                },*/
              }}
            />
            <ContexifyMenu id="menu-id" />
          </div>
        </Paper>
      </MuiThemeProvider>
    </>
  );
};

export default Table;
