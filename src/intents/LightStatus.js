import get from 'lodash.get'
import { Api, Response } from '../../lib'

const commaAnd = (a) => [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ')

export default (request) => {
  const api = new Api()
  api.login()
  const status = api.getStatus(123)
  const lightsOn = LIGHTS.filter(light => status[light] === 'on')
  const lightsOff = LIGHTS.filter(light => status[light] === 'off')
  let speech = ''
  if (lightsOn.length) {
    speech += `The ${commaAnd(lightsOn)} lights are on.`
  }
  if (lightsOff.length) {
    speech += `The ${commaAnd(lightsOn)} lights are off.`
  }
  return new Response(speech)
}
