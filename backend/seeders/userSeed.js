import dotenv from 'dotenv'
import colors from 'colors'
import faker from 'faker'
import User from '../models/userModel.js'

import connectDB from '../config/db.js'

dotenv.config()

const seeder = (qty, admin) => {
  let createdSeed = [];
  let counter = 0
  while (counter < qty)
  {
    const user = {
        name: faker.name.firstName(),
        email: faker.internet.email().toLowerCase(),
        password: 123456,
        isAdmin: admin
    }
    createdSeed.push(user)
    counter += 1
  }
  return createdSeed;
}

export const createUsers = async (qty, isAdmin) => {
  connectDB()
  try {
    const createdUser = await User.insertMany(seeder(qty, isAdmin))
    console.log(`created: ${createdUser}`.green.inverse)
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export const deleteUsers = async () => {
  connectDB()
  try {
    await User.deleteMany()
    console.log('Users has been deleted'.green.inverse)
  } catch (error) {
    console.log(`${error}`.red.bold)
  }
}
