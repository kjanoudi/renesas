import get from 'lodash.get'
import { Api, Response } from '../lib'

export default async (request) => {
  const api = new Api()
  api.login()
  const status = await api.getStatus(123)
  const { properties } = status
  const { slots } = request
  const response = await api.putStatus(123, {
    [`${slots.Light.toLowerCase()}`]: slots.Switch
  })
  return new Response(`Okay, I turned the ${slots.Light} ${slots.Switch} on the ${slots.Board}.`)
}
