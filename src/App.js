import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utlis/store/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';

function App() {
  const Approuter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={Approuter}></RouterProvider>
    </Provider>
  );
}

export default App;
