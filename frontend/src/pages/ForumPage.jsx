import { useState } from 'react';

const ForumPage = () => {
    const [forumThread, setForumThread] = useState({
        username: "",
        user_image: "",
    });

  return (
    <>
    <ForumThread>
        <FormPost>

        </FormPost>
    </ForumThread>
    <div>ForumPage</div>
    </>
  )
}

export default ForumPage;