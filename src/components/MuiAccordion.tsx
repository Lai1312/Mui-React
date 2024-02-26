import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react'

export const MuiAccordion = () => {
   const [expanded, setExpanded] = useState<string| false > (false)
   const handleChange=(isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded? panel: false)
   }
return(
  <div>
    <Accordion expanded= { expanded === 'panel1'}
    onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
    >
         <AccordionSummary id='panel1-header'
         aria-conntrols='panel1-content'
         expandIcon={<ExpandMoreIcon/>}
    >
    <Typography> Accordion1 </Typography>
     </AccordionSummary>

       <AccordionDetails>
   <Typography>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded= { expanded === 'panel1'}
    onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
    >
         <AccordionSummary id='panel1-header'
         aria-conntrols='panel1-content'
         expandIcon={<ExpandMoreIcon/>}
    >
    <Typography> Accordion2 </Typography>
     </AccordionSummary>

       <AccordionDetails>
   <Typography>
   
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>

<Accordion expanded= { expanded === 'panel1'}
    onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
    >
         <AccordionSummary id='panel1-header'
         aria-conntrols='panel1-content'
         expandIcon={<ExpandMoreIcon/>}
    >
    <Typography> Accordion3 </Typography>
     </AccordionSummary>

       <AccordionDetails>
   <Typography>
   
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>

  </div>
) 
}