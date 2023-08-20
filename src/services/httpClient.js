import axios from "axios";
import { baseUrl } from "../constant";

const config = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_READ_ACCESS_TOKEN}`,
  },
};

const handleError = (errorStatus) => {
	if (errorStatus === 401) {
		console.log('Unauthrized');
	} else if (errorStatus === 404) {
		console.log('Not Found');
	} else if (errorStatus === 500) {
		console.log('Server Error');
	} else {
		return errorStatus;
	}
};

const get = async (url) => {
  try {
    const data = await axios.get(url, config);
    return data;
  } catch (error) {
    handleError(error.status)
    console.log(error);
  }
};

export default { get };
