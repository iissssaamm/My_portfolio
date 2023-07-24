/*const text = document.getElementById("text-display");
let arr=['not a Hacker','not a Criminal','a junior web Developper']
let arrType=[]
let i =0
let j=0
let nowDelete= false
 let isEnd=false
function typing() {
    let isEnd=false
    text.innerHTML=arrType.join('')
 if (i<arr.length) {
   //console.log(arrType)
    
    if (!nowDelete && j <=arr[i].length) {
        arrType.push(arr[i][j])
        j++
            text.innerHTML=arrType.join('')

    }
    if (nowDelete && j <=arr[i].length) {
        arrType.pop()
        j--  
            text.innerHTML=arrType.join('')

    }
     if (j==arr[i].length) {
       nowDelete=true
       isEnd== true
    }
   
    if (j==0&&nowDelete) {
        arrType=[]
        nowDelete=false
        i++
        if (i==arr.length) {
            i=0
        }
    }
   
}
const bzarba= Math.random() * (80 - 50) + 50
const aadia = Math.random() * (300 - 200) + 200
const time = isEnd ? 2000 : nowDelete ? bzarba : aadia
setTimeout(typing , time)
}
typing()*/




///////////

//TYPING TEXT//

///////////

const textDisplay = document.getElementById('text-display')
const phrases = ['not a Hacker','not a Criminal','a junior web Developper']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()
/////////////////

//SEND EMAIL//

////////////////

  function sendEmail() {
    // Replace 'your_email@example.com' with your actual email address
    var emailAddress = 'issam.b39@yahoo.com';

    // You can also specify the subject and body of the email
    var subject = 'Let us Talk';
    var body = 'Hi, ';

    // Encode the email subject and body using encodeURIComponent
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Create the mailto link with the email address, subject, and body
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + subject + '&body=' + body;

    // Open the user's mail client with the pre-filled email
    window.location.href = mailtoLink;
  }



  ///////////////////////////////

//////////  button-theme //////

/////////////////////////////


/*function themeToggle (){
  const root = document.documentElement
  const themeSwithcher = root.className === 'dark' ? 'light': 'dark';
  root.className = themeSwithcher
  document.querySelector('.theme-mode').textContent = themeSwithcher
}
document.querySelector('.theme').addEventListener('click',themeToggle)*/




