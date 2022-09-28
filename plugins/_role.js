let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Warrior V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Bronze IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Bronze III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Bronze II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Bronze I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Silver V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Silver IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Silver III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Silver II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Silver I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Gold V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Gold IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Gold III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Gold II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Gold I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Platinum V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Platinum IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Platinum III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Platinum II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Platinum I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Diamond V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Diamond IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Diamond III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Diamond II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Diamond I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Master V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Master IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Master III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Master II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Master I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Conqueror V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Conqueror IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Conqueror III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Conqueror II'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Conqueror I'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Grand Conqueror'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? 'Skysurfers Lovers'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Demon lord seed'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Demon lord'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'True demon lord'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Octagram'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Older demon lord'
                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 700)) ? 'Great demon lord'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? 'Strongest demon lord'
                                                                                                                                                                                : 'Star king dragon'


    user.role = role
    return true
}

module.exports = handler