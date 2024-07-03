const configGoogleChart = {
  chartTypes: {
    bar: 'Bar',
    pie: 'Pie',
  },
}

export type ChartType =
  (typeof configGoogleChart.chartTypes)[keyof typeof configGoogleChart.chartTypes]

export default configGoogleChart
