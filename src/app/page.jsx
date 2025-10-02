import Button from "@/components/Button";


export const metadata = {
  title: "Next JS tutorial",
  description: "Learning Next JS",
  keywirds: 'business, next js, react'
};



export default function Home() {
  return (
    <section className="content">
      <h1>Вивчаємо NEXT JS</h1>
      <p>next.js - це сучасний React-фреймворк, котрий дозволяє створювати швидкі,
         масштабовані та інші SEO-дружні додатки </p>

      <Button />

    </section>
  );
}
