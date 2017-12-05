import { Request as BaseRequest } from '../lib'

export default class Request extends BaseRequest {
  initialize(incoming) {
    const slots = {}
    const session = {}
    super(slots, session)
  }
}
