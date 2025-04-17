import React from 'react'
import { DataGrid, DataGridProps, GridColDef } from '@mui/x-data-grid'
import Box from '@mui/material/Box'

// export interface MuiDataTableProps<T> extends Omit<DataGridProps, 'data' | 'columns'> {
//   loader?: Promise<T[]>
//   data?: T[]
//   columns: GridColDef<T[]>[]
// }
export interface MuiDataTableProps extends Omit<DataGridProps, 'data' | 'columns'> {
  loader?: Promise<any[]>
  data?: any[]
  columns: GridColDef<any>[]
}

export const MuiDataTable = ({ data, loader, columns, ...muiDataGridProps }: MuiDataTableProps) => {
  const [rowData, setRowData] = React.useState<any[]>()

  const fetchData = React.useCallback(async () => {
    if (data != undefined) {
      console.log('Data already loaded')
      setRowData(data)
      return
    }

    if (!loader) {
      console.warn('No data loader provided')
      return
    }
    loader.then((result) => {
      console.log(result)
      setRowData(result)
    })
  }, [loader, data])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      {rowData && (
        <DataGrid
          rows={rowData || []}
          //getRowId={(row) => row.name}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
              },
            },
            sorting: {
              sortModel: [
                {
                  field: 'name',
                  sort: 'asc',
                },
              ],
            },
          }}
          pageSizeOptions={[25, 50, 100]}
          autosizeOnMount={true}
          disableAutosize={false}
          checkboxSelection={false}
          disableRowSelectionOnClick={true}
          {...muiDataGridProps}
        />
      )}
      <Box sx={{ p: 1 }} onClick={() => fetchData()}>
        Reload
      </Box>
      {/*rowData && <ReactJson src={rowData} collapsed={true} />*/}
    </>
  )
}
