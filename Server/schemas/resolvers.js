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
    addCharity: async (parent, args) => {
      const charity = await Charity.create(args);
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    
  },
};

module.exports = resolvers;
