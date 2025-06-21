const countries = ["Polland", "Japan", "United States", "United Kingdom", "France", "India", "Peru", "Africa", "Brazil", "China", "Germany"];


const grouped = countries.reduce((acc,country)=>{
    const len = country.length;
    if (!acc[len]){
        acc[len]=[];
    }
    acc[len].push(country);
    return acc;
},{});
const result = Object.values(grouped);

console.log(result);
// To run this code, you need to have Node.js installed on your machine.
// Save this code in a file named `countriesreduce.js` in the `src` directory of your project.
// chnage the  directory to src and run the command
// node countriesreduce.js