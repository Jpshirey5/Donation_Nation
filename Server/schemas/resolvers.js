const { Charity} = require('../models');

const resolvers = {
  Query: {
    charity: async () => {
      return Charity.find({});
    },
    
  },
  Mutation: {
    addCharity: async () => {
      const charity = await Charity.create();
      return charity;
    },
    updateCharity: async () => {
      const update = await Charity.findOneAndUpdate(
        { _id },
        { charityName},
        { description },
        {new: true}
      );
      return update;
    },
  },
};

module.exports = resolvers;
