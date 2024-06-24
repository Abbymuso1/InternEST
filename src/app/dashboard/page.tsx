'use client'
import { Grid, Box, Stack } from '@mui/material';
import PageContainer from '../dash-components/container/PageContainer';
// components

import DashboardCard from '../dash-components/shared/DashboardCard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@mui/icons-material/PostAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default async function page() {
    return (
        <PageContainer title="InternEST: Dashboard" description="">
            <DashboardCard title="Hello, User">
                <Grid container spacing={3} sx={{ bgcolor: '#fff3e0', padding: 3 }}>
                    <Grid item sm={4}>
                        <Card sx={{ width: 275, bgcolor: 'white' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="#7C809B" gutterBottom>
                                    Add Resume
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                                    <PostAddIcon sx={{ fontSize: 66, color: '#23001E' }} />
                                </Box>
                                <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="#23001E" align="center">
                                    Add or make changes to the existing resume
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="/addresume" sx={{ fontWeight: 'bold', color: '#575C55' }}>Add/Edit Resume</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{ width: 275, bgcolor: 'white' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="#7C809B" gutterBottom>
                                    View Applied Positions
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                                    <VisibilityIcon sx={{ fontSize: 66, color: '#23001E' }} />
                                </Box>
                                <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="#23001E" align="center">
                                    View the status of the applied positions
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="/applied" sx={{ fontWeight: 'bold', color: '#575C55' }}>View Applications</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{ width: 275, bgcolor: 'white' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="#7C809B" gutterBottom>
                                    Edit Profile
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                                    <EditIcon sx={{ fontSize: 66, color: '#23001E' }} />
                                </Box>
                                <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="#23001E" align="center">
                                    Add or make changes to your user profile
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="/editProfile" sx={{ fontWeight: 'bold', color: '#575C55' }}>Add/Edit User Profile</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </DashboardCard>
        </PageContainer>
    )
}


