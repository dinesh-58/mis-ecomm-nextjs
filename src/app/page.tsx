import Image from "next/image";

export default function Home() {
  return (
    <main>Hello
        <ProductsShowcase />
    </main>
  );
}

type StrapiResponse = {
    data: [],
    meta: {},
}

async function ProductsShowcase() {
    const res: any = await fetch(`${process.env.STRAPI_URL}/api/books?pagination[pageSize]=4&pagination[page]=1&publicationState=live&locale[0]=en`);

    const products: [] = (await res.json()).data;
    return (
        <section>
            <h4>Best Selling</h4>
            {products.map(p => <div key={p.id}>{p.attributes.title}</div>)}
        </section>
    );
}
