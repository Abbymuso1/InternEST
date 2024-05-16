'use client';

import * as React from 'react';
import { Typography } from '@mui/material';
import PageContainer from '../../app/dash-components/container/PageContainer';
import DashboardCard from '../../app/dash-components/shared/DashboardCard';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {
    GridRowsProp,
    GridRowModesModel,
    GridRowModes,
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridActionsCellItem,
    GridEventListener,
    GridRowId,
    GridRowModel,
    GridRowEditStopReasons,
    GridSlots,
} from '@mui/x-data-grid';

import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
    randomJobTitle,
    randomQuantity,
    randomCompanyName
} from '@mui/x-data-grid-generator';

const status = ['Active', 'Inactive'];
const randomStatus = () => {
    return randomArrayItem(status);
};

const initialRows: GridRowsProp = [
    {
        id: randomId(),
        company: randomCompanyName(),
        jobtitle: randomJobTitle(),
        joinDate: randomCreatedDate(),
        applications: randomQuantity(),
        status: randomStatus(),
    },
    {
        id: randomId(),
        company: randomCompanyName(),
        jobtitle: randomJobTitle(),
        joinDate: randomCreatedDate(),
        applications: randomQuantity(),
        status: randomStatus(),
    },
    {
        id: randomId(),
        company: randomCompanyName(),
        jobtitle: randomJobTitle(),
        joinDate: randomCreatedDate(),
        applications: randomQuantity(),
        status: randomStatus(),
    },
    {
        id: randomId(),
        company: randomCompanyName(),
        jobtitle: randomJobTitle(),
        joinDate: randomCreatedDate(),
        applications: randomQuantity(),
        status: randomStatus(),
    },
    {
        id: randomId(),
        company: randomCompanyName(),
        jobtitle: randomJobTitle(),
        joinDate: randomCreatedDate(),
        applications: randomQuantity(),
        status: randomStatus(),
    },
];

interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
}

function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <Card>


        </Card>
    );
}



export default function Page() {
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow!.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns: GridColDef[] = [
        { field: 'company', headerName: 'Company', width: 180, editable: true },
        { field: 'jobtitle', headerName: 'Job Title', width: 180, editable: true },
        {
            field: 'joinDate',
            headerName: 'Date',
            type: 'date',
            width: 180,
            editable: true,
        },

        {
            field: 'status',
            headerName: 'Status',
            width: 220,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Active', 'Inactive'],
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(id)}
                            color="inherit"
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <PageContainer title="InternEST: Applied Positions" description="">
            <DashboardCard title="Applied Positions">
                <div>
                    <Box
                        sx={{
                            height: 500,
                            width: '100%',
                            '& .actions': {
                                color: 'text.secondary',
                            },
                            '& .textPrimary': {
                                color: 'text.primary',
                            },
                        }}
                    >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            editMode="row"
                            rowModesModel={rowModesModel}
                            onRowModesModelChange={handleRowModesModelChange}
                            onRowEditStop={handleRowEditStop}
                            processRowUpdate={processRowUpdate}
                            slots={{
                                toolbar: EditToolbar as GridSlots['toolbar'],
                            }}
                            slotProps={{
                                toolbar: { setRows, setRowModesModel },
                            }}
                        />
                    </Box>
                </div>
            </DashboardCard>
        </PageContainer>
    );
};



