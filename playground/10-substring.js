

function longestUniqueSubsttr(str)
{
	var n = str.length;
	
	// Result
	var res = 0;
	
	for(var i = 0; i < n; i++)
	{
		
		// Note : Default values in visited are false
		var visited = new Array(256);
		
		for(var j = i; j < n; j++)
		{
			
			// If current character is visited
			// Break the loop
            
			if (visited[str.charCodeAt(j)] == true)
				break;

			// Else update the result if
			// this window is larger, and mark
			// current character as visited.
			else
			{
				var m = j-i+1
				res = Math.max(res, m);
                console.log('res '+res+'\n')
				console.log('j= '+j+' i= '+i +' m= '+m+'\n')
				visited[str.charCodeAt(j)] = true;
			}
		}
	}
	return res;
}

// Driver code
	var str = "geeksforgeeks";
	document.write("The input string is " + str);

	var len = longestUniqueSubsttr(str);
	document.write("The length of the longest " +
					"non-repeating character " +
					"substring is " + len);

