// function areDistinct(str, i, j)
// {
	
// 	// Note : Default values in visited are false
// 	let visited = new Array();

// 	for(let k = i; k <= j; k++)
// 	{
       
// 		if (visited[str.charAt(k)] === true) 
// 			return false;
			
// 		visited[str.charAt(k)] = true;
        
// 	}
    
// 	return true;
// }

// Returns length of the longest substring
// with all distinct characters.
function longestUniqueSubsttr(s)
{
	  // Creating a set to store the last positions
    // of occurrence
    let seen = new Map();
    let maximum_length = 0;
 
    // Starting the initial point of window to index 0
    let start = 0;
 
    for(let i = 0; i < s.length; i++)
    {
         
        // Checking if we have already seen the element or
        // not
        if (seen.has(s[i]))
        {
             
            // If we have seen the number, move the start
            // pointer to position after the last occurrence
            console.log(start, seen.get(s[i]) + 1)
            start = Math.max(start, seen.get(s[i]) + 1);
        }
             
        // Updating the last seen value of the character
        seen.set(s[i],i)
        maximum_length = Math.max(maximum_length, i - start + 1);
    }
    return maximum_length;
}

// Driver code
	let str = "abccccccc";
	console.log("The input string is " + str);

	let len = longestUniqueSubsttr(str);
	
	console.log("The length of the longest " +
					"non-repeating character " +
					"substring is " + len);
