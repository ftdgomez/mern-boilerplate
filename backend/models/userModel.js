import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import ApiKey from '../models/apikeyModel.js'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    apikey: {
      type: String,
      required: true
    }
  },
  {
    timeStamps: true
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.checkApiKey = async function (key = null) {
  if (!key)
  {
    return {apikey: null, isAdmin: false}
  }
  const apikey = await ApiKey.findOne({value: key})
  if (!apikey || apikey.isUsed)
  {
    return false
  }
  else
  {
    return {apikey, isAdmin: true}
  }
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
