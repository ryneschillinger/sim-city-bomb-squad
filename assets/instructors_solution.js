document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  var time = 30; //display, in seconds
  var interval;
  var colorOrder = ["blue", "green", "red", "white", "yellow"];
  var wiresToCut = [];

  //Generate randomly which wires need cutting
  for(var i = 0; i < 5; i++){
    wiresToCut.push({ color: colorOrder[i], cut: Math.random() > .5});
  }
  console.log("Wires created:", wiresToCut[0], wiresToCut[1], wiresToCut[2], wiresToCut[3], wiresToCut[4]);

  //Start a timer that counts down


  //Add an event listener to each wire
  var box = document.getElementById("box");
  console.log(box);
  for(var i = 0; i < box.children.length; i++){
    box.children[i].addEventListener("click", clickWire);
  }

  //Create a function to check whether the wires still need to be cut
  function doneCuttingWires(){
    for(var i = 0; i < wiresToCut.length; i++){
      if(wiresToCut[i].cut == true){
        return false;
      }
    }

    return true;
  }

  function wireIsGood(color){
    for(var i = 0; i < wiresToCut.length; i++){
      if(color == wiresToCut[i].color){
        if(wiresToCut[i].cut == true){
          wiresToCut[i].cut = false;
          return true;
        }
        return false;
      }
    }
    return false;
  }

  function clickWire(){
      console.log("WIRE CLICKED");
      console.log(this.id);
      //Change the src of the img to the cut version of the wire
      this.src = "img/cut-" + this.id + "-wire.png";

      //If good choice - change the corresponding boolean value to false
      //else if we screwed up - clear the interval, go boom
      if(wireIsGood(this.id)){
        console.log("GOOD!");
        this.removeEventListener("click", clickWire);
      }
      else {
        console.log("uhoh");
      }
  }

});
