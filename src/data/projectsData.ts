const imageDir = 'assets/images';

const getImageURL = (imageName: string) => `${imageDir}/${imageName}`;

export default [
  {
    projectName: 'Tracko - iOS Expense Manager',
    projectDescription:
      'An intuitive iOS expense tracker using Core Data for offline storage, featuring iOS Home/Lock screen widgets and custom analytics.',
    projectImageURL: getImageURL('swift.svg'),
    projectRepoURL: 'https://github.com/Aarsh30/Tracko',
    projectLiveURL: '',
  },
  {
    projectName: 'Github User Finder',
    projectDescription:
      'An automated tool which helps users find their friends and see their statistics and analytics.',
    projectImageURL: getImageURL('1.jpg'),
    projectRepoURL: 'https://github.com/Aarsh30/Github-User-Finder',
    projectLiveURL: 'https://singular-basbousa-36afc0.netlify.app/login',
  },
  {
    projectName: 'Customize AI',
    projectDescription:
      'Built using Three.js, it is an awesome platform to customize your T-shirt. You can also use built-in AI tools for great designs of your T-shirts.',
    projectImageURL: getImageURL('8.png'),
    projectRepoURL: 'https://github.com/Aarsh30/CustomizeAi',
    projectLiveURL: 'https://github.com/Aarsh30/CustomizeAi',
  },
  {
    projectName: 'Bot-Buddy',
    projectDescription:
      'Ai Chat who help you out where in your in problem.',
    projectImageURL: getImageURL('9.png'),
    projectRepoURL: 'https://github.com/Aarsh30/BotBuddy',
    projectLiveURL: 'https://bot-buddy.vercel.app/',
  },
  {
    projectName: 'Health Monitoring Band',
    projectDescription:
      'This is Software + Hardware project which collects the data from the Elder People and provides Information to Users to Monitor and Alarm if something is wrong.',
    projectImageURL: getImageURL('6.jpg'),
    projectRepoURL: 'https://github.com/Aarsh30/Health-Monitoring-Band',
    projectLiveURL: 'https://github.com/Aarsh30/Health-Monitoring-Band',
  },
  {
    projectName: 'Food Frenzy',
    projectDescription:
      'A platform which features Food items, User and Review and Order items at their desired locations.',
    projectImageURL: getImageURL('10.png'),
    projectRepoURL: 'https://github.com/Aarsh30',
    projectLiveURL: 'https://github.com/Aarsh30',
  },
  {
    projectName: 'NFC Based Payment System',
    projectDescription:
      'This is a Software + Hardware project built for payment systems which does not require an internet connection for transactions.',
    projectImageURL: getImageURL('7.jpg'),
    projectRepoURL: 'https://github.com/Aarsh30',
    projectLiveURL: 'https://github.com/Aarsh30',
  },
];
