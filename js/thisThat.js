//ici a l'intérieur de la fonction setTimeOut on change de context  vis a vis de l'exterieur
const objThis = {
    name: "John",
    sayHello: function() {
        that = this
      setTimeout(function() {
        console.log("Hello, " + that.name); // this.name sera indéfini ici
      }, 1000);
    }
  };

  //ici a l'intérieur de la fonction fléchée setTimeOut on concerve le context de l'exterieur
  const objThat = {
    name: "John",
    sayHello: function() {
        // that = this
      setTimeout(() => {
        console.log("Hello, " + this.name); // this.name sera indéfini ici
      }, 1000);
    }
  };  
  
  
  objThis.sayHello();
  objThat.sayHello();

  function sayHello() {
    console.log(this)
  }

  sayHello()

