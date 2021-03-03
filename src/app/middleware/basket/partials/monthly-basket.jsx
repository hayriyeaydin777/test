import React from 'react';
import axios from 'axios';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Paging,
  Pager,
  Scrolling,
  Sorting,
  LoadPanel,
  FilterRow,
  HeaderFilter,
  Selection,
  SearchPanel,
  ColumnChooser,
  ColumnFixing,
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';

const store = new CustomStore({
  key: 'urunId',
  loadMode: 'raw',
  load: function () {
    return axios
      .get('https://testdinamikoto.yuceyazilim.com.tr/api/Products/AllProducts')
      .then((response) => {
        return response.data;
      });
  },
});

class DataExpressTable extends React.Component {
  render() {
    return (
      <DataGrid
        dataSource={store}
        showBorders={true}
        remoteOperations={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        noDataText="Veri Bulunamadı"
      >
        <ColumnChooser enabled={true} />
        <ColumnFixing enabled={true} />
        <FilterRow
          visible={true}
          applyFilter={true}
          applyFilterText={'Filtreleme'}
          between={'Arasında'}
          betweenEndText={'ile Biten'}
          betweenEndText={'ile Biten'}
          betweenStartText={'ile Başlayan'}
          resetOperationText={'Temizle'}
          operationDescriptions={{
            between: 'Arasında',
            contains: 'Ara',
            endsWith: 'ile Biten',
            equal: 'Eşittir',
            greaterThan: 'Büyüktür',
            greaterThanOrEqual: 'Büyük ya da Eşit',
            lessThan: 'Küçüktür',
            lessThanOrEqual: 'Küçük ya da Eşit',
            notContains: 'İçermeyen',
            notEqual: 'Eşit Olmayan',
            startsWith: 'ile Başlayan',
          }}
        />
        <SearchPanel visible={true} width={240} placeholder="Ara" />
        <Selection mode="multiple" selectAllMode="true" showCheckBoxesMode="always" />
        <Column dataField="spot" dataType="string" />
        <Column dataField="urunId" dataType="number" />
        <Column dataField="urunAdi" dataType="string" />
        <Column dataField="listeFiyati" dataType="number" />
        <Column dataField="durum" dataType="string" />

        <Scrolling mode="infinite" />
        <LoadPanel enabled={false} />
      </DataGrid>
    );
  }
}

export default DataExpressTable;
