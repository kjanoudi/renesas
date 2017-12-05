import { Request as BaseRequest } from '../lib'
import get from 'lodash.get'

export default class Request extends BaseRequest {
  initialize(alexa) {
    const slots = get(alexa, 'event.request.intent.slots')
    super(slots)
  }
}
