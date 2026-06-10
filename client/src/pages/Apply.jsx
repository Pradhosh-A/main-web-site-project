import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, FileUp, Send } from 'lucide-react';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    altPhone: '',
    address: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a production environment, this would call a secure backend or Email API
    console.log('Sending application to: pradhosha24@gmail.com');
    console.log('Application Data:', formData);
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page apply-page glass" style={{ padding: '4rem', textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ color: '#e25822', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Application Sent!</h2>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '1rem' }}>
          Your application has been successfully sent to <strong>pradhosha24@gmail.com</strong>.
        </p>
        <p style={{ fontSize: '1rem', color: '#888' }}>
          Our HR team will review your profile and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="page apply-page" style={{ padding: '3rem 1rem' }}>
      <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Join Our Team</h2>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#ccc', fontSize: '1.1rem' }}>
        Please fill out the form below to apply for a position at AQC Metal Fab Corporation.
      </p>

      <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', borderRadius: '15px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#e25822', fontWeight: 'bold' }}>
              <User size={18} style={{ marginRight: '8px' }} /> Full Name
            </label>
            <input 
              type="text" 
              required
              placeholder="Enter your full name"
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#e25822', fontWeight: 'bold' }}>
              <Mail size={18} style={{ marginRight: '8px' }} /> Email Address
            </label>
            <input 
              type="email" 
              required
              placeholder="Enter your email"
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#e25822', fontWeight: 'bold' }}>
                <Phone size={18} style={{ marginRight: '8px' }} /> Phone (WhatsApp)
              </label>
              <input 
                type="tel" 
                required
                placeholder="WhatsApp number"
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#e25822', fontWeight: 'bold' }}>
                <Phone size={18} style={{ marginRight: '8px' }} /> Alternate Contact
              </label>
              <input 
                type="tel" 
                placeholder="Secondary phone"
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                onChange={(e) => setFormData({...formData, altPhone: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#e25822', fontWeight: 'bold' }}>
              <MapPin size={18} style={{ marginRight: '8px' }} /> Address
            </label>
            <textarea 
              required
              placeholder="Your current address"
              rows={3}
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: '#fff', resize: 'vertical' }}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            ></textarea>
          </div>

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#e25822', fontWeight: 'bold' }}>
              <FileUp size={18} style={{ marginRight: '8px' }} /> Upload Resume (PDF)
            </label>
            <input 
              type="file" 
              required
              accept=".pdf"
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
              onChange={(e) => setFormData({...formData, resume: e.target.files ? e.target.files[0] : null})}
            />
          </div>

          <button 
            type="submit"
            style={{
              marginTop: '1rem',
              backgroundColor: '#e25822',
              color: '#fff',
              border: 'none',
              padding: '1rem',
              fontSize: '1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(226, 88, 34, 0.4)'
            }}
          >
            <Send size={20} /> Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
