import Alexa from 'alexa-sdk'
import Request from './Request'
import * as intents from '../intents'

export default (event, context, callback) => {
  // TODO: change this to event when switching to lambda
  var alexa = Alexa.handler(JSON.parse(event.body), context, callback);
  const handlerNames = ['GetStatus', 'SetStatus', 'LightStatus']
  const handlers = {}
  handlerNames.forEach(handler => handlers[handler] = function() {
    const request = new Request(this)
    const response = intents[handler](request)
    this.emit(':tell', response.speech)
  })
  alexa.registerHandlers(handlers);
  alexa.execute();
}
