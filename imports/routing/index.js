import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Login from '/imports/ui/pages/user/Login.jsx';
import Register from '/imports/ui/pages/user/Register.jsx'
import Posts from '/imports/ui/pages/user/Posts';
route('/', Home);
route('/register', Register);
route('/login', Login);
route('/post/list', Posts);