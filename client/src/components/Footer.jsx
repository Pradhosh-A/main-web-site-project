import React from 'react';
import { MapPin, Phone, Mail, Globe, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-container" style={{
      backgroundColor: '#0a0a0a',
      color: '#d0d0d0',
      padding: '4rem 2rem 2rem',
      borderTop: '2px solid #e25822',
      marginTop: 'auto'
    }}>
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingBottom: '3rem',
        borderBottom: '1px solid #333'
      }}>
        
        {/* Head Office Section */}
        <div className="footer-col">
          <h3 style={{ color: '#e25822', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Head Office :</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <MapPin size={20} color="#e25822" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                116-B, 5th street extension,<br />
                Gandhipuram, Coimbatore - 641 012.
              </div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
              <Phone size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>0422 4342244, 09489342244</div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem', alignItems: 'center' }}>
              <Mail size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>aqcmetfab@gmail.com</div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
              <Mail size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>metalfab@aqcinspection.com</div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem', alignItems: 'center' }}>
              <Globe size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>www.aqcinspection.com</div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
              <Globe size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>www.metalfab.aqcinspection.com</div>
            </li>
          </ul>
        </div>

        {/* Factory Address Section */}
        <div className="footer-col">
          <h3 style={{ color: '#e25822', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Factory Address :</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <MapPin size={20} color="#e25822" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                Site No. 62, 63, Sidhik Nagar,<br />
                Idikarai, Coimbatore - 641 022
              </div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '2rem', alignItems: 'center' }}>
              <Phone size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>08668082413, 09944474341</div>
            </li>
          </ul>

          <h3 style={{ color: '#e25822', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Key Persons Contact :</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'flex-start' }}>
              <User size={20} color="#e25822" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <strong>Managing Director :</strong><br />
                C.Vigneshwaran B.E,<br />
                Mobile: +91 86680 82413
              </div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
              <Phone size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>
                <strong>Sales & Accounts Manager:</strong> +91 9600640894
              </div>
            </li>
            <li style={{ display: 'flex', gap: '10px', marginBottom: '1rem', alignItems: 'center' }}>
              <Phone size={20} color="#e25822" style={{ flexShrink: 0 }} />
              <div>
                <strong>Human Resource:</strong> +91422 4342244
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
