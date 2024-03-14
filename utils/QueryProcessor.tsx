export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query === "What is your Andrew ID?"){
    return "jdcheng";
  }

  if (query.startsWith("Which of the following numbers is the largest:")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    let res = Math.max(parseInt(temp[0]), parseInt(temp[1]), parseInt(temp[2]));
    return res.toString();
  }

  if (query.startsWith("What is ") && query.includes("plus")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    let res = 0;
    for (let i = 0; i < temp.length; i++){
      res += parseInt(temp[i]);
    }
    return res.toString();
  }

  if (query.startsWith("What is ") && query.includes("multiplied")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    let res = parseInt(temp[0]) * parseInt(temp[1]);
    return res.toString();
  }

  if (query.startsWith("What is ") && query.includes("multiplied")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    let res = parseInt(temp[0]) - parseInt(temp[1]);
    return res.toString();
  }

  if (query.startsWith("Which of the following numbers is both a square and a cube: ")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    for (let i = 0; i < temp.length; i++){
      let x = parseInt(temp[i]);
      if (Math.sqrt(x) % 1 == 0 && Math.cbrt(x) % 1 == 0) return temp[i];
    }
    return "";
  }

  if (query.includes("primes")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    
    let res = "";
    for (let i = 0; i < temp.length; i++){
      let x = parseInt(temp[i]);
      let prime = true;
      for (let j = 2; j*j <= x; j++){
        if (x % j == 0) prime = false;
      }
      if (prime) res += ", " + temp[i];
    }
  }

  if (query.includes("power")){
    let temp = query.match(/\d+/g);
    if (temp === null) return "";
    let res = Math.pow(parseInt(temp[0]), parseInt(temp[1]));
    return res.toString();
  }

  return "";
}
