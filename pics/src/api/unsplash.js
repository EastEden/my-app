import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID 7BJ2T3hzviUiN3Tdx9e4ksuKHMJWuzaP1x55f8bXdfk',
    }
});