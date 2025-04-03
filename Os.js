import os from "os"

const user=os.userInfo();

console.log(user);

const userResponse={            //os built-in function(type,release,totalmem,freemem)
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(userResponse);



