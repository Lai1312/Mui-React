import {SpeedDial, SpeedDialAction, SpeedDialIcon} from'@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'

export const MuiSpeedDial = () => {
  return(
   <SpeedDial
   ariaLabel='Navigation speed dial'
   sx= {{position: 'absolute', bottom: 16, rigth: 16}}
   icon={<SpeedDialIcon/>}
   >
   <SpeedDialAction icon ={ <CopyIcon/>} tooltipTitle ='Copy' tooltipOpen/>
   <SpeedDialAction icon ={ <PrintIcon/>} tooltipTitle ='Print' tooltipOpen/>
   <SpeedDialAction icon ={ <ShareIcon/>} tooltipTitle ='Share' tooltipOpen/>
   </SpeedDial>
  )
}