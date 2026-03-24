/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Feed } from './pages/Feed';
import { Leaderboard } from './pages/Leaderboard';
import { Profile } from './pages/Profile';
import { RequestJoin } from './pages/RequestJoin';
import { GetVerified } from './pages/GetVerified';
import { SubmitPost } from './pages/SubmitPost';

import { LeaderboardSidebar } from './components/layout/LeaderboardSidebar';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white/20 flex justify-center">
        <Navbar />
        <main className="w-full sm:w-[600px] max-w-[600px] border-x border-white/10 min-h-screen pb-16 sm:pb-0">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/join" element={<RequestJoin />} />
            <Route path="/verified" element={<GetVerified />} />
            <Route path="/submit" element={<SubmitPost />} />
          </Routes>
        </main>
        <aside className="hidden lg:block w-[350px] pl-8 py-4">
          <div className="sticky top-4 space-y-4">
            <LeaderboardSidebar />
          </div>
        </aside>
      </div>
    </Router>
  );
}
