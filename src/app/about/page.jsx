import Image from "next/image";


const AboutPage = () => {

  return (
    <section className="content">

      <h2 className="section-title">About</h2>

      <p>Next.js - це сучасний потужний React-фреймворк, котрий дозволяє створювати швидкі,
         масштабовані та інші SEO-дружні додатки </p>

       
      <Image 
          src="/dodge-400-200.jpg" 
          alt="Dodge" 
          width={400} 
          height={200} 
          priority
          />

      <br />
      <br />

      <Image 
          src="https://img.gsc-game.net/q_85/stalker2/new_media/screenshots/2406-04.jpg" 
          alt="Stalker2" 
          width={400} 
          height={200} 
          priority
          />





    </section>
  );
};

export default AboutPage;