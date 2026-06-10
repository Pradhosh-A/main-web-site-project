import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const capabilitiesData = [
    { id: 1, title: 'Pre engineered building structure & canopies', image: '/image/Pre fabricated Buildings.webp', description: 'Expertise in designing and erecting durable pre-engineered structures.' },
    { id: 2, title: 'Modular buildings', image: '/image/20ft-Office-smaller-1.0.webp', description: 'Flexible and efficient modular construction solutions.' },
    { id: 3, title: 'Tanks, Silos, Boilers & pressure vessels', image: '/image/Tank fabrication.webp', description: 'High-precision fabrication for industrial storage and pressure systems.' },
    { id: 4, title: 'Pipelines', image: '/image/Botling plant.webp', description: 'Specialized pipeline engineering and installation.' },
    { id: 5, title: 'Stairs, Racks & Gas Flare chimneys', image: '/image/SS Pipeline and tanks.webp', description: 'Custom metal work for industrial access and exhaust systems.' },
    { id: 6, title: 'Solar Module mounting structures', image: '/image/Solar Module mounting structres.webp', description: 'Robust mounting solutions for solar energy projects.' },
    { id: 7, title: 'Overlay / clad welded valves', image: '/image/Weld-Overlay-Image.webp', description: 'Advanced welding techniques for high-performance valves.' },
    { id: 8, title: 'High Integrity Machine Structures (Casting, Machined and Welded)', image: '/image/High Integrity Machine Structures.jpeg', description: 'Casting, machining, and welding for critical industrial machinery.' }
  ];

  return (
    <div className="page home-page">
      <section className="hero-section glass">
        <h1>Welcome to AQC Metal Fab Corporation</h1>
        <h2>A Promise of Quality</h2>
        <p>Your trusted partner in high-quality structural steel fabrication and engineering solutions.</p>
      </section>

      <section className="about-section glass" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
        <div className="about-content" style={{ flex: '1 1 60%', padding: '3rem' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#e25822', borderBottom: '2px solid #e25822', display: 'inline-block', paddingBottom: '0.5rem', fontSize: '2.5rem' }}>About Us</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#f5f5f5' }}>
            AQC - Advanced Quality Centre was established as a group of company in 2019, by engineers & experts with decades of experience in the field of Oil & Gas facilities fabrication and erection, in both India and Gulf countries.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#f5f5f5' }}>
            AQC METAL FAB CORPORATION are fine fabricator of steel, SS or aluminium products, with experience in producing high quality metal woks.
          </p>
          
          <div className="divisions" style={{ marginTop: '2rem' }}>
            <h3 style={{ color: '#e25822', marginBottom: '1rem', fontSize: '1.3rem' }}>The Group has the below divisions :</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', fontSize: '1.05rem', color: '#d0d0d0' }}>
                <CheckCircle2 style={{ color: '#999', width: '18px', height: '18px', marginRight: '10px' }} /> AQC - Non Destructive Testing laboratory
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', fontSize: '1.05rem', color: '#d0d0d0' }}>
                <CheckCircle2 style={{ color: '#999', width: '18px', height: '18px', marginRight: '10px' }} /> NDT & QC Training Institute
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', fontSize: '1.05rem', color: '#d0d0d0' }}>
                <CheckCircle2 style={{ color: '#999', width: '18px', height: '18px', marginRight: '10px' }} /> AQC Inspection Services
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', fontSize: '1.05rem', color: '#d0d0d0' }}>
                <CheckCircle2 style={{ color: '#999', width: '18px', height: '18px', marginRight: '10px' }} /> AQC School of Welding Excellence
              </li>
            </ul>
          </div>
        </div>
        <div style={{ flex: '1 1 40%', minHeight: '300px', backgroundColor: '#e25822', position: 'relative' }}>
          <img 
            src="/image/75875490902362023.jpg" 
            alt="About AQC" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.85' }} 
          />
        </div>
      </section>

      <section className="facilities-section glass" style={{ marginTop: '2rem', padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        <div className="facility">
          <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#e25822', borderBottom: '2px solid #e25822', display: 'inline-block', paddingBottom: '0.5rem', fontSize: '2rem' }}>
            Our Facility
          </h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> TIG , MIG, SAW and MMAW welding machines
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Gas cutting, gas welding, gouging and grinding machines
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Sheet and shaft bending machines
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Ultrasonic flaw detector, MPI Yokes, Penetrant test kits, Fluorescent lamps
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Hydro testing pumps and Gauges
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Spray painting facility, WFT, DFT Gauges
            </li>
          </ul>
        </div>

        <div className="highlights">
          <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', color: '#e25822', borderBottom: '2px solid #e25822', display: 'inline-block', paddingBottom: '0.5rem', fontSize: '2rem' }}>
            Our Highlights
          </h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Approved WPS & Qualified Welders for MS, SS & Overlay Alloys
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Inhouse NDT Facility , Ultrasonic Testing, Magnetic Particle Testing, Liquid Penetrant Testing.
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> ISO 9001: 2015 certified
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> CSWIP, TWI, UK certified welding Inspectors for Internal Inspections
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Inhouse Pressure Test Facility
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Experienced Erectors, Riggers, Fitters & Fabricators
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', fontSize: '1.1rem', color: '#f5f5f5' }}>
              <span style={{ color: '#e25822', marginRight: '10px', fontSize: '1.2rem' }}>•</span> Design team with decades of experience
            </li>
          </ul>
        </div>
      </section>

      <section className="career-preview glass" style={{ marginTop: '2rem', padding: '3rem' }}>
        <h3 style={{ fontSize: '2.5rem', color: '#e25822', marginBottom: '1rem', textAlign: 'center' }}>Our Product List</h3>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: '#ccc', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          Explore our product spanning structures, advanced modular buildings, tank fabrications, pipelines, and tailored solar mounting frames. 
        </p>
        
        <div className="career-grid">
          {capabilitiesData.map(item => (
            <div key={item.id} className="career-card glass">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
