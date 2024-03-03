function mincost(arr)
{ 
//write your code here
// return the min cost
	let pq = [];
   
        // Adding items to the pQueue
        for (let i = 0; i < arr.length; i++) {
            pq.push(arr[i]);
        }    
           
        pq.sort();
         
        // Initialize result
        let res = 0;
   
        // While size of priority queue
        // is more than 1
        while (pq.length > 1) {
            // Extract shortest two ropes from pq
            let first = pq.shift();
            let second = pq.shift();
   
            // Connect the ropes: update result
            // and insert the new rope to pq
            res += first + second;
            pq.push(first + second);
            pq.sort();
        }
   
        return res;
	
  
}
let arr1 = [1, 2, 3, 4, 5]
// alert(mincost(arr1))

module.exports=mincost;
