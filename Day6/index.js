
function is_array(p1) {
    
     return Array.isArray(p1);   
  }

function array_Clone(p1) {
    
     p1Copy = p1.splice(0, p1.length);
     console.log(p1Copy);   
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

  
function first1(p1) {
    
    return p1[0];   
 }

function concat(p1) {
     
     console.log(p1.toString());
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
    console.log(item);
}
 

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
array_Clone([1, 2, 4, 0]);
array_Clone([1, 2, [4, 0]]);
console.log(first1([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


myColor = ["Red", "Green", "White", "Black"];
concat(myColor)

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
most(arr1)

