const orderJuice = () =>{
    return new Promise((resolve,reject) => {
        const juiceAvailable = true;

        setTimeout(() => {
            if (juiceAvailable) {
                resolve ("Here is your Mango  Juice 🥭");
            } else {
                reject ("Sorry we are out of Mangoe Juice ❌")
            }
        },2000)
    });
};

console.log("I want mango juice 🥭");

orderJuice() 
    .then((message)=>{
        console.log("Juice Shop: ",message);
    })
    .catch((error)=>{
        console.log("Juice Shop: ",error)
    });