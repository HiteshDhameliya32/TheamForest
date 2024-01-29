import React, { useEffect } from 'react'
import {useTable,useSortBy} from 'react-table';

// SuperResponsiveTable
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function TableComponent({ columns, data , className}) {

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
      } = useTable({
        columns,
        data
      },
      useSortBy // This plugin Hook will help to sort our table columns
      );

  return (
    <Table {...getTableProps()} className={className}>
      <Thead>
          <Tr >
            {headerGroups[0].headers.map((column,i) => (
              <Th 
              className={
                column.isSorted
                  ? column.isSortedDesc
                    ? "sort-desc"
                    : "sort-asc"
                  : ""
              }
              key={i} 
              {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</Th>
            ))}
          </Tr>
        
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell,indx) => {
                return <Td key={indx} {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  )
}

export default TableComponent