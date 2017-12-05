import { Request as BaseRequest } from '../lib'

export default class Request extends BaseRequest {
  constructor(incoming) {
    const slots = {}
    const session = {}
    super(slots, session)
  }
}
