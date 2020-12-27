import colors from 'colors'

import {createUsers, deleteUsers } from './seeders/userSeed.js'
import {createSeederFile} from './scarlet/seederUtils/createSeederFile.js'

const args = process.argv.slice(2);
/*
switch (args[0])
{
  case 'users':
    createUsers(args[1] ? args[1] : 1, false)
    break;
  case 'admin':
    createUsers(args[1] ? args[1] : 1, true)
    break;
  case 'delete':
    deleteUsers()
    break;
  default:
    console.log('Sorry, that is not something I know how to do.');
}
*/

const create = (args) => {
  if (args[0])
  {
    createSeederFile(args[0])
  }
  else
  {
    console.error('Error, faltan argumentos después del create'.red.bold)
  }
}

switch (args[0])
{
  case 'create':
    create(args.slice(1))
    break;
  case 'delete':
    delete(args.slice(1))
    break;
  case 'fresh':
    fresh()
    break;
  default:
    console.log('Sorry, that is not something I know how to do.'.red.bold);
}
