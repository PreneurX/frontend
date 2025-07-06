import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/Context';
import Studentnav from '../Component/Studentnav';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Leaders() {
  const { user } = useAuth();
  const [leaders, setLeaders] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  // Show intro animation for 2.5 seconds
  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(introTimer);
  }, []);

  // Fetch leaderboard data
  useEffect(() => {
    if (!user || !user.school || !user.classLevel) return;

    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(
          `https://backend-gpe5.onrender.com/api/student/class-clash/${user.school}/${user.classLevel}`
        );

        const sorted = res.data
          .map((post) => ({
            id: post._id,
            name: post.studentId.name,
            profilePic: post.studentId.profilePic,
            votes: post.voteCount || 0,
            superVotes: post.superVoteCount || 0,
            finalScore: (post.voteCount || 0) + (post.superVoteCount || 0) * 5,
          }))
          .sort((a, b) => b.finalScore - a.finalScore);

        setLeaders(sorted);
      } catch (err) {
        console.error('Error loading leaderboard:', err);
      }
    };

    fetchLeaderboard();
  }, [user]);

  // Intro animation screen
  if (showIntro) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <DotLottieReact
          src="https://lottie.host/e382ba8e-e4cf-4b69-95a5-19cc072edd4c/lkNxjwfPRz.lottie"
          autoplay
          loop
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '500px',
            maxHeight: '500px',
          }}
        />
      </div>
    );
  }

  // Leaderboard table
  return (
    <>
      <Studentnav />
      <div className="max-w-4xl mx-auto px-4 py-6 animate-fade-in">
        <table className="w-full border rounded-lg overflow-hidden shadow">
          <thead className="bg-[#083ca0] text-white">
            <tr>
              <th className="p-2">Rank</th>
              <th className="p-2">Name</th>
              <th className="p-2">Votes</th>
              <th className="p-2">Super Votes</th>
              <th className="p-2">Final Points</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {leaders.map((student, index) => (
              <tr key={student.id} className="text-center border-t">
                {/* Rank Column */}
                <td className="font-semibold">
                  {index === 0 ? (
                    <div className="w-[60px] h-[60px] mx-auto">
                      <DotLottieReact
                        src="https://lottie.host/cf9b31db-07ba-47c3-8bb7-13401b6544da/LUXIsc5vYU.lottie"
                        autoplay
                        loop
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  ) : index === 1 ? (
<span className="text-2xl">🥈</span>
                  ) : index === 2 ? (
<span className="text-2xl">🥉</span>
                  ) : (
                    index + 1
                  )}
                </td>

                {/* Name + Profile */}
                <td className="p-2 flex items-center justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={student.profilePic}
                      alt={student.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{student.name}</span>
                  </div>
                </td>

                {/* Votes */}
                <td className="p-2">{student.votes}</td>
                <td className="p-2">{student.superVotes}</td>
                <td className="p-2 font-bold text-[#083ca0]">
                  {student.finalScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaders;
