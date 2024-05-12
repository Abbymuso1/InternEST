// ** React Imports
"use client"
import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { Stack } from '@mui/material'

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

    const jobTypes = [
        {
            value: 1,
            label: 'Full Time',
        },
        {
            value: 2,
            label: 'Part Time',
        },
        {
            value: 3,
            label: 'Free Lance',
        },
        {
            value: 4,
            label: 'Temporary',
        },
    ];

    const jobCategories = [
        {
            value: 1,
            label: 'Accounting/Finance',
        },
        {
            value: 2,
            label: 'Restaurant/Food Service',
        },
        {
            value: 3,
            label: 'Counselling',
        },
        {
            value: 4,
            label: 'Health Care',
        },
        {
            value: 5,
            label: 'Information Technology',
        },
    ];

    const gender = [
        {
            value: 1,
            label: 'Female',
        },
        {
            value: 2,
            label: 'Male',
        },
    ];

    const experience = [
        {
            value: 1,
            label: '1 Year',
        },
        {
            value: 2,
            label: '2 Years',
        },
        {
            value: 3,
            label: '3 Years',
        },
    ];

    const country = [
        {
            value: 1,
            label: 'Latvia',
        },
        {
            value: 2,
            label: 'Estonia',
        },
        {
            value: 3,
            label: 'Lithunia',
        },
    ];

    const city = [
        {
            value: 1,
            label: 'Tallinn',
        },
        {
            value: 2,
            label: 'Tartu',
        },
        {
            value: 3,
            label: 'Narva',
        },
    ];

    return (
        <Card>
            <CardHeader title='Post A Job' titleTypographyProps={{ variant: 'h6' }} />
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={e => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                Basic Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Job Title' placeholder='John Doe' helperText="Your title" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="job-type"
                                select
                                label="Select"
                                defaultValue="job type"
                                helperText="Job Type"
                            >
                                {jobTypes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="job-category"
                                select
                                label="Select"
                                defaultValue="job category"
                                helperText="Job Category"
                            >
                                {jobCategories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Location' placeholder='Location' helperText="Location" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Salary' placeholder='USD' helperText="Salary" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="gender"
                                select
                                label="Gender"
                                defaultValue="gender"
                                helperText="Gender"
                            >
                                {gender.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="country"
                                select
                                label="Country"
                                defaultValue=""
                                helperText="Country"
                            >
                                {country.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="city"
                                select
                                label="City"
                                defaultValue=""
                                helperText="City"
                            >
                                {city.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label='Qualification' placeholder='Graduate' helperText="Qualification" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth
                                id="experience"
                                select
                                label="Experience"
                                defaultValue="experience"
                                helperText="Experience"
                            >
                                {experience.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth
                                id="description"
                                label="Job Description"
                                placeholder="Detailed Information"
                                helperText="Job Description"
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions>
                    <Stack gap={2} direction="row">
                        <Button
                            component="label"
                            role={undefined}
                            variant="outlined"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon/>}
                        >
                            Upload File
                            <VisuallyHiddenInput type="file" />
                        </Button>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<SendIcon />}
                        >
                            Post a Job
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </Stack>
                </CardActions>
            </form>
        </Card>
    )
}

export default FormLayoutsSeparator
