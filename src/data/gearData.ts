export interface GearItem {
  name: string;
  affiliateUrl: string;
  badge?: string;
}

export interface GearCategory {
  category: string;
  items: GearItem[];
}

const gearData: GearCategory[] = [
  {
    category: 'Tech Products',
    items: [
      { name: 'Mac Book Pro 16 inch', affiliateUrl: 'https://amzn.to/4orBcAH' },
      { name: 'Mac Book Air', affiliateUrl: 'https://amzn.to/4xs18jY' },
      { name: 'Window Laptop', affiliateUrl: 'https://amzn.to/4vclY5k' },
      { name: 'Monitor 1', affiliateUrl: 'https://amzn.to/4vclY5k' },
      { name: 'Monitor 2', affiliateUrl: 'https://amzn.to/43y93yy' },
      { name: 'Connecting Doc', affiliateUrl: 'https://amzn.to/3S1wEVP' },
      { name: 'USB Doc', affiliateUrl: 'https://amzn.to/3Qn7253' },
      { name: 'Headphones', affiliateUrl: 'https://amzn.to/3Qn7253' },
      { name: 'Sony XM4 (similar type)', affiliateUrl: 'https://amzn.to/3Qn7253' },
      { name: '2 TB harddrive', affiliateUrl: 'https://amzn.to/3RXAe3h' },
      { name: 'SSD', affiliateUrl: 'https://amzn.to/4xssXIU' },
      { name: 'Power Bank', affiliateUrl: 'https://amzn.to/4xyFZVp' },
      { name: 'Wired Earphones', affiliateUrl: 'https://amzn.to/3SE3s7j' },
      { name: 'wireless earphones', affiliateUrl: 'https://amzn.to/4xqfu4n' },
      { name: 'Keyboard', affiliateUrl: 'https://amzn.to/4xqfu4n' },
      { name: 'Mouse', affiliateUrl: 'https://amzn.to/4v8Q0qJ' },
      { name: 'Testing Device', affiliateUrl: 'https://amzn.to/3QATEdM' },
    ],
  },
  {
    category: 'Upcoming Tech Upgrades',
    items: [
      { name: 'Keychron Keyboard', affiliateUrl: 'https://amzn.to/4xstcni' },
      { name: 'Keychron Keyboard (Alternative)', affiliateUrl: 'https://amzn.to/4utSoad' },
      { name: 'Mouse', affiliateUrl: 'https://amzn.to/4vFDkHw' },
      { name: 'Phone', affiliateUrl: 'https://amzn.to/4vQnk5K' },
      { name: 'Standing Desk', affiliateUrl: 'https://amzn.to/43CwcQi' },
      { name: 'Chair', affiliateUrl: 'https://amzn.to/4vcngNI' },
      { name: 'monitor light', affiliateUrl: 'https://amzn.to/4urYxUh' },
    ],
  },
  {
    category: 'Desktop Accessories & Decor',
    items: [
      { name: 'Desk Mat', affiliateUrl: 'https://amzn.to/49Uaefd' },
      { name: 'desk light', affiliateUrl: 'https://amzn.to/49Uaefd' },
      { name: 'Magnetic strip lamp', affiliateUrl: 'https://amzn.to/444yxnd' },
      { name: 'vintage lamp for desk', affiliateUrl: 'https://amzn.to/4ekbiuh' },
      { name: 'monitor desk stand', affiliateUrl: 'https://amzn.to/43CwcQi' },
      { name: 'Desk table', affiliateUrl: 'https://amzn.to/4vKQJhB' },
      { name: 'Current chair', affiliateUrl: 'https://amzn.to/4vcngNI' },
      { name: 'laptop stand', affiliateUrl: 'https://amzn.to/4vcngNI' },
      { name: 'flodable laptop stand compact size', affiliateUrl: 'https://amzn.to/4fEHBq0' },
      { name: 'Anime action figure', affiliateUrl: 'https://amzn.to/448eKDo' },
      { name: 'Other Action Figure', affiliateUrl: 'https://amzn.to/4eEr4RY' },
      { name: 'Toy Car', affiliateUrl: 'https://amzn.to/4v1XNX8' },
      { name: 'Vintage Car', affiliateUrl: 'https://amzn.to/3RXiiWu' },
      { name: 'evil eye for desk', affiliateUrl: 'https://amzn.to/4vQruKY' },
      { name: 'bonsai tree for desk', affiliateUrl: 'https://amzn.to/4vQruKY' },
      { name: 'simple plants', affiliateUrl: 'https://amzn.to/4e70nVV' },
      { name: 'hanging plants for decor', affiliateUrl: 'https://amzn.to/4eqGWWV' },
      { name: 'hotwheels for Desk', affiliateUrl: 'https://amzn.to/4uSvgCJ' },
      { name: 'desk motivational quotes', affiliateUrl: 'https://amzn.to/444zdJh' },
      { name: 'curtain lights', affiliateUrl: 'https://amzn.to/4osdV1M' },
      { name: 'spot light for desk bg', affiliateUrl: 'https://amzn.to/3Sp2qfr' },
      { name: 'square effect light', affiliateUrl: 'https://amzn.to/3Sp2qfr' },
      { name: 'Dream Catcher', affiliateUrl: 'https://amzn.to/4oyQggc' },
    ],
  },
];

export default gearData;
