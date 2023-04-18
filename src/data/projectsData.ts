const imageDir = 'assets/images';

const getImageURL = (imageName: string) => `${imageDir}/${imageName}`;

export default [
  {
    projectName: 'Github User Finder',
    projectDescription:
      'An automated tool which helps user to find there friends and see their statics and analytics of user!',
    projectImageURL: getImageURL('1.jpg'),
    projectRepoURL: 'https://github.com/Aarsh30/Github-User-Finder',
    projectLiveURL: 'https://singular-basbousa-36afc0.netlify.app/login',
  },
  {
    projectName: 'Customize AI',
    projectDescription:
      'Build using 3Js it is awesome platform to customize your tshirt and also you can use built in ai tools, for great designs of your tshirts',
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
      'A platfrom which features Food items, User and Review and Order items at thier desire Locations.',
    projectImageURL: getImageURL('10.png'),
    projectRepoURL: 'https://github.com/Aarsh30',
    projectLiveURL: 'https://github.com/Aarsh30',
  },
  {
    projectName: 'NFC Based Payment System',
    projectDescription:
      'This is Software + Hardware project which is buit for payment systems in which user does not required internet for transactions',
    projectImageURL: getImageURL('7.jpg'),
    projectRepoURL: 'https://github.com/Aarsh30',
    projectLiveURL: 'https://github.com/Aarsh30',
  },
];
