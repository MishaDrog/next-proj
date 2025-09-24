import ButtonGetRequest from "@/components/ButtonGetRequest";

async function getMessageFromAPI(params) {
        const  res  = await fetch(`${process.env.NEXT_URL}/api/hello`);

        return res.json();
}



const GetExample = async () => {

      const {massage} = await getMessageFromAPI()


  return (
    <section className="content">
        <h2 className="section-title">Get request</h2>

        {massage && <p>{massage}</p> }

        <ButtonGetRequest />
    </section>
  );
};

export default GetExample;