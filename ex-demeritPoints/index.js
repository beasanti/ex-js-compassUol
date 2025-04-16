// Speed Limit = 70km
// Speed dentro do limite = mensagem 'ok'
// para cada 5 quilometros acima do limite de velocidade eles obtem 1 ponto. ex: 75 = 'Point: 1'  ex: 72 = 'ok'
//Math.floor(1.3)
// 12 points -> 'suspended'


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <=  speedLimit + 4) 
        return "Ok"
    else {
            const points = Math.floor ((speed - speedLimit) / kmPerPoint)
            if (points >= 12){
                return "License Suspended" 
                    } else {
                        return "Points: " + points
                    }
        }
}
console.log(checkSpeed(105))