import { OptionsChart } from '@/types'

const FONT_NAME = 'Poppins'
const COLOR_TRANSPARENT = 'transparent'
const COLOR_LIGHT = '#000'
const COLOR_DARK = '#fff'

export class ChartOptions {
  private static baseOptions: Partial<OptionsChart> = {
    titleTextStyle: {
      color: COLOR_TRANSPARENT,
      fontName: FONT_NAME,
    },
    legend: {
      textStyle: {
        color: COLOR_LIGHT,
        fontName: FONT_NAME,
      },
    },
    responsive: true,
  }

  public static getOptions(isDarkMode: boolean): OptionsChart {
    const color = isDarkMode ? COLOR_DARK : COLOR_LIGHT

    const dynamicOptions: Partial<OptionsChart> = {
      hAxis: {
        textStyle: {
          color,
          fontName: FONT_NAME,
        },
        titleTextStyle: {
          color,
          fontName: FONT_NAME,
        },
      },
      vAxis: {
        textStyle: {
          color,
          fontName: FONT_NAME,
        },
        titleTextStyle: {
          color,
          fontName: FONT_NAME,
        },
      },
      legend: {
        textStyle: {
          color,
          fontName: FONT_NAME,
        },
      },
    }

    return {
      ...this.baseOptions,
      ...dynamicOptions,
    } as OptionsChart
  }
}
