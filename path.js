import path from"path";
import { fileURLToPath } from "url";      //returns the file URL

// console.log(path.sep);   \- WINDOWS  /-MACOS

const __filename = fileURLToPath(import.meta.url);   // converts it into a normal file path
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, "Content", "SubFolder", "test.txt");

console.log("Joined Path:", filePath);

console.log("Base Name:", path.basename(filePath));

console.log("Directory Name:", path.dirname(filePath));

console.log("File Extension:", path.extname(filePath));

console.log("Absolute Path:", path.resolve(__dirname));

