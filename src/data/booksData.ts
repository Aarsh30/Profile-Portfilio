export interface BookItem {
  title: string;
  affiliateUrl: string;
}

export interface BookCategory {
  category: string;
  books: BookItem[];
}

const booksData: BookCategory[] = [
  {
    category: 'Finance',
    books: [
      { title: 'MakeEpicMoney', affiliateUrl: 'https://amzn.to/4eEYFLs' },
      { title: 'Money Works', affiliateUrl: 'https://amzn.to/4uxs8f0' },
      { title: 'The Psychology of Money', affiliateUrl: 'https://amzn.to/4uuND0h' },
      { title: 'I Will Teach You to Be Rich', affiliateUrl: 'https://amzn.to/43u66yX' },
      { title: 'The Millionaire Fastlane', affiliateUrl: 'https://amzn.to/3Sp57O5' },
      { title: 'The Simple Path to Wealth', affiliateUrl: 'https://amzn.to/4e9eXw0' },
      { title: 'Your Money or Your Life', affiliateUrl: 'https://amzn.to/49SH5Ba' },
    ],
  },
  {
    category: 'Communication',
    books: [
      { title: 'How to Win Friends and Influence People', affiliateUrl: 'https://amzn.to/4avTVp3' },
      { title: 'Never Split the Difference', affiliateUrl: 'https://amzn.to/4avTVp3' },
      { title: 'Talk Like TED', affiliateUrl: 'https://amzn.to/4ernCsN' },
    ],
  },
  {
    category: 'Psychology & Decision Making',
    books: [
      { title: 'Thinking, Fast and Slow', affiliateUrl: 'https://amzn.to/3PWQ3qk' },
      { title: 'Influence', affiliateUrl: 'https://amzn.to/4ek7Zmz' },
      { title: 'The Laws of Human Nature', affiliateUrl: 'https://amzn.to/4eGjshO' },
      { title: 'Predictably Irrational', affiliateUrl: 'https://amzn.to/4uxr0Ik' },
    ],
  },
  {
    category: 'Startup',
    books: [
      { title: 'The Lean Startup', affiliateUrl: 'https://amzn.to/4uzzM8K' },
      { title: 'Zero to One', affiliateUrl: 'https://amzn.to/3Qkqhfx' },
      { title: 'The Hard Thing About Hard Things', affiliateUrl: 'https://amzn.to/4uwQdmo' },
      { title: 'The Mom Test', affiliateUrl: 'https://amzn.to/4a1xuIi' },
      { title: "Build, Don't Talk", affiliateUrl: 'https://amzn.to/4uzb8oY' },
      { title: 'The Cold Start Problem', affiliateUrl: 'https://amzn.to/43xtQSM' },
      { title: 'Founders at Work', affiliateUrl: 'https://amzn.to/4aKnfbq' },
      { title: 'Rework', affiliateUrl: 'https://amzn.to/4uyYHJI' },
    ],
  },
  {
    category: 'Business',
    books: [
      { title: 'Good to Great', affiliateUrl: 'https://amzn.to/3QEHuk4' },
      { title: 'Blue Ocean Strategy', affiliateUrl: 'https://amzn.to/4otaNmc' },
      { title: 'The Personal MBA', affiliateUrl: 'https://amzn.to/4vMlmTF' },
      { title: 'Built to Last', affiliateUrl: 'https://amzn.to/4gj0K0Q' },
      { title: 'The 22 Immutable Laws of Marketing', affiliateUrl: 'https://amzn.to/4aMCgtj' },
      { title: 'Measure What Matters', affiliateUrl: 'https://amzn.to/3QF8a4f' },
      { title: 'High Output Management', affiliateUrl: 'https://amzn.to/4emkxdl' },
    ],
  },
  {
    category: 'Leadership',
    books: [
      { title: 'Leaders Eat Last', affiliateUrl: 'https://amzn.to/4xsY8Ue' },
      { title: 'Start With Why', affiliateUrl: 'https://amzn.to/4otqo59' },
      { title: 'Extreme Ownership', affiliateUrl: 'https://amzn.to/4eHj6Y8' },
    ],
  },
  {
    category: 'Self Growth',
    books: [
      { title: 'Atomic Habits', affiliateUrl: 'https://amzn.to/445F8xF' },
      { title: 'Deep Work', affiliateUrl: 'https://amzn.to/3SE65WJ' },
      { title: 'The Compound Effect', affiliateUrl: 'https://amzn.to/4aMAicp' },
      { title: 'Essentialism', affiliateUrl: 'https://amzn.to/4uv6wjp' },
      { title: 'Make Your Bed', affiliateUrl: 'https://amzn.to/4uv6wjp' },
      { title: 'Think Straight', affiliateUrl: 'https://amzn.to/4ayz9VR' },
    ],
  },
  {
    category: 'Mindset & Self Help',
    books: [
      { title: "Can't Hurt Me", affiliateUrl: 'https://amzn.to/4eK1Qkb' },
      { title: "Man's Search for Meaning", affiliateUrl: 'https://amzn.to/4e6jYp8' },
      { title: 'The Mountain Is You', affiliateUrl: 'https://amzn.to/3S5h8Z6' },
      { title: 'Think Like a Monk', affiliateUrl: 'https://amzn.to/3SF5tAb' },
      { title: 'The 5 AM Club', affiliateUrl: 'https://amzn.to/4vGTpwz' },
      { title: 'The Almanack of Naval Ravikant', affiliateUrl: 'https://amzn.to/4ecgboU' },
      { title: 'The 7 Habits of Highly Effective People', affiliateUrl: 'https://amzn.to/4e5Md7s' },
      { title: 'Mindset', affiliateUrl: 'https://amzn.to/4vSfTep' },
      { title: "Don't Believe Everything You Think", affiliateUrl: 'https://amzn.to/3S5BCRo' },
    ],
  },
  {
    category: 'Productivity',
    books: [
      { title: 'Getting Things Done', affiliateUrl: 'https://amzn.to/4vHh3Jj' },
      { title: 'The One Thing', affiliateUrl: 'https://amzn.to/4a0XJ1n' },
      { title: 'Eat That Frog!', affiliateUrl: 'https://amzn.to/4vMW5Je' },
      { title: 'Make Time', affiliateUrl: 'https://amzn.to/4uBZIAS' },
      { title: 'Feel-Good Productivity', affiliateUrl: 'https://amzn.to/4uJuJ60' },
    ],
  },
  {
    category: 'Biography',
    books: [
      { title: 'Steve Jobs', affiliateUrl: 'https://amzn.to/4uDnMTZ' },
      { title: 'Elon Musk', affiliateUrl: 'https://amzn.to/49UdlDV' },
      { title: 'Shoe Dog', affiliateUrl: 'https://amzn.to/4egxa9K' },
      { title: 'Educated', affiliateUrl: 'https://amzn.to/4vf35Pk' },
      { title: 'Wings of Fire', affiliateUrl: 'https://amzn.to/4fKp6R1' },
      { title: 'Long Walk to Freedom', affiliateUrl: 'https://amzn.to/4e90ArI' },
      { title: 'Sam Walton: Made in America', affiliateUrl: 'https://amzn.to/4uDorEX' },
      { title: 'Becoming', affiliateUrl: 'https://amzn.to/4eqL2ON' },
      { title: 'The Diary of a Young Girl', affiliateUrl: 'https://amzn.to/3QnaU65' },
    ],
  },
];

export default booksData;
