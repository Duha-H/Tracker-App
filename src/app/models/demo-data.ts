import { Application } from "./application";
import { APP_SOURCE, STATUS } from "./constants";
import { Journey } from "./journey";
import { User } from "./user";


const TODAY = new Date();
const TODAY_YEAR = TODAY.getFullYear();
const TODAY_MONTH = TODAY.getMonth();
const TODAY_DATE = TODAY.getDate();


export const DEMO_USER = new User({
  firstName: 'Amos',
  lastName: 'Burton',
  id: '42',
  email: 'aburton@purnkleen.co',
  email_verified: true,
  identityProvider: 'DEFAULT'
});

export const DEMO_WISHLIST_APPS: Application[] = [
  new Application({
    id: '42-0',
    company: 'BERATNAS Gas', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(2020, 8, 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1',
    company: 'BERATNAS Air',
    title: 'Mechanical Engineer',
    date: new Date(2020, 7, 23),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-2',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(2020, 7, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-3',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(2020, 7, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-4',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(2020, 7, 19),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
];

const JOURNEY_1_APPS: Application[] = [
  new Application({
    id: '42-1-0',
    company: 'BERATNAS Gas', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-1',
    company: 'Ceres Air',
    title: 'Technical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-2',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-3',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-4',
    company: 'Pur\'n\'Kleen',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 2),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-5',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 3),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-6',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 3),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-7',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 2),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-8',
    company: 'Ceres Air',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 3),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-9',
    company: 'BERATNAS Water',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 4),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-10',
    company: 'BeltTrans', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 5),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-11',
    company: 'Tycho Stripe', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 5),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-12',
    company: 'Ceres Power',
    title: 'Technical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 6),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-13',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 7),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-14',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 8),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-15',
    company: 'Pur\'n\'Kleen',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 8),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-16',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 8),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-17',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 9),
    status: STATUS.ASSESSMENT,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 9) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 5) }
    ],
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-18',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 10),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-19',
    company: 'Ceres Air',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 11),
    status: STATUS.ASSESSMENT,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 11) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 5) }
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-20',
    company: 'Tycho Stripe',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 11),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-21',
    company: 'BeltTrans', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 12),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-22',
    company: 'Ceres Air',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH, TODAY_DATE - 12),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-23',
    company: 'Ceres Power',
    title: 'Reactor Technician',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-24',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 6),
    status: STATUS.ASSESSMENT,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 6) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20) }
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-25',
    company: 'Tycho Stripe',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 6),
    status: STATUS.INTERVIEW,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 6) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 7) },
      { status: STATUS.INTERVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20) },
    ],
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-26',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 4),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-27',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 4),
    status: STATUS.INTERVIEW,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 4) },
      { status: STATUS.INTERVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20) },
    ],
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-28',
    company: 'Pur\'n\'Kleen',
    title: 'Reactor Technician',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 2),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-1-29',
    company: 'Tycho Stripe',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 2),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-30',
    company: 'BERATNAS',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 2),
    status: STATUS.REJECTED,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 2) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 7) },
      { status: STATUS.REJECTED, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20) },
    ],
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-31',
    company: 'Pur\'n\'Kleen',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 1),
    status: STATUS.STALE,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 1) },
      { status: STATUS.STALE, date: new Date(TODAY_YEAR, TODAY_MONTH, 1) },
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-32',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 1),
    status: STATUS.REJECTED,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 1) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 7) },
      { status: STATUS.REJECTED, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20) },
    ],
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-1-33',
    company: 'Pur\'n\'Kleen',
    title: 'Mechanical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 1),
    status: STATUS.OFFER,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 1) },
      { status: STATUS.ASSESSMENT, date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 7) },
      { status: STATUS.INTERVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 20) },
      { status: STATUS.OFFER, date: new Date(TODAY_YEAR, TODAY_MONTH - 1, 20) },
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-34',
    company: 'Tycho Stripe',
    title: 'Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 7),
    status: STATUS.STALE,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 7) },
      { status: STATUS.STALE, date: new Date(TODAY_YEAR, TODAY_MONTH, 7) },
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-35',
    company: 'Protogen',
    title: 'Electrical Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 10),
    status: STATUS.STALE,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 10) },
      { status: STATUS.STALE, date: new Date(TODAY_YEAR, TODAY_MONTH, 10) },
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-1-36',
    company: 'Halogen',
    title: 'Engineer',
    date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 12),
    status: STATUS.STALE,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(TODAY_YEAR, TODAY_MONTH - 2, 12) },
      { status: STATUS.STALE, date: new Date(TODAY_YEAR, TODAY_MONTH, 12) },
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
];

const JOURNEY_2_APPS: Application[] = [
  new Application({
    id: '42-2-0',
    company: 'BERATNAS Gas', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(2020, 2, 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-2-1',
    company: 'BERATNAS Air',
    title: 'Technical Engineer',
    date: new Date(2020, 1, 23),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-2-2',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(2020, 1, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-2-3',
    company: 'Ceres Air',
    title: 'Mechanical Engineer',
    date: new Date(2020, 1, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-2-4',
    company: 'BERATNAS Water',
    title: 'Reactor Engineer',
    date: new Date(2020, 1, 19),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-2-5',
    company: 'BeltTrans', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(2020, 2, 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-2-6',
    company: 'BERATNAS Air',
    title: 'Mechanical Engineer',
    date: new Date(2020, 1, 23),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-2-7',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(2020, 1, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-2-8',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(2020, 1, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-2-9',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(2020, 1, 19),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
  new Application({
    id: '42-2-10',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(2020, 1, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-2-11',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(2020, 1, 19),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
];

const JOURNEY_3_APPS: Application[] = [
  new Application({
    id: '42-3-0',
    company: 'BERATNAS Gas', // Tycho Stripe Pur 'n Kleen Protogen Ceres Air Ceres Water Ceres Power BERATNAS AIR BERATNAS WATER CANTERBURRY BeltTrans Tech Noir
    title: 'Mechanical Engineer',
    date: new Date(2020, 8, 1),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-3-1',
    company: 'BERATNAS Air',
    title: 'Mechanical Engineer',
    date: new Date(2020, 7, 23),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-3-2',
    company: 'Tech Noir',
    title: 'Reactor Technician',
    date: new Date(2020, 7, 20),
    status: STATUS.IN_REVIEW,
    source: APP_SOURCE.JOB_BOARD,
    notes: '',
  }),
  new Application({
    id: '42-3-3',
    company: 'BeltTrans',
    title: 'Mechanical Engineer',
    date: new Date(2020, 7, 20),
    status: STATUS.STALE,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(2020, 7, 20) },
      { status: STATUS.STALE, date: new Date(2020, 9, 20) },
    ],
    source: APP_SOURCE.COMPANY,
    notes: '',
  }),
  new Application({
    id: '42-3-4',
    company: 'BERATNAS Gas',
    title: 'Reactor Engineer',
    date: new Date(2020, 7, 19),
    status: STATUS.STALE,
    timeline: [
      { status: STATUS.IN_REVIEW, date: new Date(2020, 7, 19) },
      { status: STATUS.STALE, date: new Date(2020, 9, 19) },
    ],
    source: APP_SOURCE.REFERRAL,
    notes: '',
  }),
];


export const DEMO_JOURNEYS = {
  '42-4': new Journey({
    title: 'Technician Applications 🛠️',
    id: '42-3',
    startDate: new Date(2020, 7, 1),
    endDate: new Date(2020, 8, 30),
    active: false,
    applications: JOURNEY_3_APPS,
    userId: '42',
  }),
  '42-3': new Journey({
    title: 'Winter ☃️',
    id: '42-3',
    startDate: new Date(2020, 7, 1),
    active: true,
    applications: JOURNEY_3_APPS,
    userId: '42',
  }),
  '42-2': new Journey({
    title: 'Journey 24X0D3',
    id: '42-2',
    startDate: new Date(2020, 1, 5),
    endDate: new Date(2020, 2, 30),
    active: false,
    applications: JOURNEY_2_APPS,
    userId: '42',
  }),
  '42-1': new Journey({
    title: 'Journey 01 💣',
    id: '42-1',
    startDate: new Date(TODAY_YEAR, 0, 1),
    active: true,
    applications: JOURNEY_1_APPS,
    userId: '42',
  }),
};
