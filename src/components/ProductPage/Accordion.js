import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import './Accordion.css';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

export default function SimpleAccordion() {
  return (
    <div className="accordionContainer">
      <Accordion>
        <AccordionSummary
          className="acordheade"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="acordheade">
            {' '}
            <CategoryOutlinedIcon fontSize="large" />
            <h1 className="acordheadline">Materials</h1>
          </div>
        </AccordionSummary>
        <AccordionDetails className="acorddetail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            quisquam?
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className="acordheade"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="acordheade">
            {' '}
            <LocalShippingOutlinedIcon fontSize="large" />
            <h1 className="acordheadline">Shiping</h1>
          </div>
        </AccordionSummary>
        <AccordionDetails className="acorddetail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            quisquam?
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className="acordheade"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="acordheade">
            {' '}
            <AccountTreeOutlinedIcon fontSize="large" />
            <h1 className="acordheadline">Dimensions</h1>
          </div>
        </AccordionSummary>
        <AccordionDetails className="acorddetail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            quisquam?
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className="acordheade"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="acordheade">
            {' '}
            <ExtensionOutlinedIcon fontSize="large" />
            <h1 className="acordheadline">Instructions</h1>
          </div>
        </AccordionSummary>
        <AccordionDetails className="acorddetail">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            quisquam?
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
