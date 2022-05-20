import classes from "./colorSelection.module.css";
const ColorSelection = ({colors}) => {
  return (
    <div className={classes.colors}>
            {colors.map((color) => (
              <div key={color}>
                <input
                  type="radio"
                  name="radio"
                  id={color}
                  className={classes.radio}
                />

                <label htmlFor={color} style={{ backgroundColor: color }}>
                  <span style={{ border: `2px solid ${color}` }}></span>
                </label>
              </div>
            ))}
          </div>
  )
}
export default ColorSelection