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
    category: 'Gadgets I Use Daily',
    items: [
      { name: 'My Phone',                badge: 'Daily Driver',          affiliateUrl: 'https://amzn.to/3U5Xfz0' },
      { name: 'Windows Laptop',           affiliateUrl: 'https://amzn.to/4eGLV4y' },
      { name: 'Mac',                      badge: 'iOS Dev Essential',      affiliateUrl: 'https://amzn.to/3U8aXBH' },
      { name: 'Headphones',               affiliateUrl: 'https://amzn.to/4h28xyc' },
      { name: 'Keyboard & Mouse Pad',     affiliateUrl: 'https://amzn.to/4eDAL0L' },
      { name: 'Keyboard & Mouse Combo',   affiliateUrl: 'https://amzn.to/4h28B0U' },
      { name: 'Earbuds',                  badge: 'Everyday Essential',     affiliateUrl: 'https://amzn.to/3YwY1YJ' },
      { name: 'Best Type-C Adapter',      affiliateUrl: 'https://amzn.to/3ZWzj50' },
      { name: 'Monitor',                  affiliateUrl: 'https://amzn.to/3BRnLps' },
      { name: 'SSD',                      affiliateUrl: 'https://amzn.to/3BTawVh' },
      { name: 'Tripod',                   affiliateUrl: 'https://amzn.to/4eXRlbc' },
      { name: 'Microphone',               badge: 'Content Creator Pick', affiliateUrl: 'https://amzn.to/3Nq8SgG' },
    ],
  },
  {
    category: 'Dream Gadgets',
    items: [
      { name: 'Pro Tripod',       badge: 'On My Wishlist', affiliateUrl: 'https://amzn.to/485wSPs' },
      { name: 'Dream Camera',     affiliateUrl: 'https://amzn.to/488nrz2' },
      { name: 'Premium Keyboard', affiliateUrl: 'https://amzn.to/3NuXZtH' },
      { name: 'Flagship Mouse',   affiliateUrl: 'https://amzn.to/3zWDLGe' },
    ],
  },
  {
    category: 'Desk & Furniture',
    items: [
      { name: 'Standing Desk',      badge: 'Desk Setup Hero', affiliateUrl: 'https://amzn.to/3PpAHXu' },
      { name: 'Ergonomic Chair',    affiliateUrl: 'https://amzn.to/3BWU1YM' },
      { name: 'Monitor Desk Stand', affiliateUrl: 'https://amzn.to/3BWgtkO' },
    ],
  },
  {
    category: 'Book Recommendations',
    items: [
      { name: 'Book Pick #1', badge: "Aarsh's Pick", affiliateUrl: 'https://amzn.to/4dLRFc0' },
      { name: 'Book Pick #2', affiliateUrl: 'https://amzn.to/4dQmZX3' },
      { name: 'Book Pick #3', affiliateUrl: 'https://amzn.to/3U6iWz0' },
      { name: 'Book Pick #4', affiliateUrl: 'https://amzn.to/3Ub8d6n' },
      { name: 'Book Pick #5', affiliateUrl: 'https://amzn.to/4h6GIoj' },
    ],
  },
];

export default gearData;
