import React, { FC } from 'react'
import { Button } from '@mui/material'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { useTranslation } from 'react-i18next'
import { exportToCSV } from '@/utils/exportToCSV'
import { exportToPDF } from '@/utils/exportToPDF'
import { OptionsChart } from '@/types'

interface ExportButtonProps {
  data: any[]
  title: string
  chartElement?: HTMLElement | null
  originalOptions?: OptionsChart
  drawChart?: (options: OptionsChart) => void
}

export const ExportToCSVButton: FC<ExportButtonProps> = ({ data, title }) => {
  const { t } = useTranslation('common')
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<SaveAltIcon />}
      onClick={() => exportToCSV(data, title)}
    >
      {t('exportToCsv')}
    </Button>
  )
}

export const ExportToPDFButton: FC<ExportButtonProps> = ({
  data,
  title,
  chartElement,
  originalOptions,
  drawChart,
}) => {
  const { t } = useTranslation('common')

  const handleExport = async () => {
    if (chartElement && originalOptions && drawChart) {
      await exportToPDF(data, title, chartElement, originalOptions, drawChart)
    }
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<PictureAsPdfIcon />}
      onClick={handleExport}
      style={{ marginLeft: 16 }}
    >
      {t('exportToPdf')}
    </Button>
  )
}
