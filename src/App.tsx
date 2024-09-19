
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Trending from './Trending';
import Subscriptions from './Subscriptions';
import All from './All';
import Live from './Live';
import ReactTutorial from './ReactTutorial';
import Music from './Music';
import TSeries from './TSeries';
import Mixed from './Mixed';
import Video from './Video';
import NewToYou from './NewToYou';
import DataStructure from './DataStructure';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/all" element={<All />} />
        <Route path="/live" element={<Live />} />
        <Route path="/react-tutorial" element={<ReactTutorial />} />
        <Route path="/music" element={<Music />} />
        <Route path="/T-Series" element={<TSeries />} />
        <Route path="/data-structure" element={<DataStructure />} />
        <Route path="/mixed" element={<Mixed />} />
        <Route path="/video" element={<Video />} />
        <Route path="/new-to-you" element={<NewToYou />} />
      </Routes>
    </Router>
  );
};

export default App;

