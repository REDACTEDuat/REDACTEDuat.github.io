class Rocket {
    constructor(
        velocity,
        thrust,
        fuelLevel
    ){
        this.velocity = velocity;
        this.thrust = thrust;
        this.fuelLevel = fuelLevel;
    }
    //list methods
    ignition(){
        alert("Ignition");
        return true;
    }
    decouple(){
        alert("Stage has decoupled");
        return true;
    }
    orbitBurn(velocity, thrust){
        alert("Starting orbit burn");
        return true;
    }
}

class Mission {
    //Properties
    constructor(
        fuelLevel,
        oxyLevel,
        foodLevel,
        spaceCraftName,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts
    ){  //substantiate
        this.fuelLevel = fuelLevel;
        this.oxyLevel = oxyLevel;
        this.foodLevel = foodLevel;
        this.spaceCraftName = spaceCraftName;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.lauchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }

    launch(){
        alert("We are taking off")
    }

    disMissionLaunchDate(){
        alert("This mission launches on " + this.launchDateMonth 
        + " " + this.launchDateDay + ", " + this.lauchDateYear 
        + " with " + this.numOfAstronauts + " astronauts aboard.")
    }
}

function launchFall(){
    console.log("lauchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.disMissionLaunchDate();
}

function launchSpring(){
    console.log("lauchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.disMissionLaunchDate();
}