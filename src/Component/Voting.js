import React, { useState } from 'react';
import Logo from './Logo';

function Voting() {
    const [searchTerm, setSearchTerm] = useState('');
  const [students] = useState([
    { id: 1, name: 'Mukund Madhav Tiwari', school: 'Jeevan Marg Sophia Secondary School', image: 'photo.jpeg', entry: 'I am passionate about creating new ideas that inspire my classmates!'.repeat(50) },
    { id: 2, name: 'Piyush Kumar Mishra', school: 'Jeevan Marg Sophia Secondary School', image: 'piyush.jpg', entry: 'Vote for me to make school events more fun and engaging!' },
    { id: 3, name: 'Ayush Kumar Mishra', school: 'Jeevan Marg Sophia Secondary School', image: 'student3.jpg', entry: 'I believe in teamwork and helping everyone grow.' },
    { id: 4, name: 'Aditya Raj Srivastav', school: 'Jeevan Marg Sophia Secondary School', image: 'gori.png', entry: 'Let’s make our school the best with innovative ideas!' },
    { id: 6, name: 'Aryan Sharma', school: 'Jeevan Marg Sophia Secondary School', image: 'student1.jpg', entry: 'I want to represent our class with honesty and dedication.' },
    { id: 7, name: 'Ishika Verma', school: 'Jeevan Marg Sophia Secondary School', image: 'student2.jpg', entry: 'I aim to bring creativity and energy to every project.' },
    { id: 8, name: 'Raghav Singh', school: 'Jeevan Marg Sophia Secondary School', image: 'student3.jpg', entry: 'Support me for a vibrant and fun school community!' },
    { id: 9, name: 'Priya Gupta', school: 'Jeevan Marg Sophia Secondary School', image: 'student4.jpg', entry: 'Let’s make learning fun with new ideas and projects!' },
  ]);

  const [expandedEntries, setExpandedEntries] = useState({});

  const toggleEntry = (id) => {
    setExpandedEntries(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const vote = (studentId, type) => {
    alert(`${type === 'vote' ? 'Voted' : 'Super Voted'} for student ID: ${studentId}`);
  };

  const maxLength = 150;
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', background: '#f5f8fa', color: '#333', margin: 0 }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
<Logo/>        <div style={{ position: 'relative', flex: 1, maxWidth: 600 }}>
          <input
            type="text"
            placeholder="Search Preneurs"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '6px 1px 5px 35px',
              border: '2px solid',
              borderImage: 'linear-gradient(to right, #083ca0, black) 1',
              borderRadius: '5px',
              fontSize: '15px',
              background: 'url(search.png) no-repeat left 10px center',
              backgroundSize: '18px 18px',
              width: '100%'
            }}
          />
        </div>
      </header>

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: 0 }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, background: 'linear-gradient(to right, #083ca0, black)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          ROUND-1<br />Class Clash
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1rem', marginBottom: 16 }}>Vote for your favorite classmate! Top 50% advance to the next round.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', margin: '0 15px', gap: '20px' }}>
          {filteredStudents.map(student => {
            const isLong = student.entry.length > maxLength;
            const shortText = student.entry.slice(0, maxLength) + '...';
            const isExpanded = expandedEntries[student.id];

            return (
              <div key={student.id} style={{ background: 'white', padding: 15, borderRadius: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <img src={student.image} alt={student.name} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: 18, background: 'linear-gradient(to right, #083ca0, black)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{student.name}</h3>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 200, color: '#515151' }}>{student.school}</p>
                  <p style={{ fontSize: '0.85rem', marginTop: 8, color: 'black', lineHeight: 1.4, fontFamily: 'Letter Mono Variable, monospace', fontWeight: 100 }}>
                    {isLong ? (isExpanded ? student.entry : shortText) : student.entry}
                    {isLong && (
                      <span
                        onClick={() => toggleEntry(student.id)}
                        style={{ color: '#083ca0', fontWeight: 600, cursor: 'pointer', marginLeft: 5 }}
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => vote(student.id, 'vote')}
                    style={{
                      background: 'linear-gradient(to right, #083ca0, black)',
                      color: 'white',
                      marginRight: 5,
                      padding: '6px 12px',
                      border: 'none',
                      borderRadius: 5,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >Vote</button>
                  <button
                    onClick={() => vote(student.id, 'super')}
                    style={{
                      background: 'linear-gradient(to right, rgb(219, 107, 28), orange)',
                      color: 'white',
                      padding: '6px 12px',
                      border: 'none',
                      borderRadius: 5,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >Super Vote</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
  
}

export default Voting