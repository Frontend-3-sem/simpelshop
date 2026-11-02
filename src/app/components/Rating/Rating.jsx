import styles from "./rating.module.css";

const decimal = ratingInPercent / 20;
const nonFraction = Math.trunc(decimal);
const fraction = Number((decimal - nonFraction).toFixed(2));
const fractionPercent = fraction * 100;


const [activeStar, setActiveStar] = useState(-1);


const handleClick = (index) => {
  onClick(index + 1);
  setActiveStar(index);
};

export default function Rating({ rating = 0 }) {
  const percentage = (rating / 5) * 100;


return (
  <>
    <div className={styles.rating} role="img" aria-label="{`${rating} ud af 5 stjerner`}">
<div className={styles.stars}>
    <span className={styles.emtyStars}>*****</span>

    <span className={styles.filledStars} style={{ width: `${percentage}% `}}>

*****
    </span>

</div>



<span>{rating.toFixed(2) /5} </span>


    </div>

  </>
);

}