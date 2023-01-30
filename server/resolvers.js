import { Job, Company } from './db.js';

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
    job: (_root, { id }) => Job.findById(id),
    company: (id) => Company.findById(id),
  },
  Job: {
    company: (job) => Company.findById(job.companyId),
  },
  // Company: {},
};
