import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
	if (!drinks) {
		return <h4 style={{ textAlign: "center" }}>No drinks to display...</h4>;
	}
	const renderedDrinks = drinks.map((drink) => {
		const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcoholic,
			glass: strGlass,
		};
	});
	return (
		<Wrapper>
			{renderedDrinks.map((drink) => {
				return (
					<CocktailCard
						key={drink.id}
						{...drink}
					/>
				);
			})}
			;
		</Wrapper>
	);
};
export default CocktailList;
