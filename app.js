console.log("Hum connect hai")

const myAudio = document.querySelector("audio")
const myPlay = document.getElementById("play")
 const currentTimeAudio = document.getElementById("currenttime")
 const durationAudio = document.getElementById("duration")
 
isAudioPlaying = false

function playAudio(){ 
    isAudioPlaying = true
    myAudio.play()
    myPlay.classList.replace("fa-play","fa-pause")
}

  
function audioPause(){ 
    isAudioPlaying = false
    myAudio.pause()
    myPlay.classList.replace("fa-pause","fa-play")
}




myPlay.addEventListener("click",function(){
    //write the logic of play and pause the audio
    if(isAudioPlaying)
    {
      audioPause()
    }
    else
    {
      playAudio()
    }
})

const myData = [
  {
    singerName: "Sukhwinder Singh",
    songName: "Chak De India - Chak De!",
    Images: "chak de india",
    mp3:"chak de india"
  },
  {
    singerName: "Shreya Ghoshal And Sukhwinder Singh",
    songName: "Kar Har Maidaan Fateh - Sanju",
    Images: "har maiden",
    mp3: "har maiden"
  },
  {
    singerName: "Sukhwinder Singh",
    songName: "Re sultan",
    Images: "Re Sultan",
    mp3: "sultan"
}
]


const mySinger = document.getElementById("singer")
const mySong = document.getElementById("song")
const myImage = document.querySelector("img")

const myForward = document.getElementById("forward")
const myBackward = document.getElementById("backward")



function loadSong(song){
mySinger.innerText = song.singerName
mySong.innerText = song.songName
myImage.src = `Images/${song.Images}.jpg`
myAudio.src = `mp.3/${song.mp3}.mp3`
}


let songIndex = 0

myBackward.addEventListener("click",function ()
{
  songIndex --
  //logic to increase the songIndex

 if (songIndex < 0){
  songIndex = myData.length - 1
 }
    
    console.log(songIndex)
    // logic where the next song will be played
    loadSong(myData[songIndex])
    playAudio()
  })

myForward.addEventListener("click",function ()
{
  songIndex ++
  //logic to increase the songIndex

  if(songIndex > myData.length - 1)
  {
    songIndex = 0
    // loadSong(myData[0])
  }
    
    console.log(songIndex)
    // logic where the next song will be played
    loadSong(myData[songIndex])
    playAudio()
  })


  //currentTime , duration -->audio

 const myProgressBar = document.getElementById("progressbar")

  myAudio.addEventListener("timeupdate", function(event){

    // Logic to get the currentTime as the audio keeps playing,total duration
    let myCurrentTime = event.srcElement.currentTime
    let myDuration = event.srcElement.duration
    // console.log(myCurrentTime , myDuration)  

    let myPercentage = (myCurrentTime / myDuration) * 100   // percentage of the audio that is played
    // console.log(myPercentage)

   myProgressBar.style.width = `${myPercentage}%`

   /////////////////loogic to create time duration

   if(isAudioPlaying === true){
    
   const durationInMinutes = Math.floor(myDuration / 60)
   //  console.log(durationInMinutes)
   let durationInSeconds = Math.floor(myDuration % 60) 
   console.log(durationInSeconds)
 
    if(durationInSeconds < 9){
           durationInSeconds = `0${durationInSeconds}`
    }
 
    `${durationInMinutes}:${durationInSeconds}`
 
    durationAudio.innerText = `${durationInMinutes}:${durationInSeconds}`
 
 
    
     /////// current time logic
 
     const currentTimeInMinutes = Math.floor(myCurrentTime / 60)
   //  console.log(durationInMinutes)
   let currentTimeInSeconds = Math.floor(myCurrentTime % 60) 
   // console.log(durationInSeconds)
 
    if(currentTimeInSeconds < 9){
           currentTimeInSeconds = `0${currentTimeInSeconds}`
    }
 
    `${currentTimeInMinutes}:${currentTimeInSeconds}`
 
    currentTimeAudio.innerText =  `${currentTimeInMinutes}:${currentTimeInSeconds}`
   }

   else{
    durationAudio.innerText = " "
    currentTimeAudio.innerText = " "
   }

  //  const durationInMinutes = Math.floor(myDuration / 60)
  // //  console.log(durationInMinutes)
  // let durationInSeconds = Math.floor(myDuration % 60) 
  // console.log(durationInSeconds)

  //  if(durationInSeconds < 9){
  //         durationInSeconds = `0${durationInSeconds}`
  //  }

  //  `${durationInMinutes}:${durationInSeconds}`

  //  durationAudio.innerText = `${durationInMinutes}:${durationInSeconds}`


   
  //   /////// current time logic

  //   const currentTimeInMinutes = Math.floor(myCurrentTime / 60)
  // //  console.log(durationInMinutes)
  // let currentTimeInSeconds = Math.floor(myCurrentTime % 60) 
  // // console.log(durationInSeconds)

  //  if(currentTimeInSeconds < 9){
  //         currentTimeInSeconds = `0${currentTimeInSeconds}`
  //  }

  //  `${currentTimeInMinutes}:${currentTimeInSeconds}`

  //  currentTimeAudio.innerText =  `${currentTimeInMinutes}:${currentTimeInSeconds}`









  })






















































  // function (event)
  // {
  //   //Logic to get data (time) related to audio
  //   const myCurrentTime = event.srcElement.currentTime
  //   const myDuration = event.srcElement.duration


  //   //  console.log(myCurrentTime ,myDuration)

  //    const audioDurationPercentage = (myCurrentTime / myDuration) * 100

  //   //  console.log(audioDurationPercentage)
  //   myProgressBar.style.width = `${audioDurationPercentage}%`
    
  //   console.log(myDuration)
  // }

  // myAudio.addEventListener("timeupdate",myData)

  

  









