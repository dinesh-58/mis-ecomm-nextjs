import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import heroImg from "../../public/stock-library.jpg";

export default function Home() {
  return (
    <main>
        <Hero />
        <ProductsShowcase />
    </main>
  );
}

function Hero() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${heroImg.src})`}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
        </div>
    );
}

type StrapiResponse = {
    data: [],
    meta: {},
}

async function ProductsShowcase() {
    const res: any = await fetch(`${process.env.STRAPI_URL}/api/books?populate[0]=coverImg&pagination[pageSize]=4&pagination[page]=1&publicationState=live&locale[0]=en`, { next: { revalidate: 3600 } });

    const products: [] = (await res.json()).data;
    return (
        <section>
            <h4>Best Selling</h4>
            {products.map(p => (
                        <ProductCard key={p.id} 
                            title={p.attributes.title}
                            author={p.attributes.author}
                            coverImg={p.attributes.coverImg}
                            priceInPaisa={p.attributes.priceInPaisa}
                            category={p.attributes.category}
                            />
                ))}
        </section>
    );
}
