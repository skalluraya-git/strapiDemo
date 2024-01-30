'use strict';

/**
 * A set of functions called "actions" for `topicFilter`
 */

module.exports = {
  filter: async (ctx, next) => {
    try {
      console.log(ctx.request.body)
      let items = {};
      let {showAuthors, showPosts, showPostDescriptions} = ctx.body;
      items.showAuthors = showAuthors;
      const result = await strapi.service('api::topic.topic').filter(items)
      ctx.body = result;
    } catch (err) {
      ctx.body = err;
    }
  }
};
