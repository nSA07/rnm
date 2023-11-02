import { useState } from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

import Box from '@mui/material/Box';
import { 
    SpeedDial,
    SpeedDialAction,
    Drawer,
    Popover,
    Button
} from '@mui/material';

import speedDialIcon from '../../assets/Fab/more-vertical.svg'
import download from '../../assets/Fab/download.svg'
import info from '../../assets/Fab/alert-circle.svg'

const generateAndDownloadCSV = (data) => {
    
    if (!data) {
        return
    }  else {
        const csv = Papa.unparse(data.characters.results);
  
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      
        saveAs(blob, 'file.csv');
    }
  }

export const Fab = ({uniqueParams, fileUpload}) => {
    const history = useSelector((state) => state.history.history)
    const [anchorEl, setAnchorEl] = useState(false);

    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
    
    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<img src={speedDialIcon} />}
            >
                <SpeedDialAction
                    key='Download'
                    icon={<img style={(!uniqueParams) ? {opacity: .4} : {opacity: 1}} src={download} alt='Download' />}
                    tooltipTitle='Download'
                    onClick={() => generateAndDownloadCSV(fileUpload)}
                />
                <SpeedDialAction
                    key='Info'
                    icon={<img src={info} alt='Info' />}
                    tooltipTitle='Info'
                    onClick={() => setAnchorEl(true)}
                />
            </SpeedDial>
            <Drawer
                open={anchorEl}
                anchor={'right'}
            >
                <div className='fab__popover'>
                    <div className='fab__hero'>
                        <h3 className='fab__title'>History</h3>
                        <div className='fab__wrap'>
                            <span className='fab__descr'>Character:</span>
                            {history.map((story) => (
                                (story.item[0] === 'character') && <p className='fab__text'>{story.nameCharacter} {story.speciesCharacter} {story.statusCharacter} {story.typeCharacter} {story.genderCharacter}</p>
                            ))}
                        </div>
                        <div className='fab__wrap'>
                            <span className='fab__descr'>Location:</span>
                            <p className='fab__text'>value</p>
                        </div>
                        <div className='fab__wrap'>
                            <span className='fab__descr'>Episode:</span>
                            <p className='fab__text'>value</p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setAnchorEl(false)}
                        variant="text"
                        sx={{color: '#1976D2', padding: '8px 0 8px 8px'}}
                    >Close</Button>
                </div>
            </Drawer>
        </Box>
    );
}
