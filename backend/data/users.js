import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Azim Rizan',
    email: 'azimrizan9@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hasif',
    email: 'hasif@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;