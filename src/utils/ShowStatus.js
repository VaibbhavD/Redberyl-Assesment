import React from 'react';
import { Box, Typography } from '@mui/material';

// Define the status constants
const STATUSES = {
    COMPLETED: { label: 'Completed', color: 'green', background: 'rgba(0, 128, 0, 0.2)' },
    INPROGRESS: { label: 'In Progress', color: 'red', background: 'rgba(255, 0, 0, 0.2)' },
    DRAFT: { label: 'Draft', color: 'gray', background: 'rgba(128, 128, 128, 0.2)' },
    REVIEW: { label: 'Review', color: 'gray', background: 'rgba(128, 128, 128, 0.2)' },
    PENDING: { label: 'Approval Pending', color: 'orange', background: 'rgba(255, 165, 0, 0.2)' },
};

const ShowStatus = ({ status }) => {

    return (
        <Box
            sx={{
                backgroundColor: status.background,
                padding: '1px 6px',
                borderRadius: '7px',
                display: 'inline-block',
                color: status.color,
            }}
        >
            <Typography fontSize={12}>{status.label}</Typography>
        </Box>
    );
};

export { STATUSES, ShowStatus };
