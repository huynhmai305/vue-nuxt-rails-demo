import ListNew from './components/ListNew'
import ListInprogress from './components/ListInprogress'
import ListDone from './components/ListDone'

const routes = [
    {
        path: '/listNew',
        name: 'ListNew',
        component: ListNew
    },
    {
        path: '/listInprogress',
        name: 'ListInprogress',
        component: ListInprogress
    },
    {
        path: '/listDone',
        name: 'ListDone',
        component: ListDone
    },
]

export default routes;
