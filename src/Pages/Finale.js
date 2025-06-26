import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import { useAuth } from '../Context/Context';
import axios from 'axios';
import Studentnav from '../Component/Studentnav';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

function Finale() {
  const { user } = useAuth();
  const [width, setWidth] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [expandedEntries, setExpandedEntries] = useState({});
  const [myPostId, setMyPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [votingOpen, setVotingOpen] = useState(false);
  const [userVotes, setUserVotes] = useState({ votePostId: null, superVotePostId: null });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user || !user.school) return;

        const [postsRes, roundRes, voteRes] = await Promise.all([
          axios.get(`https://backend-gpe5.onrender.com/api/student/finale-posts`),
          axios.get(`https://backend-gpe5.onrender.com/api/rounds/school/${user.school}`),
          axios.get(`https://backend-gpe5.onrender.com/api/student/vote-status/${user._id}/3`)
        ]);

        setPosts(postsRes.data);
        const myPost = postsRes.data.find(p => p.studentId._id === user._id);
        if (myPost) setMyPostId(myPost._id);

        setVotingOpen(roundRes.data.finale.votingOpen);
        setUserVotes(voteRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching finale data:", err);
      }
    };

    fetchData();
  }, [user]);

  const vote = async (postId, type) => {
    if (userVotes.votePostId === postId && type === 'super-vote') {
      return alert("You can't super vote the same post you voted for.");
    }
    if (userVotes.superVotePostId === postId && type === 'vote') {
      return alert("You can't vote the same post you super voted for.");
    }

    try {
      await axios.post(`https://backend-gpe5.onrender.com/api/student/${type}`, {
        postId,
        studentId: user._id,
        round: 3
      });

      setPosts(prev =>
        prev.map(p =>
          p._id === postId
            ? {
              ...p,
              voteCount: type === "vote" ? p.voteCount + 1 : p.voteCount,
              superVoteCount: type === "super-vote" ? p.superVoteCount + 1 : p.superVoteCount,
            }
            : p
        )
      );

      setUserVotes(prev => ({
        ...prev,
        votePostId: type === "vote" ? postId : prev.votePostId,
        superVotePostId: type === "super-vote" ? postId : prev.superVotePostId,
      }));
    } catch (err) {
      alert("Error casting vote");
    }
  };

  const toggleEntry = (id) => {
    setExpandedEntries(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const maxLength = 150;
  const filteredStudents = posts.filter(student =>
    student.studentId.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p><Loading /></p>;

  if (!votingOpen) return (
    <>
      <Studentnav />
      <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'red', marginTop: 30 }}>
        Round not active
      </p>
    </>
  );

  return (
    <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', background: '#f5f8fa', color: '#333', margin: 0 }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
        <img src={logo} alt="Company Logo" className="logo" />
        <div style={{ position: 'relative', flex: 1, maxWidth: `${50 * width / 100}px` }}>
          <img src={search} alt="logo" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', height: '20px', width: '20px' }} />
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
              backgroundSize: '18px 18px',
              width: '100%',
            }}
          />
        </div>
      </header>

      <hr />

      <div className="navbar1" style={{ background: '#f5f8fa', margin: '0px', padding: '0px' }}>
        <div className="nav-links1">
          <Link to="/dashboard">Home</Link>
          <Link to="/classclash">Class Clash</Link>
          <Link to="/round2">School Showdown</Link>
          <Link to="/finale">PreneurX Talent Clash</Link>
          <Link to="/rules">Rules</Link>
        </div>
      </div>
      {/* <Studentnav /> */}
      <hr />

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: 0 }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 700, background: 'linear-gradient(to right, #083ca0, black)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          FINALE<br />PreneurX Talent Clash
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1rem', marginBottom: 16 }}>Vote for your ultimate favorite! The top talent wins it all.</p>

        <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', margin: '10px', gap: '20px' }}>
          {filteredStudents.map(post => {
            const isLong = post.content.length > maxLength;
            const shortText = post.content.slice(0, maxLength) + '...';
            const isExpanded = expandedEntries[post._id];
            const isMyPost = post._id === myPostId;

            return (
              <div key={post._id} style={{ background: 'white', padding: 15, borderRadius: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'flex-start', gap: '12px', margin: '20px' }}>
                <img src={post.studentId.profilePic} alt={post.studentId.name} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: 18, background: 'linear-gradient(to right, #083ca0, black)', WebkitBackgroundClip: 'text', color: 'transparent', marginBottom: '-6px' }}>{post.studentId.name}</h3>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 200, color: '#515151' }}>{post.studentId.school}</p>
                  <p style={{ fontSize: '0.85rem', marginTop: 8, color: 'black', lineHeight: 1.4 }}>
                    {isLong ? (isExpanded ? post.content : shortText) : post.content}
                    {isLong && (
                      <span onClick={() => toggleEntry(post._id)} style={{ color: '#083ca0', fontWeight: 600, cursor: 'pointer', marginLeft: 5 }}>
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </span>
                    )}
                  </p>
                  {!isMyPost && (
                    <>
                      <button
                        onClick={() => vote(post._id, 'vote')}
                        disabled={
                          !votingOpen ||
                          userVotes.votePostId !== null ||
                          userVotes.superVotePostId === post._id
                        }
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
                        onClick={() => vote(post._id, 'super-vote')}
                        disabled={
                          !votingOpen ||
                          userVotes.superVotePostId !== null ||
                          userVotes.votePostId === post._id
                        }
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
                    </>
                  )}
                  {isMyPost && <p style={{ fontWeight: 600, color: '#777' }}>(Your Post)</p>}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Finale;
