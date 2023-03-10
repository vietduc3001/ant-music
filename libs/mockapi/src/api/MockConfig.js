import axios from '@ant-music/services/axios';

const MockAdapter = require('axios-mock-adapter');

export default new MockAdapter(axios, { delayResponse: 200 });
