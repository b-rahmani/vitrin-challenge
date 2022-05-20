import classes from "./detailsSide.module.css";
import ReactStars from "react-rating-stars-component";
import CartIcon from "../cartIcon/CartIcon";
import ShareIcon from "../shareIcon/ShareIcon";
import ColorSelection from "../colorSelection/ColorSelection";
const DetailSide = (props) => {
  const { title, price, description, rating } = props.product;

  const colors = ["#5BE8C8", "#FFEE71", "#6856AF", "#363636", "#DFDFDF"];
  return (
    <div className={classes.detailsSide}>
      <section className={classes.productMain}>
        <div className={classes.nameDetails}>
          <h1 className={classes.productName}>{title}</h1>
          {/* <p className={classes.subTitle}>{MINT GREEN}</p> */}
          <div className={classes.price}>
            <div
              className={classes.mainPrice}
              style={{
                textDecoration: props.discount ? "line-through" : "none",
                textDecorationColor: "#F8636C",
              }}
            >
              ${price}
            </div>
            <div
              className={classes.discountedPrice}
              style={{ display: props.discount ? "block" : "none" }}
            >
              $114.99
            </div>
          </div>
        </div>
        <div className={classes.productRate}>
          <ReactStars
            count={5}
            edit={false}
            size={24}
            value={rating.rate}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#F8636C"
          />
        </div>
      </section>

      <section className={classes.productDiscription}>
        <h4 className={classes.title}>DISCRIPTION</h4>
        <p className={classes.discription}>{description}</p>
      </section>
      {/* select options */}
      <section className={classes.selectOptions}>
        <div className={classes.colorContainer}>
          <p>COLOR</p>
          <ColorSelection colors={colors} />
        </div>
        <div className={classes.sizeContainer}>
          <p>SIZE</p>
          <select name="" id="">
            <option value="size-1">(UK 1)</option>
            <option value="size-2">(UK 2)</option>
            <option value="size-3">(UK 3)</option>
            <option value="size-4">(UK 4)</option>
            <option value="size-5">(UK 5)</option>
            <option value="size-6">(UK 6)</option>
            <option value="size-7">(UK 7)</option>
            <option value="size-8">(UK 8)</option>
          </select>
        </div>
        <div id="quantity" className={classes.quantity}>
          <p>Qty</p>

          <select>
            <option value="quantity-1">(1)</option>
            <option value="quantity-2">(2)</option>
            <option value="quantity-3">(3)</option>
            <option value="quantity-4">(4)</option>
            <option value="quantity-5">(5)</option>
            <option value="quantity-6">(6)</option>
          </select>
        </div>
      </section>

      <section className={classes.productActions}>
        <button className={classes.addToCart}>
          <CartIcon color="#fff" />
          <span>ADD TO CART</span>
        </button>
        <ShareIcon color="#C1C1C1" />
      </section>
    </div>
  );
};
export default DetailSide;
