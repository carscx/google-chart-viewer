export const DEFAULT_DATA_CHART = [
  ['Mes', 'Devengado'],
  ['no aplica', 93091.368],
  ['quales group - gestión de talento', 5282.216],
  ['mercado libre', 4932.721],
]

export const DEFAULT_OPTIONS_CHART = {
  title: 'Top 3 clientes con más devengado del año 2024',
  titleTextStyle: {
    color: '#fff',
  },
  width: 900,
  height: 500,
  legend: { position: 'none' },
  chartArea: {
    backgroundColor: 'transparent',
    width: '80%',
    height: '70%',
  },
  backgroundColor: 'transparent',
  bars: 'vertical',
  axes: {
    x: {
      0: { side: 'top', label: 'Cliente' },
    },
  },
  hAxis: {
    title: 'Cliente',
    textStyle: {
      color: '#fff',
    },
  },
  vAxis: {
    title: 'Monto Devengado',
    textStyle: {
      color: '#fff',
    },
    format: 'short',
  },
  bar: { groupWidth: '90%' },
}
