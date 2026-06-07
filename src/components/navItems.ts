import {
  faHouse,
  faBookOpen,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    icon: faHouse,
    route: '/#hero-root',
    label: 'Home',
  },
  {
    icon: faBolt,
    route: '/gear',
    label: 'Gear',
  },
  {
    icon: faBookOpen,
    route: '/blog',
    label: 'Blog',
  },
];

