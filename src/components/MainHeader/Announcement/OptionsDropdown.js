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

    <select className='selectContainer'>
 
        <option className='selected' value="ENGLISH" selected hidden>
          English
      </option>


        <option value="ENGLISH">ENGLISH</option>

    </select>

    <select className='selectContainer selectContainer2'>
 

 <option className='selected' value="USD" selected hidden>
   USA (USD)
</option>

 <option value="USD">USA (USD)</option>

</select>

    </div>
  );
}

export default OptionsDropdown