'use strict';

/**
 * topic router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::topic.topic', {
    config: {
        find: {
            auth: false
        },
        findOne: {
            auth: false
        }

    }
});
