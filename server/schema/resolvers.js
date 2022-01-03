const { UserList } = require("../FakeData");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = UserList.find((user) => user.id === Number(id));
      return user;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const id = UserList.length + 1;
      const userInfo = args.input;
      const newUser = { id, ...userInfo };
      UserList.push(newUser);
      return newUser;
    },
    updateUser: (parent, args) => {
      const { id, name, age } = args.input;
      // const updateUsers = UserList.map((user) => {
      //   if (user.id === id) {
      //     user.name = name;
      //     user.age = age;
      //   }
      //   return user;
      // });
      // console.log(updateUsers);
      // return updateUsers;
      let updateUser;
      UserList.forEach(function (user) {
        if (user.id === Number(id)) {
          user.name = name;
          user.age = age;
          console.log(user);
          updateUser = user;
        }
      });
      console.log(updateUser);
      return updateUser;
    },
  },
};

module.exports = resolvers;
