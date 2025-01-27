import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
]);

function App() {
  return (
    <RouterProvider 
      router={router} 
      future={{
        v7_relativeSplatPath: true, // Per le rotte relative negli splat
        v7_startTransition: true,  // Per il wrapping di React.startTransition
      }} 
    />
  );
}

export default App;
