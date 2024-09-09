
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PaginaInicial from './components/PaginaInicial/PaginaInicial.tsx'
import CadastroVeiculo from './components/CadastroVeiculo/CadastroVeiculo.tsx'
import App from './App' // Adicione o import do App se necessário
import Cadastro from './components/Cadastro/Cadastro.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Erro from './components/Error/Erro.tsx'
import Manutencao from './components/Manutenção/Manutencao.tsx'
import Login from './components/Login/Login.tsx'

 // Adicione o import do componente Error se necessário

const rotas = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Erro />, children: [
      { path: "/", element: <PaginaInicial /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/login", element: <Login/> },
      { path: "/cadastroVeiculo", element: <CadastroVeiculo /> },
      { path:"/manutencao", element:<Manutencao/> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)
