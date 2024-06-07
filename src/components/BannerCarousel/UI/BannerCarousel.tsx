type BannerCarouselProps = {
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	backgroundColor: string;
	subTitleText?: string;
	titleColors?: string;
	// tag 넘겨야함
};

const BannerCarousel = ({
	title,
	subtitle,
	icon,
	backgroundColor,
	subTitleText,
	titleColors,
}: BannerCarouselProps) => {
	return (
		<div
			className={`relative text-black p-6 rounded-3xl flex items-center justify-between h-[170px] ${backgroundColor}`}
		>
			<div>
				<h2 className={`text-lg font-bold ${titleColors}`}>{title}</h2>
				<p className={`text-sm text-main-darkgray ${subTitleText}`}>
					{subtitle}
				</p>
			</div>
			<div className="text-4xl">{icon}</div>
		</div>
	);
};

export default BannerCarousel;
