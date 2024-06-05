import Feed from "@components/Feed";

const Tips = ({ tipDatas }) => {
	return (
		<section>
			{tipDatas.map((tipData) => (
				<Feed key={tipData.id} feedData={tipData} />
			))}
			<div className="w-full h-0.5 bg-sub-gray1 mt-4 mb-10" />
		</section>
	);
};

export default Tips;
