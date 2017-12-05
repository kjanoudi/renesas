import { errorResponse } from '.'

export default class VoiceError extends Error {
  constructor(errorType, message) {
    super(message); // (1)
    this.name = "VoiceError" // (2)
    this.errorType = errorType
  }

  response(correlationToken) {
    return errorResponse({ correlationToken, errorType: this.errorType, errorMessage: this.message})
  }
}
