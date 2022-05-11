import { Card, Grid, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { Step } from '../lib/step'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [steps, setSteps] = useState<Step[]>([
    {
      key: '1',
      title: 'Step 1',
      descr: 'Step 1 descr',
      subSteps: [
        { key: '1-1', title: 'Step 1.1', descr: 'descr' },
        { key: '1-2', title: 'Step 1.2', descr: 'descr' },
        { key: '1-3', title: 'Step 1.3', descr: 'descr' },
        { key: '1-4', title: 'Step 1.4', descr: 'descr' },
        { key: '1-5', title: 'Step 1.5', descr: 'descr' },
        { key: '1-6', title: 'Step 1.6', descr: 'descr' },
      ],
    },
    {
      key: '2',
      title: 'Step 2',
      descr: 'Step 2 descr',
      subSteps: [
        { key: '2-1', title: 'Step 2.1', descr: 'Step 1.1 descr' },
        { key: '2-2', title: 'Step 2.2', descr: 'Step 1.1 descr' },
      ],
    },
    { key: '3', title: 'Step 3', descr: 'Step 1 descr', subSteps: [] },
  ])

  return (
    <div className={styles.container}>
      <Head>
        <title>React Roadmap</title>
      </Head>
      <header>React Roadmap</header>
      <main className={styles.main}>
        {steps.map((step) => (
          <StepPart key={step.key} step={step}></StepPart>
        ))}
      </main>
    </div>
  )
}

interface StepProps {
  step: Step
}

const StepPart = (props: StepProps) => {
  const { step } = props
  return (
    <>
      <Card hoverable css={{ mw: '330px' }}>
        <Text h3>{step.title}</Text>
        <Text>{step.descr}</Text>
      </Card>
      {step.subSteps && (
        <Grid.Container gap={2} justify="flex-start" css={{ marginTop: 2 }}>
          {step.subSteps.map((subStep) => (
            <Grid key={subStep.key}>
              <Card hoverable css={{ mw: '320px' }}>
                <Text h5>{subStep.title}</Text>
                <Text>{subStep.descr}</Text>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </>
  )
}

export default Home
