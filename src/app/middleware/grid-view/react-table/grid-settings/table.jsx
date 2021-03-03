import React from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded
  )

  const firstPageRows = [
    {
      "id": "1", 
      "original": { 
        "refno": "stick-cfycp", 
        "lastName": "appliance-697lk", 
        "age": 29, 
        "visits": 71, 
        "progress": 88, 
        "status": "single" 
      }, 
      "index": 1, 
      "depth": 0, 
      "cells": [{

      }], 
      "values": {

      }, 
      "originalSubRows": [], 
      "subRows": []
    }
  ];

  return (
    <>
      <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          const rowProps = row.getRowProps();
          return (
            // Use a React.Fragment here so the table markup is still valid
            <React.Fragment key={rowProps.key}>
              <tr {...rowProps}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
              {/* We could pass anything into this */}
              {row.isExpanded &&
                renderRowSubComponent({ row, rowProps, visibleColumns })}
            </React.Fragment>
          );
        })}
        </tbody>
      </table>
      <br/>
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  )
}

export default Table;