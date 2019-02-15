function cook() {
    console.log(this.ingredients);
  }

  cook(); // => undefined


  function cook() {
    console.log(this.ingredients);
  }
  
  let dinner = {
    ingredients: 'bacon'
  }
  
  let cookBoundToDinner = cook.bind(dinner);
  cookBoundToDinner(); // => "bacon"