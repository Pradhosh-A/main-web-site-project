const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data for Career section (using the categories provided by the user)
const careerData = [
  {
    id: 1,
    title: 'Pre engineered building structure & canopies',
    image: '/image/Pre fabricated Buildings.webp',
    description: 'Expertise in designing and erecting durable pre-engineered structures.'
  },
  {
    id: 2,
    title: 'Modular buildings',
    image: '/image/20ft-Office-smaller-1.0.webp',
    description: 'Flexible and efficient modular construction solutions.'
  },
  {
    id: 3,
    title: 'Tanks, Silos, Boilers & pressure vessels',
    image: '/image/Tank fabrication.webp',
    description: 'High-precision fabrication for industrial storage and pressure systems.'
  },
  {
    id: 4,
    title: 'Pipelines',
    image: '/image/Botling plant.webp',
    description: 'Specialized pipeline engineering and installation.'
  },
  {
    id: 5,
    title: 'Stairs, Racks & Gas Flare chimneys',
    image: '/image/SS Pipeline and tanks.webp',
    description: 'Custom metal work for industrial access and exhaust systems.'
  },
  {
    id: 6,
    title: 'Solar Module mounting structures',
    image: '/image/Solar Module mounting structres.webp',
    description: 'Robust mounting solutions for solar energy projects.'
  },
  {
    id: 7,
    title: 'Overlay / clad welded valves',
    image: '/image/Weld-Overlay-Image.webp',
    description: 'Advanced welding techniques for high-performance valves.'
  },
  {
    id: 8,
    title: 'High Integrity Machine Structures',
    image: '/image/High Integrity Machine Structures.jpeg',
    description: 'Casting, machining, and welding for critical industrial machinery.'
  }
];

app.get('/api/career', (req, res) => {
  res.json(careerData);
});

app.get('/api/vlogs', (req, res) => {
  res.json([
    { id: 1, title: 'Optimizing Metal Fabrication', date: '2024-05-20', thumbnail: '/api/vlog-1.jpg' },
    { id: 2, title: 'Safe Welding Practices', date: '2024-05-15', thumbnail: '/api/vlog-2.jpg' }
  ]);
});

app.get('/', (req, res) => {
  res.send('Aqc Metal Fab Corporation API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
