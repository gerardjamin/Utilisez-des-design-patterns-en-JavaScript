// Le Context
class TrafficLight {
    constructor() {
      this._states = [
        new GreenLight(),
        new YellowLight(),
        new RedLight()
      ]
      this._currentLight = this._states[0]
    }
    
    //faire un changement d'état
    handleTraffic() {
      const totalStates = this._states.length
      const currentIndex = this._states.findIndex(light => light === this._currentLight)
      
      if (currentIndex + 1 < totalStates) {
        this._currentLight = this._states[currentIndex + 1]
      } else {
        this._currentLight = this._states[0]
      }
    }
    
    sign() {
      return this._currentLight.sign()
    }
  }
  
  // Les States
  class RedLight {
    constructor() {
      this._light = 'red'
    }
    
    sign() {
      return "S'arreter"
    }
  }
  
  class YellowLight {
    constructor() {
      this._light = 'yellow'
    }
    
    sign() {
      return 'Ralentir'
    }
  }
  
  class GreenLight {
    constructor() {
      this._light = 'green'
    }
    
    sign() {
      return 'Démarrer'
    }
  }
  
  
  const Context = new TrafficLight()
  
  console.log(Context.sign())
  Context.handleTraffic()
  
//   console.log(Context.sign())
//   Context.handleTraffic()
  
  console.log(Context.sign())
  Context.handleTraffic()
  
   console.log(Context.sign())
  Context.handleTraffic()

  console.log(Context.sign())