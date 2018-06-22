const { getUUID, createDoc } = require('./utils');

const addPoi = async function(
	festivalId = null,
	category = '',
	lat = 0,
	lng = 0
) {
	const uuid = await getUUID();
	await createDoc('pois', uuid, {
		festivalId,
		category,
		coordinates: {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		},
	});
};

const getPois = async function(festivalId = null, category = '') {
	const { docs } = await find('pois', {
		festivalId,
		category,
	});

	return docs;
};

module.exports = { addPoi, getPois };
