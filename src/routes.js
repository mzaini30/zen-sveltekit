import { lazy } from 'solid-js'

const index = lazy(() => import('/src/pages/index.jsx'))

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
]
