import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { fShortenNumber } from 'src/utils/format-number';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Jobs', number: 200 },
  { name: 'Successful Hiring', number: 300 },
  { name: 'Partners', number: 20 },
  { name: 'Employee', number: 200 },
];

// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(10),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: '75%',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// ----------------------------------------------------------------------

export default function CareerAbout() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography
        paragraph
        variant="overline"
        sx={{ color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}
      >
        About us
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Typography variant="h2">InternEst connects great talent to your business.</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
          <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
            {/* <Typography>
              Forget sifting through irrelevant resumes.
              Get matched with top talent, start
              meaningful conversations and fast-track
              the hiring process.
            </Typography> */}

            <Typography>
              See the roles you’ll need to fill in the
              future. Stay one step ahead by proactively
              building your talent pipeline. When it’s
              time to hire, you’ll have a list of top
              candidates ready to go.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Section />
    </Container>
  );
}

// ----------------------------------------------------------------------

function Section() {
  return (
    <StyledSection>
      <Stack
        sx={{
          py: 10,
          zIndex: 9,
          ml: 'auto',
          position: 'relative',
          px: { xs: 2.5, md: 10 },
          width: { md: 0.75, lg: 0.5 },
        }}
      >
        <Stack
          sx={{
            mb: 5,
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2" paragraph>
            Our Agency is a Startup
          </Typography>
          <Typography sx={{ opacity: 0.72 }}>
            Hello. Our agency is kick-started an year ago and we have started well.
          </Typography>
        </Stack>

        <Box
          sx={{
            gap: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.name} spacing={1}>
              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                <CountUp
                  start={value.number / 5}
                  end={value.number}
                  formattingFn={(newValue) => fShortenNumber(newValue)}
                />

                <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                  +
                </Typography>
              </Typography>

              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {value.name}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>

      <StyledOverlay />

      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0 }}>
        <Image
          alt="career about"
          src="/assets/images/career/career_about_team.jpg"
          sx={{ width: 1, height: 1 }}
        />
      </Box>
    </StyledSection>
  );
}
