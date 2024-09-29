import { useState, useEffect, useRef } from 'react';
import { Button, Flex, Link, Text } from '@radix-ui/themes';

interface MenuNavProps {
	title: string;
}

export default function MenuNav({ title }: MenuNavProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isSidebarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		const handleOutsideClick = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				!(event.target as Element).closest('button')
			) {
				setIsSidebarOpen(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.body.style.overflow = 'unset';
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isSidebarOpen]);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<nav className="font-bold w-full">
			<Flex
				as="div"
				className="flex items-center justify-between px-4 py-2"
				justify="between"
			>
				<Text color="yellow" size="5">
					{title}
				</Text>

				<button className="md:hidden z-50" onClick={toggleSidebar}>
					{isSidebarOpen ? '✕' : '☰'}
				</button>

				<Flex gap="7" className="hidden md:flex">
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

				<Button radius="full" className="font-bold hidden md:block">
					Solicite información
				</Button>
			</Flex>

			{isSidebarOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
			)}

			<div
				ref={sidebarRef}
				className={`fixed top-0 right-0 h-screen w-64 bg-zinc-800 p-4 transform ${
					isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 ease-in-out md:hidden z-40`}
			>
				<Flex direction="column" gap="4" className="h-full">
					<div className="mt-16">
						<Link href="/">
							<Text className="text-gray-12">About</Text>
						</Link>
					</div>
					<div>
						<Link href="/">
							<Text className="text-gray-12">Projects</Text>
						</Link>
					</div>
					<div>
						<Link href="/">
							<Text className="text-gray-12">Contact</Text>
						</Link>
					</div>
					<div className="mt-auto mb-8">
						<Button radius="full" className="font-bold w-full">
							Solicite información
						</Button>
					</div>
				</Flex>
			</div>
		</nav>
	);
}
