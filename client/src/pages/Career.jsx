import React from 'react';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Career() {
  const jobs = [
    {
      id: 1,
      title: 'Human Resources (HR) Manager',
      education: 'MBA Completed required',
      experience: '10 Years of Experience strongly preferred',
      description: 'We are seeking an experienced, dynamic HR professional to lead our human resources department. You will be responsible for overseeing all HR operations, employee relations, recruitment, and ensuring our culture aligns with our promise of quality.'
    }
  ];

  return (
    <div className="page career-page" style={{ padding: '3rem 1rem' }}>
      <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Career Opportunities</h2>
      <p style={{ textAlign: 'center', marginBottom: '4rem', color: '#ccc', fontSize: '1.2rem' }}>
        Join AQC Metal Fab Corporation and build a career centered around quality.
      </p>

      <div className="jobs-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {jobs.map(job => (
          <div key={job.id} className="job-card glass" style={{ padding: '2.5rem', marginBottom: '2rem', borderRadius: '12px', borderLeft: '5px solid #e25822' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Briefcase size={28} color="#e25822" style={{ marginRight: '15px' }} />
              <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: 0 }}>{job.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#e25822', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <GraduationCap size={20} style={{ marginRight: '8px' }} /> {job.education}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', color: '#e25822', fontSize: '1.1rem', fontWeight: 'bold' }}>
                <Clock size={20} style={{ marginRight: '8px' }} /> {job.experience}
              </div>
            </div>

            <p style={{ color: '#d0d0d0', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
              {job.description}
            </p>

            <div style={{ textAlign: 'right' }}>
              <Link to="/apply">
                <button style={{
                  backgroundColor: '#e25822',
                  color: '#fff',
                  border: 'none',
                  padding: '0.8rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(226, 88, 34, 0.3)'
                }}>
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
