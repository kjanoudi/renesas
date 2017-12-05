import get from 'lodash.get'
import buildSpeech from './buildSpeech'
import { Api, Response } from '../../lib'

export default (request) => {
  const api = new Api()
  api.login()
  const status = api.getStatus(123)
  const speech = buildSpeech(request, status.properties)
  return new Response(speech)
}
