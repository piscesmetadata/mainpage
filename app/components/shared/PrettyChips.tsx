import { Flex, Text } from '@radix-ui/themes';
import { GiFallingStar } from 'react-icons/gi';
import { CommonComponentProps } from '~/lib/interfaces/CommonTypes';

type PrettyChipsProps = Pick<CommonComponentProps, 'title'>;

/**
 * PrettyChip component
 * @param {string} title - The title of the chip
 * @returns {React.ReactNode} - The PrettyChip component
 */
export default function PrettyChip({ title }: PrettyChipsProps) {
	return (
		<>
			<Flex
				gap="2"
				className="flex items-center border rounded-full p-2 px-4 justify-between"
			>
				<Text>{title}</Text>
				<GiFallingStar className="text-white" />
			</Flex>
		</>
	);
}
