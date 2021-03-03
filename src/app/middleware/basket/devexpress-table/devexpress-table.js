import React from 'react';
import axios from 'axios';
import 'devextreme/data/odata/store';
import DataGrid, { Column, Paging, Pager, Scrolling, Sorting, LoadPanel  } from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';

const store = new CustomStore({
  key: 'urunId',
  loadMode: "raw",
  load: function() {
        
    return axios.get("https://testdinamikoto.yuceyazilim.com.tr/api/Products/AllProducts").then(response => {
      return response.data;
    });
  }
});

class DataExpressTable extends React.Component {
  render() {
    return (
      <DataGrid
        dataSource={store}
        showBorders={true}
        remoteOperations={true}
      >
        <Column
          dataField="urunId"
          dataType="number"
        />
        <Column
          dataField="urunAdi"
          dataType="string"
        />
        
        <Scrolling mode="infinite" />
        <LoadPanel enabled={false} />
      </DataGrid>
    );
  }
}

export default DataExpressTable;
