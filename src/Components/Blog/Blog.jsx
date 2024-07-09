import React from 'react';
import './Blog.css'
const Blog = ({details}) => {
    return (
        <div >
            <h2 className='text-center'>This is Blog Section</h2>
            {details}
           <div className='div'>
           <section>
            <p>1.Why should we use Context API?</p>
            <p><span>Answer:</span>Use it only when we need to share state between lot's of components with a lot of nesting.Context provides a way to pass data through the component tree without having to pass props down manually at every level.
            The Context API should be used in React for efficiently managing and sharing state across multiple components without prop drilling, simplifying global state management, improving code readability, decoupling components, and optimizing performance by avoiding unnecessary re-renders.
             </p>
            </section>
            <section>
            <p>2.What us custom hook?</p>
            <p><span>Answer:</span>Hooks are reusable functions.When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.Custom Hooks start with "use". Example: useFetch.</p>
            </section>
            <section><p>3.What is useRef?</p>
            <p><span>Answer:</span>useRef is often used to directly access a DOM element in your JSX. This is useful for things like focusing on an input field upon a component mounting. Storing Mutable Data: It allows you to store data that persists across renders but doesn't cause a re-render when updated, unlike useState .</p></section>
            <section>
            <p>4.What is useMemo?</p>
            <p><span>Answer:</span>useMemo is a valuable tool in the React framework, designed to optimize performance by memoizing expensive computations. With useMemo , React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.</p>
            </section>
            
           </div>
            
           

        </div>
    );
};

export default Blog;