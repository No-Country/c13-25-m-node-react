import { Request } from 'express'
import { Strategy } from 'passport-jwt'
import User from './../models/User'

const cookieExtractor = (req: Request): string | null => {
  let cookie = null
  if (req && req.cookies) {
    cookie = req.cookies.Authorization
  }
  return cookie
}

const opts = {
  jwtFromRequest: cookieExtractor,
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
