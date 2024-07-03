import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'
import { OptionsChart } from '@/types'
import { ChartOptions } from '@/utils/ChartOptions'
import './Poppins-Medium-normal'

export const exportToPDF = async (
  data: any[],
  title: string,
  chartElement: HTMLElement,
  originalOptions: OptionsChart,
  drawChart: (options: OptionsChart) => void
): Promise<void> => {
  const doc = new jsPDF()

  doc.setFont('Poppins', 'normal')
  doc.setFontSize(18)
  doc.text(title, 15, 20)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  doc.autoTable({
    startY: 30,
    head: [data[0]],
    body: data.slice(1),
    styles: { font: 'Poppins' },
    headStyles: { font: 'Poppins' },
    bodyStyles: { font: 'Poppins' },
  })

  const newOptions = {
    ...originalOptions,
    ...ChartOptions.getOptions(false),
  }

  drawChart(newOptions)

  await new Promise((resolve) => setTimeout(resolve, 500))

  const canvas = await html2canvas(chartElement, { scale: 2 })
  const imgData = canvas.toDataURL('image/png')

  drawChart(originalOptions)

  const imgWidth = 180
  const imgHeight = (canvas.height * imgWidth) / canvas.width
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const position = doc.autoTable.previous.finalY + 10
  doc.addImage(imgData, 'PNG', 15, position, imgWidth, imgHeight)

  doc.save(`${title}.pdf`)
}
