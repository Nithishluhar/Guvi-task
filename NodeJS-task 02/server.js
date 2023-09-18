const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

let rooms = [{
  room_id: 1,
  room_name: " Room A",
  seats_available: 5,
  amenities: ["Projector", "Whiteboard", "WiFi"],
  price_per_hour: 200
}, {
  room_id: 2,
  room_name: " Room B",
  seats_available: 5,
  amenities: ["Projector", "Whiteboard", "WiFi"],
  price_per_hour: 200
}, {
  room_id: 3,
  room_name: " Room C",
  seats_available: 5,
  amenities: ["Projector", "Whiteboard", "WiFi"],
  price_per_hour: 200
}];
let bookings = [{
  booking_id: 101,
  customer_name: "John Doe",
  room_id: 1,
  date: "2023-09-20",
  start_time: "14:00",
  end_time: "16:00"
},
{
  booking_id: 102,
  customer_name: "Nivek",
  room_id: 2,
  date: "2023-09-23",
  start_time: "24:00",
  end_time: "13:00"
}];



// 1. Creating a Room
app.post('/rooms', (req, res) => {
  const { seats_available, amenities, price_per_hour, room_name } = req.body;
  const room = {
    room_id: rooms.length + 1,
    room_name,
    seats_available,
    amenities,
    price_per_hour,
  };

  if (!room.room_name || !room.seats_available || !room.amenities || !room.price_per_hour) {
    return res.status(500).send("Please provide all the required fields ")
  }
  rooms.push(room);
  res.status(201).send({ message: `Room  created successfully room name: ${room.room_name}` });
})


// 2. Booking a Room
app.post('/bookings', (req, res) => {
  const { customer_name, date, start_time, end_time, room_id } = req.body;
  const room = rooms.findIndex((r) => r.room_id === room_id);

  if (!room) {
    return res.status(404).json({ error: 'Room was not available' });
  }
  const booking = {
    booking_id: bookings.length + 103,
    customer_name,
    date,
    start_time,
    end_time,
    room_id,
  };
  if (!booking.customer_name || !booking.date || !booking.start_time || !booking.end_time || !booking.booking_id) {
    return res.status(500).send("Please provide all the required fields ")
  }
  bookings.push(booking);
  res.status(201).json(booking);
});

// 3. List all Rooms with Booked Data  

app.get('/rooms/booked', (req, res) => {
  const roomBooking = rooms.map((room) => {
    const booking = bookings.find((item) => item.room_id === room.room_id);
    return {
      room_name: ` ${room.room_name}`,
      booked_status: booking ? " Full" : "Not full",
      customer_name: booking ? booking.customer_name : null,
      date: booking ? booking.date : null,
      start_time: booking ? booking.start_time : null,
      end_time: booking ? booking.end_time : null,
    };
    // ...room , Available : !!booking}
  })
  res.status(200).json(roomBooking);
})


// 4. List all Customers with Booked Data
app.get('/customers/booked', (req, res) => {
  const customerBookings = bookings.map((booking) => {
    const room = rooms.find((r) => r.room_id === booking.room_id);
    return {
      customer_name: booking.customer_name,
      room_name: `Room ${room.room_name}`,
      date: booking.date,
      start_time: booking.start_time,
      end_time: booking.end_time,
    };
  });
  res.status(200).json(customerBookings);
});

// 5. List how many times a customer booked a room
app.get('/customers/:customerName/booked', (req, res) => {
  const { customerName } = req.params;
  const customerDetails = bookings
    .filter((booking) => (booking.customer_name === customerName))
    .map((booking) => {
      const room = rooms.find((r) => r.room_id === booking.room_id)
      return {
        customer_name: booking.customer_name,
        room_name: `${room.room_name}`,
        Date: booking.date,
        start_time: booking.start_time,
        end_time: booking.end_time,
        booked_status: booking ? "room booked" : "Not booked",
        booking_id: booking.booking_id,
      }
    })

  const find = customerDetails.findIndex((r) => r.customer_name === customerName)

  if (find) {
    return res.status(500).json({ error: 'customer name is not  registered' });
  }

  res.status(200).json(customerDetails);

})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
