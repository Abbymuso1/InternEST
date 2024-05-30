'use client';

import {
  _jobs,
  _careerPosts,
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import CareerNewsletter from '../career-newsletter';
import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingStep from '../landing/career-landing-step';
import CareerLandingFeaturedJobs from '../landing/career-landing-featured-jobs';
import CareerLandingHotCategories from '../landing/career-landing-hot-categories';


// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />
      <CareerLandingStep />
      <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} />
      <CareerLandingHotCategories categories={_jobsByCategories} />
      <CareerNewsletter />
    </>
  );
}

