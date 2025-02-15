import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { ShowStatus, STATUSES } from '../../utils/ShowStatus'

const OrderSave = ({ orderDetails }) => {
    return (
        <Box p={2}>
            <Stack direction={'row'} gap={2}>
                <Typography>#{orderDetails.id}</Typography>
                <ShowStatus status={STATUSES[orderDetails.status.toUpperCase()]} />
            </Stack>
            <Stack direction={'row'} gap={1}>
                <Typography>{orderDetails.company} | Delaware</Typography>
                <Typography>-</Typography>
                <Typography color='blue'>Contact_Person.</Typography>
            </Stack>
        </Box>
    )
}

export default OrderSave