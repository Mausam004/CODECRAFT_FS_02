import bcrypt from "bcrypt";

const passwordsToHash = ["Mausam@004", "Mmp@004"];
const saltRounds = 10;

passwordsToHash.forEach(password => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        console.log(`Plain Password: ${password} => Hashed: ${hash}`);
    });
});