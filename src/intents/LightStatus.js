import get from 'lodash.get'
import { LIGHTS } from '../lib/constants'
import { Api, Response } from '../lib'

const commaAnd = (a) => [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ')

export default async (request) => {
  const api = new Api()
  api.login()
  const status = await api.getStatus(123)
  const { properties } = status
  const { slots } = request
  console.log('Props: ', properties, slots)
  if (slots.Light) {
    const value = properties[slots.Light.toLowerCase()]
    return new Response(`The ${slots.Light} light is ${value}.`)
  }
  if (slots.Switch) {
    const lightsMatching = LIGHTS.filter(light => properties[light] === slots.Switch.toLowerCase())
    if (lightsMatching.length) {
      return new Response(`The ${commaAnd(lightsMatching)} lights on ${slots.Board} are ${slots.Switch}.`)
    }
    return new Response(`${slots.Board} has no lights ${slots.Switch}.`)
  }
}
