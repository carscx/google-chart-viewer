import React, { type FC, useRef, useState } from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { OptionsChart } from '@/types'
import { DEFAULT_DATA_CHART, DEFAULT_OPTIONS_CHART } from '@/googleChartDefaults'
import configGoogleChart, { type ChartType } from '@/config'
import useGoogleChart from '@/hooks/useGoogleChart'
import { ExportToCSVButton, ExportToPDFButton } from '@/ExportButtons'

interface GoogleChartProps {
  data?: any | null
  options?: OptionsChart | null
}

const GoogleChart: FC<GoogleChartProps> = ({
  data = DEFAULT_DATA_CHART,
  options = DEFAULT_OPTIONS_CHART,
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null)
  const [chartType, setChartType] = useState<ChartType>(configGoogleChart.chartTypes.bar)
  // @ts-expect-error
  const { chartRef, drawChart } = useGoogleChart(data, options, chartType)
  const { t } = useTranslation('common')

  const handleChartTypeChange = (event: SelectChangeEvent) => {
    setChartType(event.target.value as ChartType)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={4}
      width={'100%'}
    >
      <FormControl variant="outlined" style={{ marginBottom: 16, minWidth: 300 }}>
        <InputLabel id="chart-type-label">{t('selectChartType')}</InputLabel>
        <Select
          labelId="chart-type-label"
          id="chart-type-select"
          value={chartType}
          onChange={handleChartTypeChange}
          label={t('selectChartType')}
        >
          <MenuItem value={configGoogleChart.chartTypes.bar}>{t('barChart')}</MenuItem>
          <MenuItem value={configGoogleChart.chartTypes.pie}>{t('pieChart')}</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6" align="center">
        {options?.title}
      </Typography>
      <Box ref={chartContainerRef} style={{ width: '100%', height: '500px' }}>
        <Box ref={chartRef} style={{ width: '100%', height: '100%' }}></Box>
      </Box>
      <Box
        mt={2}
        mb={2}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <ExportToCSVButton data={data} title={options?.title || 'chart'} />
        <ExportToPDFButton
          data={data}
          title={options?.title || 'chart'}
          chartElement={chartContainerRef.current}
          // @ts-expect-error
          originalOptions={options}
          drawChart={drawChart}
        />
      </Box>
    </Box>
  )
}

export default GoogleChart
