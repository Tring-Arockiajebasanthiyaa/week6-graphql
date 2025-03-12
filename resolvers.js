const { User } = require("./models");

const resolvers = {
  Query: {
    async getUsers() {
      return await User.findAll();
    },
    async getUser(_, { id }) {
      return await User.findByPk(id);
    }
  },

  Mutation: {
    async createUser(_, { name, email, age }) {
      return await User.create({ name, email, age });
    },

    async updateUser(_, { id, name, email, age }) {
      const user = await User.findByPk(id);
      if (!user) throw new Error("User not found");

      await user.update({ name, email, age });
      return user;
    },

    async deleteUser(_, { id }) {
      const user = await User.findByPk(id);
      if (!user) throw new Error("User not found");

      await user.destroy();
      return "User deleted successfully";
    }
  }
};

module.exports = resolvers;
