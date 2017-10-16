import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Login from '/imports/ui/pages/user/Login.jsx';
import Register from '/imports/ui/pages/user/Register.jsx';
import PostList from '/imports/ui/pages/post/PostList.jsx';
import PostCreate from '/imports/ui/pages/post/PostCreate.jsx';
import PostEdit from '/imports/ui/pages/post/PostEdit.jsx';
route('/', Home);
route('/register', Register);
route('/login', Login);
route('/post/list', PostList);
route('/post/create', PostCreate);
route('/post/edit/:_id', PostEdit)