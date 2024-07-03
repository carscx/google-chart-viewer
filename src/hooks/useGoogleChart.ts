import { useEffect, useRef } from 'react'
import { OptionsChart } from '@/types'
import { ChartType } from '@/config'

const useGoogleChart = (data: any[], options: OptionsChart, chartType: ChartType) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  const drawChart = (options: OptionsChart): void => {
    if (window.google && chartRef.current) {
      try {
        if (!Array.isArray(data) || !data.every((item) => Array.isArray(item))) {
          throw new Error('Data for arrayToDataTable is not an array of arrays.')
        }
        const dataRender = window.google.visualization.arrayToDataTable(data)

        let chart
        if (chartType === 'Bar') {
          chart = new window.google.charts.Bar(chartRef.current)
          chart.draw(dataRender, window.google.charts.Bar.convertOptions(options))
        } else if (chartType === 'Pie') {
          chart = new window.google.visualization.PieChart(chartRef.current)
          chart.draw(dataRender, options)
        }
      } catch (error: any) {
        console.error(error.message)
      }
    }
  }

  useEffect(() => {
    const loadGoogleCharts = (): void => {
      const script = document.createElement('script')
      script.src = 'https://www.gstatic.com/charts/loader.js'
      script.onload = () => {
        if (window.google) {
          window.google.charts.load('current', { packages: ['corechart', 'bar'] })
          window.google.charts.setOnLoadCallback(() => drawChart(options))
        }
      }
      document.body.appendChild(script)
    }

    const handleResize = (): void => {
      drawChart(options)
    }

    if (window.google) {
      drawChart(options)
    } else {
      loadGoogleCharts()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [data, options, chartType])

  return { chartRef, drawChart }
}

export default useGoogleChart
