'use strict';

/**
 * topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::topic.topic', ({ strapi }) => ({
    async filter(filters) {
        try {
            let queryObj = {};
            queryObj.fields = ['id', 'Title', 'Description']
            if (Boolean(filters.showPosts)) {
                queryObj.populate = {
                    Posts : {
                        fields: ['Title']
                    }
                };
            }
            if (Boolean(filters.showPostDescriptions)) {
                queryObj.populate = {
                    Posts : {
                        fields: ['Title', 'Description']
                    }
                };
            }
            if (Boolean(filters.showAuthors)) {
                let filterFields = ['id'];
                if (Boolean(filters.showPosts)) {
                    filterFields.push('Title');
                }
                if (Boolean(filters.showPostDescriptions)) {
                    filterFields.push('Description');
                }
                queryObj.populate = {
                    Posts : {
                        fields: filterFields,
                        populate: {
                            Author: {
                                fields: ['username']
                            }
                        }
                    }
                };
            }
            const topics = await strapi.entityService.findMany("api::topic.topic", queryObj)
            return topics;
        }
        catch (err) {
            console.log(err);
        }
    }
}));
