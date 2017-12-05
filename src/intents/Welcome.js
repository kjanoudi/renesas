import get from 'lodash.get'
import { Response } from '../lib'

export default async (request) => {
  return new Response("Welcome to Renesas Cloud Toolbox. You can ask me things like: What is the temperature on the Google board? What lights are on for the Amazon Board? What's the humidity percentage on the Azure board?", "What would you like to do?")
}
