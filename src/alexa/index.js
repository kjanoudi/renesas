import Alexa from 'alexa-sdk'
import Request from './Request'
import * as intents from '../intents'

export default (event, context, callback) => {
  var alexa = Alexa.handler(event, context, callback);
  const handlers = {
    getStatus: () => {
      const request = new Request(this)
      const response = intents.getStatus(request)
      this.emit(':tell', response.speech)
    }
  }
  alexa.registerHandlers(handlers);
  alexa.execute();
}
