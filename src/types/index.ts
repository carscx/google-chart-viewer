export interface DataChartFromAPIType {
  chartData: [string, number][]
}

export interface OptionsChart {
  chart: {
    title?: string
    width?: number
    height?: number
    legend?: { position?: string }
    bars?: string
    axes?: {
      x?: { [key: string]: { side: string; label: string } }
    }
    bar?: { groupWidth: string }
  }
  title?: string
  titleTextStyle?: { color?: string; fontName?: string }
  hAxis?: {
    textStyle?: {
      color?: string
      fontName?: string
    }
    titleTextStyle: {
      color: string
      fontName: string
    }
  }
  vAxis?: {
    textStyle?: {
      color?: string
      fontName?: string
    }
    titleTextStyle: {
      color: string
      fontName: string
    }
  }
  legend: {
    textStyle: { color: string; fontName?: string }
  }
  responsive: boolean
}
