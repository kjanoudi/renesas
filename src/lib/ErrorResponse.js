import { default as Response } from './Response'

export default class ErrorResponse extends Response {
  initialize(error) {
    super(error.message)
  }
}
