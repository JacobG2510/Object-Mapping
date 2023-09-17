const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Games',
  },
  {
    tag_name: 'Books',
  },
  {
    tag_name: 'Studying',
  },
  {
    tag_name: 'Homework',
  },
  {
    tag_name: 'Towel',
  },
  {
    tag_name: 'Dog',
  },
  {
    tag_name: 'History',
  },
  {
    tag_name: 'School',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Games',
  },
  {
    tag_name: 'Books',
  },
  {
    tag_name: 'Studying',
  },
  {
    tag_name: 'Homework',
  },
  {
    tag_name: 'Towel',
  },
  {
    tag_name: 'Dog',
  },
  {
    tag_name: 'History',
  },
  {
    tag_name: 'School',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;