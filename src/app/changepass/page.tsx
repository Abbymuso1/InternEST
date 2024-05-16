// ** React Imports
"use client"
import { forwardRef, useState } from 'react'
import PageContainer from '../dash-components/container/PageContainer';

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import { styled } from '@mui/material/styles';

import EditIcon from '@mui/icons-material/Edit';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface State {
    password: string
    password2: string
    showPassword: boolean
    showPassword2: boolean
}

const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
    // ** States
    const [language, setLanguage] = useState<string[]>([])
    const [date, setDate] = useState<Date | null | undefined>(null)
    const [values, setValues] = useState<State>({
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false
    })

    // Handle Password

    // Handle Select
    const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
        setLanguage(event.target.value as string[])
    }

    return (
        <PageContainer title="InternEST: Change Password" description="">
            <Card>
                <CardHeader title='Change Password' titleTypographyProps={{ variant: 'h6' }} />
                <Divider sx={{ margin: 0 }} />
                <form onSubmit={e => e.preventDefault()}>
                    <CardContent>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                    Change Password
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label='Current Password' placeholder='Current Password' helperText="Current Password" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label='New Password' placeholder='New Password' helperText="New Password" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label='Confirm New Password' placeholder='Confirm New Password' helperText="Confirm New Password" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider sx={{ margin: 0 }} />
                    <CardActions>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<EditIcon />}
                        >
                            Change Password
                            <VisuallyHiddenInput type="file" />
                        </Button>

                    </CardActions>
                </form>
            </Card>
        </PageContainer>
    )
}

export default FormLayoutsSeparator
