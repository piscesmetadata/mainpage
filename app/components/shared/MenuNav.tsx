import { useState, useEffect, useRef } from 'react';
import { Button, Flex, Link, Text } from '@radix-ui/themes';
import { CommonComponentProps } from '~/lib/interfaces/CommonTypes';

type MenuNavProps = Pick<CommonComponentProps, 'title'>;

/**
 * MenuNav component
 * @param {string} title - The title of the menu
 * @returns {React.ReactNode} - The MenuNav component
 */
export default function MenuNav({ title }: MenuNavProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				!(event.target as Element).closest('button')
			) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleOutsideClick);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="font-bold w-full relative">
			<Flex
				as="div"
				className="flex items-center justify-between px-4 py-2"
				justify="between"
			>
				<Text color="yellow" size="5">
					{title}
				</Text>

				<button className="md:hidden z-50" onClick={toggleMenu}>
					{isMenuOpen ? '✕' : '☰'}
				</button>

				<Flex gap="7" className="hidden">
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

				<Button radius="full" className="font-bold hidden">
					Solicite información
				</Button>
			</Flex>

			{/* Overlay */}
			{isMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
			)}

			{/* Menú móvil desplegable */}
			<div
				ref={menuRef}
				className={`absolute top-full left-0 right-0 bg-zinc-800 overflow-hidden transition-all duration-300 ease-in-out md:hidden z-40 ${
					isMenuOpen ? 'max-h-96' : 'max-h-0'
				}`}
			>
				<Flex direction="column" gap="4" className="p-4">
					<Link href="/">
						<Text className="text-gray-12">About</Text>
					</Link>
					<Link href="/">
						<Text className="text-gray-12">Projects</Text>
					</Link>
					<Link href="/">
						<Text className="text-gray-12">Contact</Text>
					</Link>
					<Button radius="full" className="font-bold mt-4">
						Solicite información
					</Button>
				</Flex>
			</div>
		</nav>
	);
}
