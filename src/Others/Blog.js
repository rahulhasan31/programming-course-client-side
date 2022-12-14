import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> what is cors?</Accordion.Header>
                    <Accordion.Body>
                    Web browsers prevent unknown websites from accessing your application programming interfaces and services. This way, your server shares its resources only with clients that are on the same domain. However, there are situations where you want to lift this guard or get more fine-grained control over which websites access your server's resources. In such cases, you implement CORS (cross-origin resource sharing) on your server. 

In this post, I'll talk about what CORS is and why it's useful. I'll then walk you through how you can enable CORS in your NodeJS application. You can also learn more about the basics of CORS here. 

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        -Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.

                        -Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node.js is an open source server environment
                        Node.js is free
                        Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
                        Node.js uses JavaScript on the server

                        -It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;