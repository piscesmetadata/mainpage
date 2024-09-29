import { Flex, Text } from '@radix-ui/themes';
import { cva } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const cardToActionVariants = cva(
	'rounded-3xl pt-[1.125rem] px-[1.125rem] pb-[2.188rem] h-auto flex-1',
	{
		variants: {
			color: {
				blue: 'bg-blue-9',
				pink: 'bg-pink-9',
				white: 'bg-white',
			},
		},
		defaultVariants: {
			color: 'white',
		},
	}
);

interface CallToActionProps {
	title: string;
	description: string;
	color?: 'blue' | 'pink' | 'white';
	extraClasses?: string;
}

export default function CallToAction({
	title,
	description,
	color,
	extraClasses,
}: CallToActionProps) {
	return (
		<Flex
			direction={{
				initial: 'column-reverse',
				sm: 'column',
			}}
			justify="between"
			className={cn(cardToActionVariants({ color }), extraClasses)}
			gapY="6"
		>
			<Text weight="medium">{description}</Text>
			<Text className="tracking-tighter" size="7">
				{title}
			</Text>
		</Flex>
	);
}
