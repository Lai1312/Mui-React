import {Stack, Autocomplete, TextField } from "@mui/material";
import{useState} from 'react'

type  Skill ={
    id: number
    label: string
}

const skills = ['HTML', 'CSS','JAVASCRIPT','TYPESCRIPT','REACT']
const skillsOptions = skills.map((skills, index) => ({
    id: index +1, 
    label: skills,
}))

export const MuiAutocomplete =() => {
    const [value, setValue] =useState<String | null > (null)
    const [skill, setSkill] =useState<Skill | null > (null)
    console.log(skill)

return (
 <Stack spacing = {2}  width = '250px'>

  <Autocomplete 
options = {skills}
renderInput={(params ) => 
<TextField {...params}
label='Skills'/> }
value ={value}
onChange={(event: any, newValue: String | null ) => setValue(newValue)}
/*freeSolo*/
/>

<Autocomplete
options={skillsOptions}
renderInput={(params) => 
<TextField {...params}
label= 'Skills'/>}
onChange = {(event: any, newValue: Skill| null ) => setSkill(newValue)}
/*freeSolo*/
/>

 </Stack>

)
}