import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom display="block">
                        {space} Space Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                open={open}
                date={date}
            ></BookingModal>
        </>
    );
};

export default Bookings;