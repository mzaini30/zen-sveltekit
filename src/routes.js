import { lazy } from 'solid-js'

const index = lazy(() => import('/src/pages/index.jsx'))
const tulis_index = lazy(() => import('/src/pages/tulis/index.jsx'))

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'tulis',
    path: '/tulis',
    component: tulis_index,
  },
]
