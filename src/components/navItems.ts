import {
  faHouse,
  faLightbulb,
  faRoad,
  faToolbox,
  faTrophy,
  faUser,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    icon: faHouse,
    route: '/#home',
    label: 'Home',
  },
  {
    icon: faUser,
    route: '/#about',
    label: 'About',
  },
  {
    icon: faToolbox,
    route: '/#skills',
    label: 'Skills',
  },
  {
    icon: faLightbulb,
    route: '/#projects',
    label: 'Projects',
  },
  {
    icon: faTrophy,
    route: '/#achievements',
    label: 'Achievements',
  },
  {
    icon: faBookOpen,
    route: '/blog',
    label: 'Blog',
  },
];
