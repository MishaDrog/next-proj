

import {createHelloGreeting} from '@/lib/hello'

export const metadata = {
  title: 'POST Example | Next JS tutorial',
  description: "POST requests",
  keywirds: 'business, next js, react'
};

const PostExample =  () => {

  const {message} =  createHelloGreeting('Misha_Drog');

    return (
              <section className="content">
                  <h2 className="section-title">Post request</h2> 

                  
                  {message && <p>{message}</p> }
              </section>
            );
};

export default PostExample;