import Head from "next/head";
import { getProduct } from "../../utils/utils";

const SingleProduct = (props) => {
  return (
    <div>
      <Head>
        <title>{props.product.title}</title>

        <meta name="description" content={props.product.description} />
      </Head>
      SingleProduct id:
      {props.product.title}
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
