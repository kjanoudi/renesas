import get from 'lodash.get'
import { Api, Response } from '../lib'

export default async (request) => {
  const api = new Api()
  api.login()
  const status = await api.getStatus(123)
  console.log('status: ', status)
  const { properties } = status
  const { slots } = request
  const property = get(slots, 'Property')
  if (property === 'temperature') {
    return `The temperature is ${properties.temperature} degrees fahrenheit on ${slots.Board}.`
  }
  if (property === 'pressure') {
    return `The pressure is ${properties.pressure} millibars on ${slots.Board}.`
  }
  if (property === 'humidity') {
    return `The humidity is ${properties.humidity} percent on ${slots.Board}.`
  }
  return new Response(speech)
}
