import {promises as fs} from 'fs';

export default async function Visits() {
  const file = await fs.readFile(process.cwd() + "/public/visits.json", "utf8");    
  const data = JSON.parse(file)

  return (
    <span>total:</span>
  );
}
