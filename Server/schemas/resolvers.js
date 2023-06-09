const { Charity, User } = require('../models');

const resolvers = {
  Query: {
    charity: async () => {
      return Charity.find({});
    },
    user: async () => {
      return User.find({})
    }
    
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
    addUser: async () => {
      const user = await User.create();
      return user;
    },
    
  },
};

module.exports = resolvers;
