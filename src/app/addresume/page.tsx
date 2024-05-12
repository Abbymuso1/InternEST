'use client';
import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

import PageContainer from '../../app/dash-components/container/PageContainer';
import DashboardCard from '../../app/dash-components/shared/DashboardCard';
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

// Handle Password

// Handle Select

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

const SamplePage = () => {
  const [formData, setFormData] = useState({
    username: '',
    jobType: '',
    jobCategory: '',
    location: '',
    salary: '',
    gender: '',
    qualification: '',
    experience: '',
    resumeDescription: '',
    educationDescription: '',
    degree: '',
    educationFromDate: '',
    educationToDate: '',
    educationInstitute: '',
    jobPost: '',
    jobFromDate: '',
    jobToDate: '',
    jobInstitute: '',
    jobDescription: '',
    skills: '',
    value: '',
    skillsToDate: '',
    contactName: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <PageContainer title="Add Resume" description="">
      <DashboardCard title="Add Resume">
        <div>
          <Divider sx={{ margin: 0 }} />
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Basic Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Your name' placeholder='John Doe' helperText="Your name" value={formData.username} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    id="job-type"
                    select
                    label="Select"
                    defaultValue="job type"
                    helperText="Job Type"
                    value={formData.jobType}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Full Time</MenuItem>
                    <MenuItem value={2}>Part Time</MenuItem>
                    <MenuItem value={3}>Free Lance</MenuItem>
                    <MenuItem value={4}>Temporary</MenuItem>
                  </TextField>

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    id="job-category"
                    select
                    label="Select"
                    defaultValue="job category"
                    helperText="Job Category"
                    value={formData.jobCategory}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Accounting/Finance</MenuItem>
                    <MenuItem value={2}>Restaurant/Food Service</MenuItem>
                    <MenuItem value={3}>Counselling</MenuItem>
                    <MenuItem value={4}>Health Care</MenuItem>
                    <MenuItem value={5}>Information Technology</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Location' placeholder='Location' helperText="Location" value={formData.location}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Salary' placeholder='USD' helperText="Salary" value={formData.salary}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    id="gender"
                    select
                    label="Gender"
                    defaultValue="gender"
                    helperText="Gender"
                    value={formData.gender} onChange={handleChange}
                  >
                    {gender.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Qualification' placeholder='Graduate' helperText="Qualification" value={formData.qualification} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth
                    id="experience"
                    select
                    label="Experience"
                    defaultValue="experience"
                    helperText="Experience"
                    value={formData.experience} onChange={handleChange}
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
                    label="Description"
                    placeholder="Detailed Information"
                    multiline
                    rows={4}
                    value={formData.resumeDescription} onChange={handleChange}
                  />
                </Grid>


                <Grid item xs={12}>
                  <Divider sx={{ marginBottom: 0 }} />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Education
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Degree' placeholder='Write' value={formData.degree} onChange={handleChange} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='From Date' placeholder='07.1.2019' value={formData.fromDate} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='To Date' placeholder='07.1.2019' value={formData.toDate} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Institute' placeholder='Institute' value={formData.institute} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                    id="description"
                    label="Description"
                    placeholder="Detailed Information"
                    multiline
                    rows={4}
                    value={formData.educationDescription} onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ marginBottom: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Work Experience
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Job Post' placeholder='Job Post' value={formData.jobPost} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='From Date' placeholder='07.1.2019' value={formData.jobfromdate} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='To Date' placeholder='07.1.2019' value={formData.jobtodate} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Institute' placeholder='Institute' value={formData.jobInstitute} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth
                    id="description"
                    label="Description"
                    placeholder="Detailed Information"
                    multiline
                    rows={4}
                    value={formData.jobDescription} onChange={handleChange}
                  />
                </Grid>


                <Grid item xs={12}>
                  <Divider sx={{ marginBottom: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Skills and Portfolio
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Skills' placeholder='Skills' value={formData.skills} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Value' placeholder='Value' value={formData.value} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='To Date' placeholder='07.1.2019' value={formData.skillstoDate} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Resume
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>


                <Grid item xs={12}>
                  <Divider sx={{ marginBottom: 0 }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>
                    Contact Details
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Name' placeholder='Name' value={formData.contactname} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Email' placeholder='Email Address' value={formData.email} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Phone(Optional)' placeholder='Phone' value={formData.phone} onChange={handleChange} />
                </Grid>
              </Grid>
            </CardContent>
            <Divider sx={{ margin: 0 }} />
            <CardActions>
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={<SendIcon />}
                type='submit'
              >
                Send
                <VisuallyHiddenInput type="file" />
              </Button>
            </CardActions>
          </form>
        </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

