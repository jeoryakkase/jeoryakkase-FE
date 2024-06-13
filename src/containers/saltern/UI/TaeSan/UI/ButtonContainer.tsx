import { Button } from "@components/Button";

const ButtonContainer = ({ isOwner, isCheered }) => {
	return (
		<section className="flex justify-center">
			{isCheered ? <Button>응원 완료</Button> : <Button>박수치기</Button>}
			{isOwner && <Button className="ml-4">공유하기</Button>}
		</section>
	);
};

export default ButtonContainer;
