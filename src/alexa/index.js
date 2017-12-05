import Alexa from 'alexa-sdk'
import Request from './Request'
import * as intents from '../intents'

export default (event, context, callback) => {
  // TODO: change this to event when switching to lambda
  const alexa = Alexa.handler(event, context, callback);
  const handlerNames = ['GetStatus', 'SetStatus', 'LightStatus']
  const handlers = {}
  handlerNames.forEach(handler => handlers[handler] = async function() {
    const request = new Request(this)
    if (this.event.request.dialogState !== 'COMPLETED') {
      this.emit(':delegate');
    } else {
      const response = await intents[handler](request)
      const speech = this.response.speak(response.speech)
      if (response.reprompt) {
        speech.listen(response.reprompt)
      }
      this.emit(':responseReady')
    }
  })
  alexa.registerHandlers(handlers);
  alexa.execute();
}
