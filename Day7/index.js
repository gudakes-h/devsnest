function getprop(myObject)
{
    var keys = Object.keys(myObject);
    console.log(keys);
}

function compare_to_sort(x,y) 
{
    if (x.libraryID < y.libraryID)
      return -1;
    if (x.libraryID > y.libraryID)
      return 1;
    return 0;
}

function delprop(myObject)
{
    console.log(myObject);
    delete myObject.rollno;
    console.log(myObject);
}

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  

function display(library)
{
    for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Have Read " + book);
    } else
    {
     console.log("Need To Read " + book);
    }
   }
}

function getlen(obj)
{
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    console.log(size);
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
getprop(student);

var stu = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
delprop(stu);

getlen(student);

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
display(library)


var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(4));

var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

console.log(library.sort(compare_to_sort));


