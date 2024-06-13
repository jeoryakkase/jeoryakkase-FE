import Card from "@components/Card";

import SalternMenu from "./SalternMenu";

const SalternNav = () => {
	return (
		<section>
			<Card className="w-full h-48 mt-10 mb-16 bg-main-lightblue">
				<Card.Content>은퇴까지 몇년?</Card.Content>
			</Card>
			<SalternMenu />
		</section>
	);
};

export default SalternNav;
