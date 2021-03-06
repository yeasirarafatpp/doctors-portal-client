import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleBookingClose, booking, date }) => {
    const { name, time, space } = booking;
    const handleBookSubmit = e => {
        alert('Form Submitted');
        // Taking Data
        handleBookingClose();
        e.preventDefault();
    }
    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleBookingClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Email"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button onClick={handleBookSubmit} type="submit" variant="contained">SEND</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;