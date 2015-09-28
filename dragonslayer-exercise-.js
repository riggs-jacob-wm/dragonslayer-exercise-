var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
console.log("An dragon flies over head and lands on a hill nearby and faces you, ready for battle.");

var shoutOrHit = prompt("Do you try to use your Thu'um or attack it? (Thu'um or attack)");
            if(shoutOrHit === "Thu'um") {
                console.log("You use your Thu'um and the dragon retreats.")
            }
        else {
                while (slaying) {
                    if (youHit) {
                        console.log("You hit and the dragon gave up the attack!");
                        totalDamage += damageThisRound;
                        if (totalDamage >= 4) {
                            console.log("You win!");
                            slaying = false;
                        } else {
                            youHit = Math.floor(Math.random() + 1);
                        }
                    } else {
                        console.log("You missed! The dragon flaps its wings in triumph and sprays its fire breath at you. Game over.");
                    }
                    slaying = false;

                }
            }

