import React, { useState } from 'react'

import { WizardProps } from './wizard.type'

export function Wizard({ error, steps }: WizardProps) {
  const [step, setStep] = useState<string>(steps[0].name)

  const getCurrentStepIndex = () => {
    const currentStep = steps.find((s) => s.name === step)
    return steps.indexOf(currentStep!)
  }

  const prev = () => {
    const prevStepIndex = getCurrentStepIndex() - 1
    if (prevStepIndex >= 0) setStep(steps[prevStepIndex].name)
  }

  const next = () => {
    const nextStepIndex = getCurrentStepIndex() + 1
    if (nextStepIndex < steps.length) {
      // * Enhance UX. The movement is very quick, so we add a timeout to make it feel more natural
      const timeout = setTimeout(() => {
        setStep(steps[nextStepIndex].name)
        clearTimeout(timeout)
      }, 360)
    }
  }

  const goTo = (step: string) => setStep(step)

  return (
    <>
      {error && <div>{error}</div>}
      {!error &&
        steps?.map((s) =>
          step === s.name ? <s.component key={s.name} prev={prev} next={next} goTo={goTo} /> : null,
        )}
    </>
  )
}
