const { Language } = require('../models');

const languageData = [
  {
    name: 'HTML',
    description:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    name: 'Javascript',
    description:
      'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web',
  },
  {
    name: 'Express.js',
    description:
      'Express.js, or simply Express, is a back end web application framework for Node.js',
  },
  {
    name: 'SQL',
    description:
      'Structured Query Language (SQL) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them',
  },
  {
    name: 'CSS',
    description:
      'CSS or Cascading Style Sheets is the  language we use to style an HTML document',
  },
];

const seedlanguage = () => Language.bulkCreate(languageData);

module.exports = seedlanguage;
