import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ChooseWay } from './screens/ChooseWay.tsx';
import { Mine } from './screens/Mine.tsx';
import { Ref } from './screens/Ref.tsx';
import { Tasks } from './screens/Tasks.tsx';
import { Boost } from './screens/Boost.tsx';
import { Stats } from './screens/Stats.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<ChooseWay />}/>
        <Route path='/clicker' element={<App />} >
          <Route index element={<Mine />} />
          <Route path='/clicker/ref' element={<Ref />} />
          <Route path='/clicker/tasks' element={<Tasks />} />
          <Route path='/clicker/boost' element={<Boost />} />
          <Route path='/clicker/stats' element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
