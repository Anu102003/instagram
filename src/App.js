import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './database/sideSearchStore';
import { persistor } from './database/sideSearchStore';
import RouterPage from './Router';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <RouterPage/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import RouterPage from './Router';
// import './App.css';
// import Demo from './Demo';
// import SomeComponent from './database/SomeComponent';

// function App() {
//   // const items = [1, 12, 3, 14, 5,16, 7, 18, 9, 10];
//   // const active = 0;
//   return (
//     <>
//       {/* <RouterPage/> */}
//       <SomeComponent/>
//       {/* <h1>Carousel Demo</h1>
//       <Demo items={items} active={active} /> */}
//     </>
//   )
// }
// export default App;