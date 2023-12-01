const path = require('path');
const jobs = require('./src/data/jobs');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Job implements Node {
      id: ID!
      title: String!
      icon: String!
      location: String!
      subtitleOne: String!
      description: String!
      headingOne: String!
      bulletListOne: String!
      headingTwo: String!
      bulletListTwo: String!
      headingThree: String!
      bulletListThree: String!
      conclusion: String!
    }
  `;

  createTypes(typeDefs);
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Create job listing page
  createPage({
    path: '/careers',
    component: path.resolve('./src/pages/JobListings.js'),
  });

  // Create job description pages
  jobs.forEach((job) => {
    createPage({
      path: `/careers/${job.id}`,
      component: path.resolve('./src/components/sections/JobDescription.js'),
      context: {
        id: job.id,
        icon: job.icon,
        title: job.title,
        location: job.location,
        subtitleOne: job.subtitleOne,
        description: job.description,
        headingOne: job.headingOne,
        bulletListOne: job.bulletListOne,
        headingTwo: job.headingTwo,
        bulletListTwo: job.bulletListTwo,
        headingThree: job.headingThree,
        bulletListThree: job.bulletListThree,
        conclusion: job.conclusion
      },
    });
  });
};
