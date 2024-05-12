import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Jobs', path: paths.career.jobs },
      { title: 'Job', path: paths.career.job },
      { title: 'Blog Posts', path: paths.career.posts },
      { title: 'Blog Post', path: paths.career.post },
      { title: 'About', path: paths.career.about },
      { title: 'Contact', path: paths.career.contact },
    ]
  },
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: 'Login Illustration', path: paths.loginIllustration },
      { title: 'Register Illustration', path: paths.registerIllustration },
      { title: 'Forgot Password', path: paths.forgotPassword },
      { title: 'Verify Code', path: paths.verify },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Internships', path: paths.career.jobs },
  { title: 'About Us', path: paths.career.about },
  { title: 'Contact', path: paths.career.contact },
];
