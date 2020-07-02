import React from 'react';
// import BootstrapTable from 'react-bootstrap-table-next'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';  

export default function CustomPaginationActionsTable({values}){
  var col = []
  var columns = []
  if(values[0]){
    col = Object.keys(values[0])
    for(var i=0;i<col.length;i++ ){
      columns.push({
        dataField:col[i],
        text: String(col[i])
      })
    }
  }
  return (
		<div class="row justify-content-center" >
      <BootstrapTable
          containerStyle={{maxWidth:"1000px"}}
          headerStyle={ { backgroundColor:"#323a40"} }
          data={values} 
          striped={true} hover={true} 
          keyField='0' 
          pagination={ paginationFactory()}
      >
        {
          col.map((value)=><TableHeaderColumn 
                              dataAlign="center" 
                              dataField={value}
                            >
                              {value}
                            </TableHeaderColumn>)
        }
      </BootstrapTable>
		</div>
	)
}