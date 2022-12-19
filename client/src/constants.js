const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 5000;

const CONSTANTS = {
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  AUTH_MODE: {
    REGISTER: 'REGISTER',
    LOGIN: 'LOGIN',
  },

  HEADER_NAV_LINK: 'http://www.google.com',
  CONTEST_PRICING_LINK_PATH: '/pricing',

  HEADER_LEFT_NAV_TEXT_ITEMS: [
    {
      TITLE: 'NAME IDEAS',
      ITEMS: [
        'Beauty',
        'Contest Pricing',
        'Consulting',
        'E-Commerce',
        'Fashion & Clothing',
        'Finance',
        'Real Estate',
        'Tech',
        'More categories',
      ],
    },
    {
      TITLE: 'CONTESTS',
      ITEMS: [
        'How it works',
        'Pricing',
        'Agency service',
        'Active contests',
        'Winners',
        'Leaderboard',
        'Become acreative',
      ],
    },
    {
      TITLE: 'OUR WORK',
      ITEMS: ['Names', 'Taglines', 'Logos', 'Testiomonaials'],
    },
    {
      TITLE: 'NAMES FOR SALE',
      ITEMS: [
        'Popular names',
        'Short names',
        'Intriguing names',
        'Names by category',
        'Visual name search',
        'Sell your domains',
      ],
    },
    {
      TITLE: 'BLOG',
      ITEMS: [
        'Ultimate naming guide',
        'Poetic devices in business naming',
        'Crowded bar theory',
        'All articles',
      ],
    },
  ],
  PRICING_LEVEL: [
    {
      TITLE: 'Bronze',
      SPECIFICATIONS: 'Branding on a budget',
      PRICE: 'US$',
      PRICE_VALUE: 299,
      PRIZE_WINNER: 'Prize to Winner - $135 (Included)',
      VALIDATION_SERVICES: 'Validation Services & Upgrades ($39 value)',
      SERVICES: ['Matching .com URL'],
      OPTION_SERVICES: ['Expected 300+ Entries'],
      TEXT_BTN: 'Start',
    },
    {
      TITLE: 'Gold',
      SPECIFICATIONS: 'Increase participation and basic brand validation',
      PRICE: 'US$',
      PRICE_VALUE: 499,
      PRIZE_WINNER: 'Prize to Winner - $200 (Included)',
      VALIDATION_SERVICES: 'Validation Services & Upgrades ($305 value)',
      SERVICES: [
        'Matching .com URL',
        'Instant Trademark Check (One Database)',
        'NDA and More Privacy',
        'Project Promotion (Basic)',
        'Comprehensive Trademark Research',
      ],
      OPTION_SERVICES: ['Expected 600+ Entries', 'Partial Refund Option'],
      TEXT_BTN: 'Start',
    },
    {
      TITLE: 'Platinum',
      SPECIFICATIONS:
        'Work with top-level creatives, plus agency-style brand validation',
      PRICE: 'US$',
      PRICE_VALUE: 749,
      PRIZE_WINNER: 'Prize to Winner - $300 (Included)',
      VALIDATION_SERVICES: 'Validation Services & Upgrades ($979 value)',
      SERVICES: [
        'Audience Testing (Up to 6 Names) View Sample Report',
        'Comprehensive Trademark Research (3 Names)',
        'Linguistics Analysis (3 Names)',
        'Tier A Creatives',
        'Matching .com URL',
        'Instant Trademark Check (4 Databases)',
        'NDA and More Privacy',
        'Enhanced Project Promotion',
        'Team Collaboration Tools',
      ],
      OPTION_SERVICES: ['Expected 1000+ Entries', 'Partial Refund Option'],
      TEXT_BTN: 'Start',
    },
    {
      TITLE: 'Managed',
      SPECIFICATIONS: 'A full agency experience without the agency price tag',
      PRICE: 'US$',
      PRICE_VALUE: 1499,
      ITEMS: [
        'Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.',
        'With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you"ll receive an enhanced branding experience to closeout your branding project.',
        'Learn More about Managed Contest Service',
      ],
    },
  ],

  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
};

export default CONSTANTS;
