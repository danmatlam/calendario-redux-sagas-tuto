import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Calendar from './components/calendar/Calendar';
import ReduxWrap from './redux/ReduxWrap';
function App() {
  return (
      <ReduxWrap>

        <Calendar />
        
      </ReduxWrap>
  );
}

export default App;


