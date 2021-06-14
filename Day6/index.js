

function is_array(p1) {
    
     return Array.isArray(p1);   
  }

function array_Clone(p1) {
    
     p1Copy = p1.splice(0, p1.length);
     return p1Copy;   
  }

function first(p1, p2) {
    if(p2 > 0)
     {
         var p1C = p1.splice(0, p2);

        return p1C;   
     }
     else{
         return []
     }
  }

  
function first(p1) {
    
    return p1[0];   
 }

function concat(p1) {
     
     return p1.toString();   
  }

function most(arr1){
    var mf = 1; 
    var m = 0;  
    var item;  
    for (var i=0; i<arr1.length; i++)    
    {
            for (var j=i; j<arr1.length; j++)   
            {
                    if (arr1[i] == arr1[j])    
                    m++;   
                    if (mf<m)   
                    {
                    mf=m;      
                    item = arr1[i];   
                    }
            }
            m=0;   
    }
}
 

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

