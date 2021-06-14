
function getprop(myObject)
{
    var keys = Object.keys(myObject);
    console.log(keys);
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
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
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

var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(4));

