import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-burger-builder-6713f.firebaseio.com/"
});

export default instance;