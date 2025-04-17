import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'

export interface ContentTab {
  value: number | string
  label: string
  element: React.ReactNode
}

interface ContentTabPanelProps {
  value: number | string
  currentValue: number | string
  children?: React.ReactNode
  index?: number
}

interface ContentTabsProps {
  tabs: ContentTab[]
  defaultValue?: number | string
}

function ContentTabPanel(props: ContentTabPanelProps) {
  const { children, value, index, currentValue, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== currentValue}
      id={`content-tabpanel-${value}`}
      aria-labelledby={`content-tab-${value}`}
      {...other}
    >
      {value === currentValue && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  )
}

function buildTabProps(index: number, value: number | string) {
  return {
    id: `content-tab-${value}`,
    'aria-controls': `content-tabpanel-${value}`,
  }
}

export const ContentTabs = ({ tabs, defaultValue, ...other }: ContentTabsProps) => {
  const [value, setValue] = React.useState<any>(defaultValue)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //console.log('handleChange', newValue, event)
    setValue(newValue)
  }

  React.useEffect(() => {
    // reset value to default value if tabs change
    //console.log('Tabs changed. Reset to defautl tab', defaultValue)
    setValue(defaultValue)
  }, [defaultValue, tabs])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          {tabs.map((tab, idx) => {
            return (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                {...buildTabProps(idx, tab.value)}
              />
            )
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, idx) => {
        return (
          <ContentTabPanel key={tab.value} value={tab.value} currentValue={value} index={idx}>
            {tab.element}
          </ContentTabPanel>
        )
      })}
    </Box>
  )
}
