// import axios from 'axios';

export const machineForm = [
  {
    id: 1,
    label: 'Type',
    name: 'name',
    inputType: 'select',
    options: [
      { value: 'Multifonction', option: 'Multifonction' },
      { value: 'Caisse', option: 'Caisse' },
    ],
    required: true,
  },
  {
    id: 2,
    label: 'Marque',
    name: 'brand',
    inputType: 'input',
    type: 'text',
    placeholder: 'Marque...',
    required: true,
  },
  {
    id: 3,
    label: 'Modèle',
    name: 'model',
    inputType: 'input',
    type: 'text',
    placeholder: 'Modèles...',
    required: true,
  },
  {
    id: 4,
    label: 'Couleur',
    name: 'color',
    inputType: 'select',
    options: [
      { value: 'yes', option: 'Oui' },
      { value: 'no', option: 'Non' },
    ],
    required: false,
  },
];

export const customerForm = [
  {
    id: 1,
    label: 'Nom',
    name: 'name',
    inputType: 'input',
    type: 'text',
    placeholder: 'Nom..',
    required: true,
  },
  {
    id: 2,
    label: 'Adresse',
    name: 'address',
    inputType: 'input',
    type: 'text',
    placeholder: 'Adresse...',
    required: true,
  },
];

export const locationForm = [
  {
    id: 1,
    label: 'Client',
    name: 'customer_id',
    inputType: 'select',
    data: 'customer',
    options: [],
    required: true,
  },
  {
    id: 2,
    label: 'Emplacement',
    name: 'location_name',
    inputType: 'input',
    type: 'text',
    placeholder: 'Emplacement...',
    required: false,
  },
  {
    id: 3,
    label: 'machine',
    name: 'machine_id',
    inputType: 'select',
    data: 'machine',
    options: [],
    required: true,
  },
  {
    id: 4,
    label: 'Numero de serie',
    name: 'serial_number',
    inputType: 'input',
    type: 'text',
    placeholder: 'Numero de serie...',
    required: true,
  },
  {
    id: 5,
    label: 'Compteur Noir',
    name: 'counter_BW',
    inputType: 'input',
    type: 'number',
    placeholder: 'Compteur Noir...',
  },
  {
    id: 6,
    label: 'Compteur Couleur',
    name: 'counter_C',
    inputType: 'input',
    type: 'number',
    placeholder: 'Compteur Noir...',
  },
  {
    id: 7,
    label: 'Contrat',
    name: 'contract',
    inputType: 'select',
    options: [
      { value: 'Location', option: 'Location' },
      { value: 'Maintenance', option: 'Maintenance' },
    ],
  },
];

export const partForm = [
  {
    id: 1,
    label: 'Nom',
    name: 'name',
    inputType: 'input',
    placeholder: 'Nom..',
    required: true,
  },
  {
    id: 2,
    label: 'Référence',
    name: 'reference',
    inputType: 'input',
    placeholder: 'Référence...',
    required: true,
  },
];

export const technicianForm = [
  {
    id: 1,
    label: 'Nom',
    name: 'name',
    inputType: 'input',
    placeholder: 'Nom...',
    required: true,
  },
];
