import { Connector } from '../Connectors/Axios';

class RoomServices {
	getRoom = id => {
		return Connector({
			url: `/rooms/get-room/:${id}`,
			method: 'GET',
		});
	};
}

export default new RoomServices();
