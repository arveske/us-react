import UICard from "../../UI/UICard/UICard";
import { DUMMY_MEALS } from "./dummy-meals";
import MealsAvailableItem from "./MealsAvailableItem/MealsAvailableItem";
import { AvailableMealsWrapper } from "./styles";

const MealsAvailable = ({}) => {
  return (
    <AvailableMealsWrapper>
      <UICard>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealsAvailableItem key={meal.id} {...meal} />;
          })}
        </ul>
      </UICard>
    </AvailableMealsWrapper>
  );
};

export default MealsAvailable;
