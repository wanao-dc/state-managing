import React, { useState, useMemo, memo } from 'react';
import './App.css';
import Dashboard from './components/Dasboard';
import Sidebar from './components/Sidebar';
import SearchField from './components/SearchField';

function App() {
  const user = useMemo(() => ({ name: 'Seb' }), []);
  const [searchTerm, setSearchTerm] = useState(user.name);

  const handleOnChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm.target.value);
  };

  console.log('rendering App');
  const PureDashboard = memo(Dashboard, () => false);

  return (
    <div className="App">
      <Sidebar>
        <SearchField
          user={user}
          searchTerm={searchTerm}
          onChange={handleOnChange}
        />
      </Sidebar>
      {/* composant estimé comme lourd */}
      <PureDashboard user={user} />
    </div>
  );
}

export default App;
