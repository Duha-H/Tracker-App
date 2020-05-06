import { Application } from "./application";
import { STATUS, APP_SOURCE } from './constants';

export const MOCK_APPS_1 = [
	new Application({
		id: 0,
		company: 'Bob\'s Burgers',
		title: 'Cook',
		date: [1, 1, 2019],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'will likely be ghosted',
	}),
	new Application({
		id: 1,
		company: 'New Company',
		title: 'Software Developer',
		date: [15, 3, 2020],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.REFERRAL.toString(),
		notes: '',
	}),
	new Application({
		id: 2,
		company: 'NASA',
		title: 'Engineer',
		date: [1, 5, 2019],
		status: STATUS.STALE.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'something something space simulation something',
	}),
	new Application({
		id: 3,
		company: 'Hooli',
		title: 'Gavin Belson\'s Blood Boy',
		date: [31, 12, 2019],
		status: STATUS.OFFER.toString(),
		source: APP_SOURCE.JOB_BOARD.toString(),
		notes: 'Welp...',
	}),
	new Application({
		id: 4,
		company: 'Bob\'s Burgers',
		title: 'Cook',
		date: [1, 1, 2019],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'probably will be ghosted',
	}),
	new Application({
		id: 5,
		company: 'Pied Piper',
		title: 'Gilfoyle\'s Intern/Little Bitch',
		date: [5, 5, 2020],
		status: STATUS.INTERVIEW.toString(),
		source: APP_SOURCE.JOB_BOARD.toString(),
		notes: 'probably will be ghosted',
	}),
];

export const MOCK_APPS_2 = [
	new Application({
		id: 0,
		company: 'Bob\'s Burgers',
		title: 'Cook',
		date: [1, 1, 2019],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'will likely be ghosted',
	}),
	new Application({
		id: 1,
		company: 'New Company',
		title: 'Software Developer',
		date: [3, 15, 2020],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.REFERRAL.toString(),
		notes: '',
	}),
	new Application({
		id: 2,
		company: 'Bob\'s Burgers',
		title: 'Cook',
		date: [1, 1, 2019],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'probably will be ghosted',
	}),
	new Application({
		id: 3,
		company: 'Pied Piper',
		title: 'Gilfoyle\'s Intern/Little Bitch',
		date: [5, 5, 2020],
		status: STATUS.INTERVIEW.toString(),
		source: APP_SOURCE.JOB_BOARD.toString(),
		notes: 'probably will be ghosted',
	}),
];

export const MOCK_APPS_3 = [
	new Application({
		id: 0,
		company: 'New Company',
		title: 'Software Developer',
		date: [3, 15, 2020],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.REFERRAL.toString(),
		notes: '',
	}),
	new Application({
		id: 1,
		company: 'NASA',
		title: 'Engineer',
		date: [1, 5, 2019],
		status: STATUS.STALE.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'something something space simulation something',
	}),
	new Application({
		id: 2,
		company: 'Hooli',
		title: 'Gavin Belson\'s Blood Boy',
		date: [31, 12, 2019],
		status: STATUS.OFFER.toString(),
		source: APP_SOURCE.JOB_BOARD.toString(),
		notes: 'Welp...',
	}),
	new Application({
		id: 3,
		company: 'Bob\'s Burgers',
		title: 'Cook',
		date: [1, 1, 2019],
		status: STATUS.IN_REVIEW.toString(),
		source: APP_SOURCE.OTHER.toString(),
		notes: 'probably will be ghosted',
	}),
];