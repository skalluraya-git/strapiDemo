'use strict';

/**
 * topic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::topic.topic', ({ strapi }) => ({
    async filter(ctx) {
        try {
            let filters = {};
          filters = {... ctx.request.query};
          const result = await strapi.service('api::topic.topic').filter(filters)
          ctx.body = result;
        } catch (err) {
          ctx.body = err;
        }
      }
}));
