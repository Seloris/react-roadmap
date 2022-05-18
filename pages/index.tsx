import {
  Card,
  Checkbox,
  Container,
  Grid,
  Progress,
  Spacer,
  Text,
} from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { FAKE as FAKE_STEPS, Step } from '../lib/step'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [steps, setSteps] = useState<Step[]>(FAKE_STEPS)

  const stepChecked = (
    mainIdx: number,
    childrenIdx: number,
    checked: boolean
  ) => {
    const newArr = [...steps]
    newArr[mainIdx].children![childrenIdx].checked = checked
    setSteps(newArr)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>React Roadmap</title>
      </Head>
      <header>React Roadmap</header>
      <main className={styles.main}>
        {steps.map((step, i) => (
          <StepPart
            key={step.key}
            step={step}
            onStepChecked={(idx, checked) => stepChecked(i, idx, checked)}
          ></StepPart>
        ))}
      </main>
    </div>
  )
}

interface StepProps {
  step: Step
  onStepChecked: (idx: number, checked: boolean) => void
}

const StepPart = (props: StepProps) => {
  const { step } = props

  const checked = step.children!.filter((x) => x.checked).length
  const total = step.children!.length
  const percentage = (checked / total) * 100

  return (
    <>
      <Card hoverable css={{ mw: '400px' }}>
        <Text h3 css={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>{step.title}</div>
        </Text>
        <Spacer y={3}></Spacer>
        <Text css={{ textAlign: 'center' }}>
          {checked}/{total}
        </Text>
        <Progress color="primary" value={percentage} />
      </Card>
      {step.children && (
        <Grid.Container gap={2} justify="center" css={{ marginTop: 2 }}>
          {step.children.map((subStep, i) => (
            <Grid
              key={subStep.key}
              onClick={() => props.onStepChecked(i, !subStep.checked)}
            >
              <Card hoverable css={{ mw: '320px' }}>
                <Text h5>{subStep.title}</Text>
                <Text>{subStep.descr}</Text>
                <Checkbox
                  isSelected={subStep.checked}
                  onChange={() => props.onStepChecked(i, !subStep.checked)}
                ></Checkbox>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </>
  )
}

export default Home
