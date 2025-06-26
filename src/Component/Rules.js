import React from "react";

const Rules = () => {
  return (
    <div className="bg-gradient-to-br from-[#083ca0] to-black text-white p-6 sm:p-10 font-['Plus Jakarta Sans']">
      <section className="bg-white py-2 rounded-2xl shadow-lg">
        <header className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#083ca0]">
            📜PreneurX Talent Clash <br /> Rules & Format
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-black">
            Unleashing Young Stars of the District
          </p>
        </header>
      </section>

      <br />

      <main className="max-w-5xl mx-auto space-y-8">
        {/* General Rules */}
        <section className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#083ca0] mb-4 border-l-4 border-[#083ca0] pl-3">
            General Rules
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Participation is limited to students from the top five schools in
              the district, as determined by our organizing committee.
            </li>
            <li>
              <strong>Two categories:</strong>
              <ol className="list-decimal pl-6">
                <li>
                  <strong>JUNIOR BLAZERS</strong> (Classes 7-8)
                </li>
                <li>
                  <strong>SENIOR CHAMPIONS</strong> (Classes 9-10)
                </li>
              </ol>
            </li>
            <li>
              All participants are required to register through their schools
              before the deadline. Credentials will be provided by the school
              administration.
            </li>
            <li>
              All participants can vote for contestants in all rounds,
              including the final.
            </li>
            <li>Participants cannot vote for themselves at any stage.</li>
            <li>
              Each <strong>Super Vote</strong> = <strong>5 regular Votes</strong>.
            </li>
            <li>
              All participants receive a <strong>Certificate of Participation</strong> and a detailed performance report.
            </li>
            <li>Inappropriate content leads to disqualification.</li>
          </ul>
        </section>

        {/* Voting Rules */}
        <section className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#083ca0] mb-4 border-l-4 border-[#083ca0] pl-3">
            Voting Rules (Round-wise)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#083ca0] mb-2">
                🌀 Round 1 – Class Clash
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students vote within their own class.</li>
                <li>1 vote + 1 super vote per student.</li>
                <li>Teachers get 5 votes (1 per student).</li>
                <li>Top 50% from each class proceed to Round 2.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#083ca0] mb-2">
                🏫 Round 2 – School Showdown
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Top 50% from each class move to school-level round.</li>
                <li>Same voting rules apply as Round 1.</li>
                <li>Top 20 from each category in each school qualify for Finale.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#083ca0] mb-2">
                🏆 Round 3 – The Grand Finale
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>100 students (20 per school from 5 schools) compete.</li>
                <li>Voting is open to all schools.</li>
                <li>Students & teachers can vote for any finalist.</li>
                <li>Top 3 crowned as “The Ultimate Talent Star 2025”.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disqualification Terms */}
        <section className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#083ca0] mb-4 border-l-4 border-[#083ca0] pl-3">
            Disqualification Terms
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Faking votes or manipulation = Disqualification.</li>
            <li>Offensive content in any form is prohibited.</li>
            <li>Organizers reserve right to disqualify on valid grounds.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Rules;
