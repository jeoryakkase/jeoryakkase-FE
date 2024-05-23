import UserIcon from "public/svgs/UserIcon";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../Carousel";
import BannerCarousel from "./UI/BannerCarousel";

const bannerData = [
	{
		title: "첫 번째 배너",
		subtitle: "첫 번째 배너의 설명입니다.",
		icon: <UserIcon />,
	},
	{
		title: "두 번째 배너",
		subtitle: "두 번째 배너의 설명입니다.",
		icon: <UserIcon />,
	},
	{
		title: "세 번째 배너",
		subtitle: "세 번째 배너의 설명입니다.",
		icon: <UserIcon />,
	},
];

const backgroundColors = [
	"bg-main-lightblue",
	"bg-main-darkblue",
	"bg-main-midblue",
];

const BannerCarousels = () => {
	return (
		<Carousel className="w-full max-w-5xl mx-auto mb-16">
			<CarouselContent>
				{bannerData.map((banner, index) => (
					<CarouselItem key={index} className="px-4">
						<BannerCarousel
							title={banner.title}
							subtitle={banner.subtitle}
							icon={banner.icon}
							backgroundColor={
								backgroundColors[index % backgroundColors.length]
							}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default BannerCarousels;
