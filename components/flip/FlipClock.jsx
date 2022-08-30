/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/



import {
  createSignal 
, onMount
, createEffect
, onCleanup
, createMemo
} from 'solid-js';

import "./flip.css"

// function component
const AnimatedCard = ({ animation, digit }) => {

  createEffect(()=>{
    //console.log(digit())
    //console.log(animation())
  })

  return(
    <div className={`flipCard ${animation()}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, digit }) => {
//const StaticCard = (props) => {

  createEffect(()=>{
    //console.log(position)
    //console.log(shuffle())
  })

  return(
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {	
  
  const [_digit1, setDigit1] = createSignal('00');
  const [_digit2, setDigit2] = createSignal('00');

  const [_animation1, setAnimation1] = createSignal('');
  const [_animation2, setAnimation2] = createSignal('');
  const [_currentDigit, setCurrentDigit] = createSignal('');
  const [_previousDigit, setPreviousDigit] = createSignal('');
  //const digit = createMemo(() => {
    //console.log(sdigit());
    //return sdigit();
  //});

  createEffect(()=>{
    // assign digit values
    let currentDigit = digit();
    let previousDigit = digit() - 1;

    // to prevent a negative value
    if ( unit !== 'hours') {
      previousDigit = previousDigit === -1 
        ? 59 
        : previousDigit;
    } else {
      previousDigit = previousDigit === -1 
        ? 23 
        : previousDigit;
    }

    // add zero
    if ( currentDigit < 10 ) {
      currentDigit = `0${currentDigit}`;
      setCurrentDigit(currentDigit)
    } 
    if ( previousDigit < 10 ) {
      previousDigit = `0${previousDigit}`;
      setPreviousDigit(previousDigit)
    }

    // shuffle digits
    const digit1 = shuffle() 
      ? previousDigit 
      : currentDigit;
    setDigit1(digit1)
    const digit2 = !shuffle() 
      ? previousDigit 
      : currentDigit;
    setDigit2(digit2)
    // shuffle animations
    const animation1 = shuffle() 
      ? 'fold' 
      : 'unfold';
    setAnimation1(animation1)
    const animation2 = !shuffle() 
      ? 'fold' 
      : 'unfold';
    setAnimation2(animation2)
  })

  return(
    <div className={'flipUnitContainer'}>
      <StaticCard 
        position={'upperCard'} 
        digit={_currentDigit} 
        />
      <StaticCard 
        position={'lowerCard'} 
        digit={_previousDigit} 
        />
      <AnimatedCard 
        digit={_digit1}
        animation={_animation1}
        />
      <AnimatedCard 
        digit={_digit2}
        animation={_animation2}
        />
    </div>
  );
};
/*

*/

//main
export default function FlipClock() {


  const [hours, setHours] = createSignal(0);
  const [hoursShuffle, setHoursShuffle] = createSignal(true);
  const [minutes, setMinutes] = createSignal(0);
  const [minutesShuffle, setMinutesShuffle] = createSignal(true);
  const [seconds, setSeconds] = createSignal(0);
  const [secondsShuffle, setSecondsShuffle] = createSignal(true);

  const [timerID, setTimerID] = createSignal(null);

  let _timerID = setInterval(
    () => updateTime(),
    50
  );
  setTimerID(_timerID)

  onCleanup(()=>{
    if(timerID() !=null){
      clearInterval(timerID());
    }
  })

  function updateTime() {
    // get new date
		const time = new Date;
		// set time units
		const chours = time.getHours();
		const cminutes = time.getMinutes();
		const cseconds = time.getSeconds();
    // on hour chanage, update hours and shuffle state
    if( chours !== hours()) {
      const choursShuffle = !hoursShuffle();
      setHours(chours)
      setHoursShuffle(choursShuffle);
    }
    // on minute chanage, update minutes and shuffle state
		if( cminutes !== minutes()) {
			const cminutesShuffle = !minutesShuffle();
      setMinutes(cminutes)
      setMinutesShuffle(cminutesShuffle)
		}
		// on second chanage, update seconds and shuffle state
		if( cseconds !== seconds()) {
			const csecondsShuffle = !secondsShuffle();
      setSeconds(cseconds)
      setSecondsShuffle(csecondsShuffle)
		}
    //console.log(chours,":",cminutes,":",cseconds)
  }

  return (
    <>
      <div className={'flipClock'}>

				<FlipUnitContainer 
					unit={'seconds'}
					digit={seconds}
					shuffle={secondsShuffle} 
					/>
			</div>
    </>
  );
}
/*

				<FlipUnitContainer 
					unit={'hours'}
					digit={hours()} 
					shuffle={hoursShuffle()} 
					/>
				<FlipUnitContainer 
					unit={'minutes'}
					digit={minutes()} 
					shuffle={minutesShuffle()} 
					/>
*/