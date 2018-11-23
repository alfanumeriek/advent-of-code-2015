let input = "><><><";

let locations = [[0,0]];    // = a collection of coordinates where a present is delivered
let xCurrent = 0;
let yCurrent = 0;

function addPresentLocation(a){
    console.log(`addPresentLocation ${a}`);
    locations.push(a);
}

function readDirection(direction){       // direciton can be <>v^
    switch (direction){
        case "<":
            console.log("left");
            xCurrent -= 1;
            addPresentLocation([xCurrent,yCurrent]);
            //console.log(currentPosition);
            break;
        case ">":
            console.log("right");
            xCurrent += 1;
            addPresentLocation([xCurrent,yCurrent]);
            //console.log(currentPosition);
            break;
        case "^":
            console.log("up");
            yCurrent += 1;
            addPresentLocation([xCurrent,yCurrent]);
            //console.log(currentPosition);
            break;
        case "v":
            console.log("down");
            yCurrent -= 1;
            addPresentLocation([xCurrent,yCurrent]);
            //console.log(currentPosition);
            break;
    }
}


function countHouses(input){
    for(let i = 0; i < input.length; i++){
        let direction = input.charAt(i);
        readDirection(direction);
    }
    let uniqueLocations = new Set(locations);
    console.log(locations);
    console.log(uniqueLocations);
}

countHouses(input);
