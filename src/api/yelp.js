import axios from 'axios';

const API_KEY = process.env.REACT_APP_YELP_API_KEY

export default axios.create({
 baseURL: 'https://api.yelp.com/v3/businesses', //endpoint without final /
 headers: {
     Authorization : `Bearer 64xl__H_kbeNkKBUTAFl9EkLdZuWN9lMfGojbAiScOJAbnLncyYVIhMCwi0bRxm1AHtygzRJlU95g5GK1cjmXXh-BWKnCQBCUEhN-gF9fXWmjGfsSSITuRPIYAh3X3Yx`
 } //Bearer to be kept Capital followed by KEY
});