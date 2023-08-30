import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    photourl: {
      type: String,
      default: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png'
    }
  }
)

const User = model('User', userSchema)
export default User
