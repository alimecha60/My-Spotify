import React,{useState,useRef,useEffect} from 'react'
import '../styles/MusicPlayer.css';
import { FaRegHeart,FaHeart, FaStepBackward, FaBackward, FaForward,FaPause, FaPlay, FaStepForward ,FaShareAlt} from "react-icons/fa";
import {BsDownload} from "react-icons/bs";

function MusicPlayer({song,imgSrc,autoplaying}) {
    const[isLove,setLoved]=useState(false)
    const[isPlaying ,setPlaying]=useState(false);
    const[duration,setDuration]=useState(0);
    const[currentTime,setCurrentTime]=useState(0)

    const audioPlayer=useRef(); // our audio tage
    const progresBar=useRef(); //our progress bar
    const animationRef = useRef();//ref to ure animation
    useEffect(()=>{
        const seconds= Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progresBar.current.max = seconds;
    },[
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState,]);
        ///extra thing
       
     
        const changePlayPause=()=>{
            const prevValue=isPlaying;
            setPlaying(!prevValue);
          
            if(!prevValue){
                audioPlayer.current.play();
                animationRef.current=requestAnimationFrame(whilePlaying);
            } else{
                audioPlayer.current.pause();
                cancelAnimationFrame(animationRef.current)
            }
            
        }  ; 
         const whilePlaying=()=>{
            progresBar.current.value=audioPlayer.current.currentTime;  
            changeCurrentTime()
            animationRef.current=requestAnimationFrame(whilePlaying)
        };

        const CalculationTime=(sec)=>{
            const minutes=Math.floor(sec/60);
            const returnMin=minutes< 10 ? `0${minutes}`:`${minutes}`;
         
            const seconds=Math.floor(sec%60);
            const returnSec=seconds < 10 ? `0${seconds}`:`${seconds}`;
         
            return `${returnMin}:${returnSec}`
         };          
        const changeProgress=()=>{
            audioPlayer.current.currentTime=progresBar.current.value;
            changeCurrentTime();
        };




const changeCurrentTime=()=>{
    progresBar.current.style.setProperty(
       " --player-width",
        `${( progresBar.current.value/duration)*100}%`);


        setCurrentTime(progresBar.current.value)

} ;     

    const changeLoved=()=>{
        setLoved(!isLove)
      
    }

  return (
    <div className='musicPlayer'>
     <div className='songImage'>
        <img src={imgSrc} alt=""/>
     </div>
     <div className='songAttributes'>
        <audio src={song}
        preload='metadata'
        ref={audioPlayer}
        />
        <div className='top'>
         <div className='left'>
       <div className='loved' onClick={changeLoved}>
       {isLove?(
            <i>
                
                <FaHeart/>  
            </i>
          ):(
            <i>
             <FaRegHeart/>
            </i>
          )

          }
       </div>
       <div className='download'>
        <i>
            <BsDownload/>
        </i>
       </div>
         </div>
         <div className='middle'>
            <div className='back'>
                <i>
                    <FaStepBackward/>
                </i>
                <i>
                    <FaBackward/>
                </i>
            </div>
            <div className='playpause' onClick={changePlayPause}>
                {
                    isPlaying? <i>
                        <FaPause/>
                    </i>:<i>
                        <FaPlay/>
                    </i>
                }
            </div>
            <div className='forward'>
                <i>
                    <FaForward/>
                </i>
                <i>
                    <FaStepForward/>
                </i>
            </div>
         </div>
         <div className='right'>
            <i>
                <FaShareAlt/>
            </i>
         </div>
        </div>
        <div className='bottom'>
            <div className='currentTime'>{CalculationTime(currentTime)}</div>
            <input 
            type="range" 
            className='progresBar'
            ref={progresBar}
            onChange={changeProgress}
            defaultValue="0"
           
            autoplay={autoplaying}
            />
            <div className='duration'>
                { duration && !isNaN(duration) && CalculationTime(duration)
                ?duration && !isNaN(duration) && CalculationTime(duration)
                  :
                  "00:00"}
            </div>

        </div>
     </div>
    </div>
  )
}

export {MusicPlayer} 
