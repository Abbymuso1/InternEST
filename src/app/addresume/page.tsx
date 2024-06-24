"use client"

import { useState } from 'react';
import PageContainer from '../dash-components/container/PageContainer';
import DashboardCard from '../../app/dash-components/shared/DashboardCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { createResume } from './actions';
import SendIcon from '@mui/icons-material/Send';


const SamplePage = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    salary: '',
    gender: '',
    qualification: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  async function handleSubmit(event) {

    const result = await createResume(formData);
    const { error } = JSON.parse(result);

    if (!error?.message) {
      console.log("Successfully uploaded");
    }
    else {
      console.log("Unsuccessful");
    }
  };


  return (
    <PageContainer title="InternEst: Add Resume" description="">
      <DashboardCard title="Add Resume">
        <div>
          <Divider sx={{ margin: 0 }} />
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Basic Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your name"
                    placeholder="John Doe"
                    helperText="Your name"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    placeholder="Location"
                    helperText="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Salary"
                    placeholder="USD"
                    helperText="Salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Gender"
                    placeholder="Gender"
                    helperText="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Qualification"
                    placeholder="Graduate"
                    helperText="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <Select
                    fullWidth
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select</MenuItem>
                    {experience.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    placeholder="Detailed Information"
                    multiline
                    rows={4}
                    name="resumeDescription"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Resume
                    <input type="file" style={{ display: 'none' }} />
                  </Button>
                </Grid> */}
              </Grid>
            </CardContent>
            <Divider sx={{ margin: 0 }} />
            <CardActions>
              <Button
                variant="contained"
                startIcon={<SendIcon />}
                type="submit"
              >
                Send
              </Button>
            </CardActions>
          </form>
        </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;