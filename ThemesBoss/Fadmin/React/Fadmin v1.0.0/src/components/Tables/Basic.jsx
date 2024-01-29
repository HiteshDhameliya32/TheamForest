
import {useTable} from 'react-table';

// SuperResponsiveTable
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function BasicTable({ columns, data , className}) {

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
      );

  return (
    <Table {...getTableProps()} className={`table ${className}`}>
      <Thead>
          <Tr >
            {headerGroups[0].headers.map((column,i) => (
              <Th 
              scope="row"
              key={i} 
              {...column.getHeaderProps()}>{column.render("Header")}</Th>
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

export default BasicTable