
import React from 'react';
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import Schema from './schemas/Schemas.js';

// const MySimpleForm = () => (
//     <AutoForm
//         schema={Schema}
//         // onSubmit={(data) => /* handle data when form is submitted */}
//     />
// );

const PostForm = () =>
    <AutoForm schema={Schema} />
;
export default PostForm();