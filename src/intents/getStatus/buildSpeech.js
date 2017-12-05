import get from 'lodash.get'
import { LIGHTS } from '../../lib/constants'

const commaAnd = (a) => [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(a.length < 2 ? '' : ' and ')

export default (request, status) => {
  const { slots } = request
  if (slots.temperature) {
    return `The temperature is ${status.temperature} degrees fahrenheit.`
  }
  if (slots.pressure) {
    return `The pressure is ${status.pressure} millibars.`
  }
  if (slots.humidity) {
    return `The humidity is ${status.humidity} percent.`
  }
  if (slots.lightStatus) {
    const lightsOn = LIGHTS.filter(light => status[light] === 'on')
    const lightsOff = LIGHTS.filter(light => status[light] === 'off')
    let speech = ''
    if (lightsOn.length) {
      speech += `The ${commaAnd(lightsOn)} lights are on.`
    }
    if (lightsOff.length) {
      speech += `The ${commaAnd(lightsOn)} lights are off.`
    }
    return speech
  }
}
