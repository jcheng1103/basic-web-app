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
    let res = Math.max(parseInt(temp[0]), parseInt(temp[1]), parseInt(temp[2]));
    return res.toString();
  }

  if (query.startsWith("What is ")){
    let temp = query.match(/\d+/g);
    let res = parseInt(temp[0]) + parseInt(temp[1]);
    return res.toString();
  }

  return "";
}
