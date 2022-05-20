import classes from "./imageSide.module.css";
import Image from "next/image";
const ImageSide = (props) => {
  return (
    <div className={classes.ImageSide}>
      <div className={classes.imageContainer}>
        <Image
          src={props.image}
          alt="productImage"
          width={400}
          height={400}
          layout="responsive"
        />
      </div>
      <div className={classes.dots}>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
        <div className={classes.dot}></div>
      </div>
    </div>
  );
};
export default ImageSide;
