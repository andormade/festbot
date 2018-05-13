const GetStarted = require('./conversations/getStarted');
const StreamProviderAuth = require('./conversations/streamProviderAuth');
const AtTheFestival = require('./conversations/atTheFestival');
const FavoriteGenres = require('./conversations/favroiteGenres');
const Settings = require('./conversations/settings');
const pathToRegexp = require('path-to-regexp');

const routes = [
	{ route: '/get-started', handler: GetStarted.getStarted },

	{
		route: '/stream-provider-auth/confirm-select',
		handler: StreamProviderAuth.confirmSelect
	},
	{
		route: '/stream-provider-auth/select',
		handler: StreamProviderAuth.select
	},
	{
		route: '/stream-provider-auth/dont-want',
		handler: StreamProviderAuth.dontWant
	},
	{
		route: '/stream-provider-auth/auth/:provider',
		handler: StreamProviderAuth.auth
	},
	{
		route: '/stream-provider-auth/data-received',
		handler: StreamProviderAuth.dataReceived
	},

	{ route: '/at-the-festival/food', handler: AtTheFestival.food },
	{ route: '/at-the-festival/toilet', handler: AtTheFestival.toilet },
	{ route: '/at-the-festival/agenda', handler: AtTheFestival.agenda },

	{
		route: '/favorite-genres/random-artist',
		handler: FavoriteGenres.randomArtist
	},

	{ route: '/settings/ask-language', handler: Settings.askLanguage },
	{ route: '/settings/set-language/:language', handler: Settings.setLanguage }
].map(route => ({ ...route, regex: pathToRegexp(route.route) }));

const router = async function(payload, context) {

	for (let i = 0; i < routes.length; i++) {
		if (routes[i].regex.test(payload)) {
			[, param] = payload.match(routes[i].regex);
			return routes[i].handler(context, router, param);
		}
	}

	console.log('Unhandled route:', payload);
};

module.exports = router;