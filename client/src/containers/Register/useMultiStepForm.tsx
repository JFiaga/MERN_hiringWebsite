import  { ReactElement, useState } from 'react'



export default function useMultiStepForm(steps: ReactElement[]) {

    const [curentStepIndex, setCurentStepIndex] = useState(0)

function next () {
    setCurentStepIndex (i => {
        if(i=== steps.length - 1) return i
        return i + 1
    })
}

function back (){
    setCurentStepIndex(i => {
        if (i<= 0) return i
        return i - 1
    })
}

function goTo (index:number) {
    setCurentStepIndex(index)
}
  return {
    steps,
    curentStepIndex,
    step:steps[curentStepIndex],
    isFirstStep: curentStepIndex ===0,
    isLastStep:curentStepIndex === steps.length -1,
    goTo,
    next,
    back,
  }
}