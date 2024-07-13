import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const CustomSlider = styled(Slider)(() => ({
  margin: '0px 0px 16px', // default:20px => height:56px, set:16px => height:52px
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
    backgroundColor: '#FFFFFF',
    height: 8,
    borderRadius: 4
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#FFFFFF',
    height: 0,
    width: 0,
    '&.MuiSlider-markActive': {
      opacity: 0,
      backgroundColor: 'FFFFFF'
    }
  },
  '& .MuiSlider-markLabel': {
    top: 28,
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '0.150px',
    color: '#FFFFFF',
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

function DiscreteSliderValues({ setPageSize }) {
  const [value, setValue] = useState(15); // default value
  const selectedMarkIndex = marks.findIndex((mark) => mark.value === value);

  const handleChange = (_, newValue) => {
    setValue(newValue); // slider value

    // Convert slider value to expected value
    if (newValue === 18) {
      newValue = 50;
    }
    setPageSize(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: {
            xs: 335,
            md: 725
          }
        }}
      >
        <CustomSlider
          aria-label="Customized slider"
          defaultValue={15}
          getAriaValueText={valuetext}
          step={null}
          marks={marks}
          min={2.8}
          max={18.2}
          value={value}
          // valueLabelFormat={valuetext}
          // valueLabelDisplay="auto"
          onChange={handleChange}
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
