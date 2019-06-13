//Each worker must download this file

self.onmessage = function (msg) {

  var myarray = msg.data.array;
  for (index = 0; index < myarray.length; index++) {
      MyFunction(myarray[index]);
      self.postMessage("Trying token: " + myarray[index])
  }

function MyFunction(x) {
    //Code Here
}
