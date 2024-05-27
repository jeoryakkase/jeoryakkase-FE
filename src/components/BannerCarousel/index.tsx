import BannerCarousel from "./UI/BannerCarousel";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../shadcn/ui/Carousel";

interface BannerCarouselsProps {
	banners: Array<{
		title: string;
		subtitle: string;
		icon: React.ReactNode;
		backgroundColor: string;
	}>;
}

const BannerCarousels = ({ banners }: BannerCarouselsProps) => {
	return (
		<Carousel className="w-full max-w-5xl mx-auto mb-16">
			<CarouselPrevious />
			<CarouselContent>
				{banners.map((banner, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<CarouselItem key={index}>
						<BannerCarousel
							title={banner.title}
							subtitle={banner.subtitle}
							icon={banner.icon}
							backgroundColor={banner.backgroundColor}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext />
		</Carousel>
	);
};

export default BannerCarousels;
