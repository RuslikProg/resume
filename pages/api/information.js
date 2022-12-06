import {cvInformation} from './data/inform';

export default function handler(req, res) {
  res.status(200).json(cvInformation)
}
