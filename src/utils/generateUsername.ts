import crypto from 'crypto'
export default function GenerateUsername(email : string){
    const getUser = email.split("@")
    const name = getUser[0]
    let result = ''
     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     for(let i = 0; i < 9 ; i++){

         const randomInd = crypto.randomInt(62)
         result += characters.charAt(randomInd)         
        }
        const userNameLimited = name.slice(0,10)
        const username = userNameLimited.concat("_" , result)
        console.log(username)
    return username;

}
