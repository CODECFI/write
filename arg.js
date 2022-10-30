const fspromises = require('fs').promises;
const path  = require ('path');

const files = async () => {
try{
const data = await fspromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
console.log(data);
await fspromises.writeFile(path.join(__dirname, 'starter.txt'), data + 1);


}catch(err){
console.error(err);
}
}

files()


