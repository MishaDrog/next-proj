
export const metadata = {
  title: 'Contacts page | Next JS tutorial',
  description: "Contacts my company",
  keywirds: 'business, next js, react'
};



const ContactsPage = () => {

  return (
    <section className="content">

        <h2 className="section-title">Contacts</h2>

        <p>
            Email: support@example.com <br />
            Phone: +3 80966 222-904 <br />
            Address: 2045 Developer Way, San Francisco, CA

        </p>
     
    </section>
  );
};

export default ContactsPage;