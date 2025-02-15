import { Box, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import React from 'react'

const OrderDetailsTab = () => {
    return (
        <Paper sx={{
            bgcolor: 'white', p: 2
        }}>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <Paper variant='outlined' sx={{ height: '100%' }}>
                        <Box sx={{ bgcolor: 'lightblue', color: 'blue', p: 1, fontWeight: 600 }}>
                            Receipt
                        </Box>
                        <Box display='flex' justifyContent={'space-between'}
                            p={2} fontWeight={600}>
                            <Typography fontWeight={600}>
                                State Filings
                            </Typography>
                            <Typography fontWeight={600}>
                                $230
                            </Typography>
                        </Box>
                        <ul className='list-disc px-10'>
                            <li>
                                The filing fee for the application as per state selected
                            </li>
                            <li>Government fee</li>
                        </ul>
                        <hr />
                        <Box display='flex' justifyContent={'space-between'}
                            p={2} fontWeight={600}>
                            <Typography fontWeight={600}>
                                Registered Agent Service
                            </Typography>
                            <Typography fontWeight={600}>
                                $99
                            </Typography>
                        </Box>
                        <ul className='list-disc px-10'>
                            <li>
                                Fee to appoint Registered Agent to handle necessary govenrment, tax and lefal correspondance about your buisiness
                            </li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item lg={6}>

                    <Paper variant='outlined' sx={{ height: '100%' }}>
                        <Box sx={{ bgcolor: 'lightblue', color: 'blue', p: 1, fontWeight: 600 }}>
                            Order History
                        </Box>
                        <Stepper activeStep={2} orientation="vertical" sx={{ p: 2 }} >
                            <Step>
                                <StepLabel >
                                    <Typography sx={{ display: 'flex', justifyContent: 'space-between' }} fontWeight={600}>Order Created <span>Mar 26 2024</span></Typography>
                                </StepLabel>
                                <Box sx={{ mt: 1, mb: 2 }}>
                                    <Typography>
                                        Processed by <span className="text-blue-500">Customer_name</span>
                                    </Typography>
                                </Box>
                            </Step>

                            <Step>
                                <StepLabel>
                                    <Typography fontWeight={600} sx={{ display: 'flex', justifyContent: 'space-between' }}>At State <span>Mar 26 2024</span></Typography>
                                </StepLabel>
                                <Box sx={{ mt: 1, mb: 2 }}>
                                    <Typography >
                                        Processed by <span className="text-blue-500">State_Member</span>
                                    </Typography>
                                    <Typography>
                                        The prepared filing has been submitted to the appropriate state or government.
                                    </Typography>
                                </Box>
                            </Step>
                        </Stepper>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default OrderDetailsTab