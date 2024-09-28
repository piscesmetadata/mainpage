import { Button, Flex, Link, Text } from '@radix-ui/themes';

interface MenuNavProps {
	title: string;
}

export default function MenuNav({ title }: MenuNavProps) {
	return (
		<nav className="font-bold">
			<Flex
				as="div"
				className="flex items-center justify-between w-full absolute top-0 left-0"
				justify="between"
			>
				<Text color="yellow" size="5">
					{title}
				</Text>
				<Flex gap="7">
					<span>
						<Link href="/">
							<Text className="text-gray-12">About</Text>
						</Link>
					</span>
					<span>
						<Link href="/">
							<Text className="text-gray-12">Projects</Text>
						</Link>
					</span>
					<span>
						<Link href="/">
							<Text className="text-gray-12">Contact</Text>
						</Link>
					</span>
				</Flex>
				<Button radius="full" className="font-bold">
					Solicite información
				</Button>
			</Flex>
		</nav>
	);
}
