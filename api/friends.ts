import { NowRequest, NowResponse } from '@now/node'
import {friends} from './data';

export default function(req: NowRequest, res: NowResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(friends)
}