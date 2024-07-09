import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#1B1B1B',
    border: '5px solid #FFD05D',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: 'none'
    },
    '&.Mui-active': {
      boxShadow: 'none'
    }
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 8,
    borderRadius: 4,
    background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)'
  },
  '& .MuiSlider-rail': {
    opacity: 0.3,
    backgroundColor: '#ffffff',
    height: 8,
    borderRadius: 4
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#ffffff',
    height: 0,
    width: 0,
    '&.MuiSlider-markActive': {
      opacity: 0,
      backgroundColor: 'currentColor'
    }
  },
  '& .MuiSlider-markLabel': {
    top: 40,
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.150px',
    color: '#fff',
    padding: '2px 8px',
    opacity: 0.5
  }
}));

function valuetext(value: number) {
  if (value === 18) {
    return '50';
  }
  return `${value}`;
}

const marks = [
  { value: 3, label: '3' },
  { value: 6, label: '6' },
  { value: 9, label: '9' },
  { value: 12, label: '12' },
  { value: 15, label: '15' },
  { value: 18, label: '50' }
];

function DiscreteSliderValues() {
  const [value, setValue] = useState(15); // default value
  const selectedMarkIndex = marks.findIndex((mark) => mark.value === value);

  return (
    <>
      <Box sx={{ width: 725 }}>
        <CustomSlider
          aria-label="Customized slider"
          defaultValue={15}
          getAriaValueText={valuetext}
          step={null}
          marks={marks}
          min={3}
          max={18}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          sx={{
            [`& .MuiSlider-markLabel[data-index="${selectedMarkIndex}"]`]: {
              opacity: 1
            }
          }}
        />
      </Box>
    </>
  );
}

export default DiscreteSliderValues;
