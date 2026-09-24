const money = 500;
if (money > 300) {
    console.log("You can hangout with your friends");
} else {
    if (money > 150) {
        console.log("You can't go out");
    }
    else {
        if (money > 0) {
            console.log("go home and sleep well");
        } else {
            console.log("you are really poor guy");
        }
    }
}