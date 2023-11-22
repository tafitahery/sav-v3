export const machinesColumns = [
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

export const customersColumns = [
  { field: 'customer', headerName: 'Nom', width: 120 },
  { field: 'machineModel', headerName: 'Machine', width: 90 },
  { field: 'location', headerName: 'Emplacement', width: 160 },
  { field: 'serialNumber', headerName: 'S/N', width: 120 },
  { field: 'counterBlack', headerName: 'Noir', width: 90 },
  { field: 'counterColor', headerName: 'Couleur', width: 90 },
  { field: 'contract', headerName: 'Contrat', width: 90 },
];

export const partsColumns = [
  { field: 'name', headerName: 'Nom', width: 200 },
  { field: 'reference', headerName: 'Références', width: 200 },
];

export const techniciansColumns = [
  { field: 'name', headerName: 'Nom', width: 200 },
];
