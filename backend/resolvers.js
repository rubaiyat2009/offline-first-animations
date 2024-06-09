const Animation = require('./models/Animation'); // Assuming you have a Mongoose model

const resolvers = {
  Query: {
    animations: async () => await Animation.find(),
  },
  Mutation: {
    uploadAnimation: async (_, { title, url, metadata }) => {
      const newAnimation = new Animation({ title, url, metadata });
      await newAnimation.save();
      return newAnimation;
    },
  },
};

module.exports = resolvers;