import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './OptionsDropdown.css'
import { FormHelperText } from '@mui/material';



const OptionsDropdown = () => {


  const [languages, setlanguages] = React.useState('');

  const handleChange = (event) => {
    setlanguages(event.target.value);
  };





  return (


    <div className='selectedDiv'>

    <select  defaultValue="ENGLISH" className='selectContainer'>
 
    
        <option value="ENGLISH">ENGLISH</option>

    </select>

    <select defaultValue="USD" className='selectContainer selectContainer2'>
 



 <option value="USD">USA(USD)</option>

</select>

    </div>
  );
}

export default OptionsDropdown