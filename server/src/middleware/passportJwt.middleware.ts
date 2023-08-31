import { Strategy, ExtractJwt } from 'passport-jwt'
import User from './../models/User'

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

export const passportMiddleware = new Strategy(opts, (payload, done) => {
  try {
    const user = User.findOne({ email: payload.email })
    if (user !== null) return done(null, user)
    return done(null, false)
  } catch (error) {
    let errorMessage
    if (error instanceof Error) errorMessage = error.message
    return errorMessage
  }
})
