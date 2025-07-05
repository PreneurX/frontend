import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/Context';
import Studentnav from '../Component/Studentnav';
import Loading from '../Component/Loading';

function Leaders() {
  const { user } = useAuth();
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (err) {
        console.error('Error loading leaderboard:', err);
      }
    };

    fetchLeaderboard();
  }, [user]);

  if (loading) return <Loading />;

  return (
    <>
      <Studentnav />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#083ca0] to-black bg-clip-text text-transparent">
          📊 Class Clash Leaderboard
        </h1>
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
                <td className="p-2 font-semibold">{index + 1}</td>
                <td className="p-2 flex items-center justify-center gap-2">
                  <img
                    src={student.profilePic}
                    alt={student.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{student.name}</span>
                </td>
                <td className="p-2">{student.votes}</td>
                <td className="p-2">{student.superVotes}</td>
                <td className="p-2 font-bold text-[#083ca0]">{student.finalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaders;
