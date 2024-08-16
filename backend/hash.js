const bcrypt = require('bcryptjs');

const plainTextPassword = '12345678';

bcrypt.hash(plainTextPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log('Contraseña cifrada:', hash);
});