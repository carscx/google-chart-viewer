import { saveAs } from 'file-saver'

export const exportToCSV = (data: any[], title: string): void => {
  let csvContent = 'data:text/csv;charset=utf-8,'
  data.forEach((rowArray: any[]) => {
    const row = rowArray.join(',')
    csvContent += row + '\r\n'
  })
  const encodedUri = encodeURI(csvContent)
  saveAs(encodedUri, `${title}.csv`)
}
