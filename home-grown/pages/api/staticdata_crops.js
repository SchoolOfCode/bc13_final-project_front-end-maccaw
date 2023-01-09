import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(red, res) {
    const jsonDirectoray = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectoray + '/crops.json', 'utf8');
    const fileContentsParsed = JSON.parse(fileContents)
  res.status(200).json(fileContentsParsed);
  

}
