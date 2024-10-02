import { Flex, Text } from '@radix-ui/themes';
import { cva } from 'class-variance-authority';
import { CommonComponentProps } from '~/lib/interfaces/CommonTypes';
import { cn } from '~/lib/utils';

/**
 * cardToActionVariants is a cva function that creates a set of classes for the CallToAction component.
 * It is used to style the component based on the color prop.
 */
const cardToActionVariants = cva(
	'rounded-3xl pt-[1.125rem] px-[1.125rem] pb-[4.188rem] md:pb-[2.188rem] h-auto flex-1',
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

/**
 * CallToActionProps interface
 * @interface CallToActionProps
 * @property {string} title - The title of the card
 * @property {string} description - The description of the card
 * @property {string} color - The color of the card
 * @property {string} extraClasses - The extra classes of the card
 */
type CallToActionProps = Pick<
	CommonComponentProps,
	'title' | 'description' | 'extraClasses'
> & {
	color?: 'blue' | 'pink' | 'white';
};

/**
 * CallToAction component
 * @param {string} title - The title of the card
 * @param {string} description - The description of the card
 * @param {string} color - The color of the card
 * @param {string} extraClasses - The extra classes of the card
 * @returns {React.ReactNode} - The CallToAction component
 */
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
