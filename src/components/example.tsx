import { ThunderIcon } from "~/assets/icons";
import { Icon } from "~/common";
import { Badge } from "./badge";
import { Button, ButtonGroup } from "./button";

const Example = () => {
	return <section className="w-full min-h-screen grid grid-cols-12 py-10">

		<div className=" col-start-2 col-end-12">
			<div className=" flex items-center flex-wrap gap-4">
				<Button bgColor='success'>filled</Button>
				<Button variant='ghost' textColor="error">ghost</Button>
				<Button variant='outlined' textColor="success">outlined</Button>

				<ButtonGroup>
					<Button bgColor='success'>filled</Button>
					<Button variant='ghost' textColor="error">ghost</Button>
					<Button variant='outlined' textColor="success">outlined</Button>
				</ButtonGroup>

				<Badge leftIcon={<ThunderIcon />}/>
				<div className="w-60">
					<Badge fullWidth leftIcon={<ThunderIcon />}>Haaa</Badge>
				</div>
			</div>

			<Icon src='/svg/checkCircle.svg' width={20} height={20} fillColor='gray' color='gray'/>
		</div>
	</section>;
};

export default Example;
