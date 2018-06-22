const {
	SEND_REPLY,
	SET_CONTEXT,
	SEND_QUICK_REPLY,
	SEND_BUTTONS,
	SEND_LOGIN_BUTTON,
	GET_FACEBOOK_DATA,
	GET_SPOTIFY_ARTISTS,
	SEND_WEBVIEW_BUTTON,
	SEND_LOCATION,
	ADD_POI,
	GET_POIS,
} = require('./actionTypes');

const sendReply = (message, psid) => ({
	type: SEND_REPLY,
	payload: { message, psid },
});

const sendQuickReply = (message, quickReplies, psid) => ({
	type: SEND_QUICK_REPLY,
	payload: { message, quickReplies, psid },
});

const sendButtons = (message, buttons, psid) => ({
	type: SEND_BUTTONS,
	payload: { message, buttons, psid },
});

const sendLoginButton = (message, url, psid) => ({
	type: SEND_LOGIN_BUTTON,
	payload: { message, url, psid },
});

const sendWebViewButton = (message, buttonTitle, url, psid) => ({
	type: SEND_WEBVIEW_BUTTON,
	payload: { message, buttonTitle, url, psid },
});

const setContext = (psid, context) => ({
	type: SET_CONTEXT,
	payload: { psid, context },
});

const sendLocation = (message, psid) => ({
	type: SEND_LOCATION,
	payload: { message, psid },
});

const getFacebookData = psid => ({ type: GET_FACEBOOK_DATA, payload: psid });

const getSpotifyArtists = accessToken => ({
	type: GET_SPOTIFY_ARTISTS,
	payload: accessToken,
});

const addPoi = (festivalId, category, lat, lng) => ({
	type: ADD_POI,
	payload: { festivalId, category, lat, lng },
});

const getPois = (festivalId, category, lat, lng) => ({
	type: GET_POIS,
	payload: { festivalId, category, lat, lng },
});

module.exports = {
	sendReply,
	setContext,
	sendQuickReply,
	sendButtons,
	sendLoginButton,
	sendLocation,
	sendWebViewButton,
	getFacebookData,
	getSpotifyArtists,
	addPoi,
	getPois,
};
