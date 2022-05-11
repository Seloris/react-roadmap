export interface Step {
  key: string
  title: string
  descr: string
  subSteps?: Array<Step>
}
