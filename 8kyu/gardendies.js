function rainAmount(mm){
    let ammount = 40 - mm
    if (mm < 40) {
         return `You need to give your plant ${ammount}mm of water`
    }
    else {
         return "Your plant has had more than enough water for today!"
    };
}