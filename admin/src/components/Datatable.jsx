import { DataGrid } from '@mui/x-data-grid';
import { useFetch } from '../utils/hooks';
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

// eslint-disable-next-line react/prop-types
export default function DataTable({ columns, url, title }) {
  const [rows, setRows] = useState([]);
  const data = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    setRows(data);
  }, [data]);

  const handleUpdate = (id) => {
    navigate('/new', { state: { url, title, id } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(url + '/' + id);
      const { data } = await axios.get(url);
      setRows(data);
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <Container>
            <Button type="update" onClick={() => handleUpdate(params.row.id)}>
              Modif.
            </Button>
            <Button type="delete" onClick={() => handleDelete(params.row.id)}>
              Suppr.
            </Button>
          </Container>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        // eslint-disable-next-line react/prop-types
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
