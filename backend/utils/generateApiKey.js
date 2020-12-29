import colors from 'colors'
import { nanoid } from 'nanoid'
import connectDB from '../config/db.js'
import ApiKey from '../models/apikeyModel.js'
import dotenv from 'dotenv'

dotenv.config()


export const generateApiCode = async (qty = 1) => {
  connectDB()
  let apicodeArray = []
  try {
    for (let i = 1; i <= qty; i++) {
      const apicode = await ApiKey.create({
        value: nanoid()
      })
      apicodeArray.push(apicode.value)
    }
    const msg = `Se ${qty > 1 ? 'han' : 'ha'} creado ${qty} apicode${qty > 1 ? 's' : ''}`
    console.log(msg.green.inverse)
  } catch (error) {
    console.error(error)
    return null
  }
  return apicodeArray
}

const generateRegisterLink = async (qty) => {
  let apicodes = await generateApiCode(qty)
  apicodes.forEach((apicode)=> {
    console.log(`https://inventario.refrigeracionmc.com/register/${apicode}`)
  })
  process.exit()
}

const args = process.argv.slice(2);

switch (args[0]) {
case 'registeradmin':
    generateRegisterLink(args[1] ? args[1] : 1)
    break;
default:
    console.log('Sorry, that is not something I know how to do.');
}