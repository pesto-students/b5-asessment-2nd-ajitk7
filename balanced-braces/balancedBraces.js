
function balancedBraces(...args) {
  let stack = [];
  let current;
  const matchLookup = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
      };
   args.forEach(expression =>{               
      for (let i = 0; i < expression.length; i++) {
        current = expression[i]; //easier than writing it over and over
      

        if (current === '(' || current === '[' || current === "{") {
          stack.push(current);
          
        } else if (current === ')' || current === ']' || current === "}") {
          const lastBracket = stack.pop();
          
          if (matchLookup[lastBracket] !== current) { 
            return false;
          }
        }
      }
    });
  return stack.length === 0; 

}

 export {
   balancedBraces
 }