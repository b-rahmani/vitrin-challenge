import Head from "next/head";
import classes from "../../styles/single-product.module.css";
import ImageSide from "../../components/imageSide/ImageSide";
import DetailSide from "../../components/detailSide/DetailSide";
import { getProduct } from "../../utils/utils";

const SingleProduct = (props) => {
  return (
    <div className={classes.singleProduct}>
      <Head>
        <title>{props.product.title}</title>

        <meta name="description" content={props.product.description} />
      </Head>
      <main className={classes.main}>
        <ImageSide image={props.product.image} />
        <DetailSide product={props.product} />
        
      </main>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  let product = await getProduct(ctx.params.productId);

  return {
    props: {
      product,
    },
  };
};

export default SingleProduct;
