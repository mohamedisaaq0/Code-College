const { Language } = require('../models');

const languageData = [
  {
    name: 'HTML',
    description:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    img: 'html.webp',
  },
  {
    name: 'Javascript',
    description:
      'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web',
    img: 'js.png',
  },
  {
    name: 'Express.js',
    description:
      'Express.js, or simply Express, is a back end web application framework for Node.js',
    img: 'express.png',
  },
  {
    name: 'SQL',
    description:
      'Structured Query Language (SQL) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them',
    img: 'sql.webp',
  },
  {
    name: 'CSS',
    description:
      'CSS or Cascading Style Sheets is the  language we use to style an HTML document',
    img: 'css.png',
  },
];

const seedlanguage = () => Language.bulkCreate(languageData);

module.exports = seedlanguage;
