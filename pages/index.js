import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getAllProduct } from "../utils/utils";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>all products</h1>

        <div className={styles.grid}>
          {props.allProduct.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id}>
              <a className={styles.card}>
                <h2>{p.title?.substr(0, 10)}</h2>
                <p>{p.description.substr(0, 50)}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const allProduct = await getAllProduct({ limit: 10 });

  return {
    props: {
      allProduct,
    },
    revalidate: 3600,
  };
};

export default Home;
