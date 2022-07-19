const { Module } = require('../models');

const moduleData = [
  {
    name: 'HTML elements',
    progress: 0,
    language_id: 1,
  },
  {
    name: 'Attributes',
    progress: 0,
    language_id: 1,
  },
  {
    name: 'Event attributes',
    progress: 0,
    language_id: 1,
  },
  {
    name: 'HTML Audio/Video DOM Reference',
    progress: 0,
    language_id: 1,
  },
  {
    name: 'Browser support',
    progress: 0,
    language_id: 1,
  },
  {
    name: 'Scope',
    progress: 0,
    language_id: 2,
  },
  {
    name: 'IIFE',
    progress: 0,
    language_id: 2,
  },
  {
    name: 'Hoisiting',
    progress: 0,
    language_id: 2,
  },
  {
    name: 'Callback functions',
    progress: 0,
    language_id: 2,
  },
  {
    name: 'Conditional statements',
    progress: 0,
    language_id: 2,
  },
  {
    name: 'Constructors',
    progress: 0,
    language_id: 3,
  },
  {
    name: 'Prototypes',
    progress: 0,
    language_id: 3,
  },
  {
    name: 'Polymorphism',
    progress: 0,
    language_id: 3,
  },
  {
    name: 'Promises',
    progress: 0,
    language_id: 3,
  },
  {
    name: 'Classes',
    progress: 0,
    language_id: 3,
  },
  {
    name: 'Databases',
    progress: 0,
    language_id: 4,
  },
  {
    name: 'Seeds',
    progress: 0,
    language_id: 4,
  },
  {
    name: 'Schema',
    progress: 0,
    language_id: 4,
  },
  {
    name: 'JOIN',
    progress: 0,
    language_id: 4,
  },
  {
    name: 'Foreign-Primary Key',
    progress: 0,
    language_id: 4,
  },
  {
    name: 'Media queries',
    progress: 0,
    language_id: 5,
  },
  {
    name: 'Flexbox-layout',
    progress: 0,
    language_id: 5,
  },
  {
    name: 'Responsive design',
    progress: 0,
    language_id: 5,
  },
  {
    name: 'Typography',
    progress: 0,
    language_id: 5,
  },
  {
    name: 'Pseudo-classes',
    progress: 0,
    language_id: 5,
  },
];

const seedModules = () => Module.bulkCreate(moduleData);

module.exports = seedModules;
