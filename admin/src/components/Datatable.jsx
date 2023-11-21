import { DataGrid } from '@mui/x-data-grid';
import { useFetch } from '../utils/hooks';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  border: 1px solid teal;
  color: teal;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.type === 'delete' &&
    `
      border: 1px solid crimson;
      color: crimson;
    `}
`;

export default function DataTable() {
  const data = useFetch('http://localhost:8800/api/machines');

  const columns = [
    { field: 'name', headerName: 'Nom', width: 160 },
    { field: 'brand', headerName: 'Marque', width: 130 },
    {
      field: 'model',
      headerName: 'Model',
      width: 160,
    },
    {
      field: 'color',
      headerName: 'Couleur',
      sortable: false,
      width: 90,
      valueGetter: (params) => (params.row.color === 1 ? 'Oui' : 'Non'),
    },
  ];

  const rows = data;

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <Container>
            <Button type="update">Modif.</Button>
            <Button type="delete">Suppr.</Button>
          </Container>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
