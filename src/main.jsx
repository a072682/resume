import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';//css檔案
import 'bootstrap/dist/js/bootstrap.js';//js檔案
import { RouterProvider } from 'react-router-dom';
import router from './router'
import { Provider } from 'react-redux'// Provider為需要引入的插件
import { store } from './store.js'// store為引入的store.js
import './assets/styles/all.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
