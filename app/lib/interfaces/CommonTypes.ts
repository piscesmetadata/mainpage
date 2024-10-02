/**
 * CommonComponentProps interface wraps the props of a component that is used in multiple places.
 *
 * @interface CommonComponentProps
 * @property {React.ReactNode} children - The children of the component
 * @property {React.ReactNode} icon - The icon of the component
 * @property {string} title - The title of the component
 * @property {string} description - The description of the component
 * @property {string} color - The color of the component
 * @property {string} extraClasses - The extra classes of the component
 */
interface CommonComponentProps {
	children: React.ReactNode;
	icon: React.ReactNode;
	title: string;
	description: string;
	color: string;
	extraClasses?: string;
}

export type { CommonComponentProps };
