const randStr = (tm) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < tm; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const randNum = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const dateGenerator = () => {
    var aux = new Date(randNum(2017,1922), randNum(12,1),randNum(30,1)) 
    return new Date(new Date().getTime() + Math.random() * (aux.getTime() - new Date().getTime()));
}

const fixTime = (time) => {
    var hh, mm;
    if (time.getHours() < 10)
        hh = "0"+time.getHours()
    else
        hh = time.getHours()
    if(time.getMinutes() < 10)
        mm = "0"+time.getMinutes()
    else
        mm = time.getMinutes()
    
    return hh+":"+mm
}
 
const randDate = (qnt) => {
    var temp = dateGenerator();
    console.log(temp.getHours()+" "+temp.getMinutes()+" "+temp.getSeconds());
    switch(qnt) {
        case 0: return temp.toISOString().slice(0,10); break;
        case 1: return fixTime(temp); break;
    }
}

const rand = (el) => {
    switch(el.type) {
        case 'number': return randNum(100000,0); break;
        case 'text': return randStr(10); break;
        case 'date': return randDate(0); break;
        case 'time': return randDate(1); break;
        case 'email': return randStr(8)+"@testme.com"; break;
        case 'password': return "*********"; break;
        case 'tel': return randNum(44444444,11111111); break;
        case 'url': return "www.testme.com"; break;
        default: return '';
    }
}

let random = {
    rand : rand,
    randNum : randNum
}

module.exports = random