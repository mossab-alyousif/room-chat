const users = [];

//addUser,removeUser,getUser,getUsersInRoom

const addUser = ({ id, username, room }) => {
  //clean data9
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "userName and room are required"
    };
  }

  //to check if user exist in room
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });
  if (existingUser) {
    return {
      error: "username is in use"
    };
  }
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => {
  const user = users.find(user => {
    return user.id === id;
  });
  if (!user) {
    return { error: "user not found" };
  }
  return user;
};

const getUsersInRoom = room => {
  room = room.trim().toLowerCase();
  const roomUsers = [];
  users.forEach(user => {
    if (user.room === room) roomUsers.push(user);
  });

  return roomUsers;
};
module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};
