import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
    ]);

    const handleDelete = (id) => { // avoid mutating original array
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className='home'>
            <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete} /> {/* reusable component with prop */}
        </div>
    );
}

export default Home;