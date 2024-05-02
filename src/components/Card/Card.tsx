import styles from "./Card.module.scss";

import { CardContent as MuiCardContent, Card as MuiCard } from "@mui/material";

const Card = () => {
  return (
    <div className={styles.root}>
      <MuiCard variant="outlined">
        <MuiCardContent></MuiCardContent>
      </MuiCard>
    </div>
  );
};

export default Card;
