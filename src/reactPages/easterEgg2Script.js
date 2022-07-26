function easterEgg2() {
    let index = 0;
    var arrOfKeys = [];
    document.addEventListener(
      "keyup",
      (event) => {
        if(event.key != 'undefined'){
          arrOfKeys[index] = event.key  
        }
        if(index > 3){
          index = 0;
        }
        if(arrOfKeys.join('') === 'clock'){
          alert('Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?')
          arrOfKeys = [];
          return null;
        }
        else if (index > 3){
          arrOfKeys = [];
          index = 0;
        }
        else{
          index++;
        }
      },
      false
    );
}