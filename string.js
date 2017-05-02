var exports = module.exports = {};

function PasswordMessage(m){
    this.name= "PasswordMessage";
    this.message= m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>=min && unicode<=max){
        return true;
    }
    else{
        return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
    let hasUpper = false;
    try{
        for(var a=0;a<str.length;a++){
            if(inRange(str[a],65,90)){
                hasUpper = true;
                throw PasswordMessage("Password has uppercase letter");
            }
        }
        if(hasUpper = false){
            throw PasswordMessage("Password does not have an uppercase letter");
        }
    }
    catch(e){
        console.log(e.message);
        return hasUpper;
    }
}


exports.containsLower =function(str){
    let hasLower = false;
    try{
        for(var a=0;a<str.length;a++){
            if(inRange(str[a],97,122)){
                hasLower = true;
                throw PasswordMessage("Password has lowercase letter");
            }
        }
        if(hasLower = false){
            throw PasswordMessage("Password does not have an lowercase letter")
        }
    }
    catch(e){
        console.log(e.message);
        return hasLower;
    }
}

exports.containsNumerical =function(str){
    let hasNumber = false;
    try{
        for(var a=0;a<str.length;a++){
            if(inRange(str[a],48,57)){
                hasNumber = true;
                throw PasswordMessage("Password has a number");
            }
        }
        if(hasNumber = false){
            throw PasswordMessage("Password does not have a number");
        }
    }
    catch(e){
        console.log(e.message);
        return hasNumber;
    }
}


exports.containsSpecial =function(str){
    let hasSpecial = false;
    let special = [33,64,35,36,37,94,38,42];
    try{
        for(var a=0;a<str.length;a++){
            for(var b=0;b<special.length,b++){
                if(str[a]==special[b]){
                    hasSpecial = true;
                    throw PasswordMessage("Password has a special character")
                }
                if
            }
        }
    }
    catch(e){
        console.log(e.message);
        return hasSpecial;
    }
}
