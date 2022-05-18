export interface Step {
  key: string
  title: string
  descr?: string
  checked?: boolean
  children?: Array<Step>
}

export const FAKE: Step[] = [
  {
    key: '1',
    title: 'Fundamental Topics Overall',
    children: [
      { key: '1-1', title: 'Step 1.1' },
      { key: '1-2', title: 'Step 1.2' },
      { key: '1-3', title: 'Step 1.3' },
      { key: '1-4', title: 'Step 1.4' },
      { key: '1-5', title: 'Step 1.5' },
      { key: '1-6', title: 'Step 1.6' },
    ],
  },
  {
    key: '2',
    title: 'Fundamental Topics - Dive in',
    children: [
      {
        key: '2-1',
        title: 'Step 2.1',
        descr: 'Step 1.1 descr',
      },
      {
        key: '2-2',
        title: 'Step 2.2',
        descr: 'Step 1.1 descr',
      },
    ],
  },
]
