import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PrimaryButton = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
        </Stack>
    );
};

export default PrimaryButton;