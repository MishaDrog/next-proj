import ButtonGetRequest from "@/components/ButtonGetRequest";

import {getHelloMessage} from '@/lib/hello'


export const metadata = {
  title: 'GET Example | Next JS tutorial',
  description: "GET requests",
  keywirds: 'business, next js, react'
};


const GetExample = () => {

      const {massage} =  getHelloMessage()


  return (
    <section className="content">
        <h2 className="section-title">Get request</h2>

        {massage && <p>{massage}</p> }

        <ButtonGetRequest />
    </section>
  );
};

export default GetExample;