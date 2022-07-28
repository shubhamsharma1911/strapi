'use strict';

/**
 * content-file service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-file.content-file');
