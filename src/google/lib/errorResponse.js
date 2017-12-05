import uuid from 'uuid'

export default ({ correlationToken, errorType, errorMessage }) => ({
  "event": {
    "header": {
      "namespace": "Alexa",
      "name": "ErrorResponse",
      "messageId": uuid.v4(),
      correlationToken,
      "payloadVersion": "3"
    },
    "endpoint": {
      "endpointId": "appliance-001"
    },
    "payload": {
      "type": errorType,
      "message": errorMessage
    }
  }
})
