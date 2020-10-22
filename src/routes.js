import home from './components/home.vue'
import about from './components/about.vue'
import projects from './components/projects.vue'


export default [
    {
        path : '/', component:home
        
    },
    {
        path : '/about', component:about
    },
    {
        path : '/projects', component:projects
    }
]