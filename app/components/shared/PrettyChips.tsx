import { Flex, Text } from '@radix-ui/themes';
import { CommonComponentProps } from '~/lib/interfaces/CommonTypes';

type PrettyChipsProps = Pick<CommonComponentProps, 'title'>;

export default function PrettyChips({ title }: PrettyChipsProps) {
	return (
		<>
			<Flex
				gap="2"
				className="flex items-center border rounded-full p-2 px-4 justify-between"
			>
				<Text>{title}</Text>
				<svg className="text-white h-6 w-6 flex my-auto ml-2 pt-[6px]">
					<use href="/sprites.svg#star" />
				</svg>
			</Flex>
		</>
	);
}
