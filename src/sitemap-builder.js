require('babel-register');

const router = require('./router').default;
const Sitemap = require('../').default;

(   
    new Sitemap(router)
    .build('https://dev.microtechnologies.com')
    .save('./sitemap.xml')

);