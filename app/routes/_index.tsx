import { Box, Button, Card, Flex, Grid, Text } from '@radix-ui/themes';

export default function Index() {
	return (
		<Grid
			columns={{
				initial: '1',
				md: '12',
			}}
			className="w-full h-full"
			gapX="1"
		>
			<Flex
				direction="column"
				className="w-full bg-zinc-800 p-[1.588rem] md:p-[3.188rem] rounded-3xl"
				style={{ gridColumn: 'span 7' }}
				justify="between"
			>
				<Text
					color="yellow"
					weight="medium"
					size={{
						initial: '2',
						md: '4',
					}}
					className="leading-4"
				>
					Queremos ser tu aliado estratégico en la transformación digital
				</Text>
				<Flex gapX="9">
					<Flex direction="column" gap="2">
						<Text color="yellow" className="text-5xl">
							Business Growth Plan
						</Text>
						<Text weight="light" size="6">
							Queremos involucrarnos en el crecimiento de tu negocio a nivel
							operativo y tecnológico.
						</Text>
					</Flex>
					<svg>
						<use href="/sprites.svg#decorator_1" className="text-yellow-9" />
					</svg>
				</Flex>
				<Flex justify="between" align="center">
					<Text
						className="max-w-[31.375rem]"
						color="yellow"
						weight="medium"
						size="4"
						asChild
					>
						<span>
							El software personalizado está transformando radicalmente la
							manera en que las empresas optimizan sus procesos, integrando
							herramientas que automatizan y agilizan sus operaciones
							comerciales de forma eficiente.
						</span>
					</Text>
					<Button>Solicite información</Button>
				</Flex>
			</Flex>
			<Flex
				direction="column"
				className="w-full h-full pt-[5.875rem]"
				style={{ gridColumn: 'span 5' }}
				gap="1"
			>
				<Flex
					className="bg-white rounded-3xl p-[2.188rem] max-h-[15.875rem] h-full"
					direction="column"
					justify="between"
					gapY="7"
				>
					<Text className="text-pink-9 max-w-[25.625rem]" weight="medium">
						Alcanzado a través de una variedad de métodos, incluyendo la
						experimentación y la resolución creativa de problemas.
					</Text>
					<Text className="text-pink-9 tracking-tighter" size="7">
						Innovación
					</Text>
				</Flex>
				<Flex className="h-full" gapX="1">
					<Flex
						direction="column"
						justify="between"
						className="bg-blue-9 rounded-3xl p-[2.188rem] pr-[2.988rem]"
						gapY="6"
					>
						<Text className="max-w-[25.625rem]" weight="medium">
							Deja de preocuparte por la eficiencia de tu negocio.
						</Text>
						<Text className="tracking-tighter" size="7">
							Automatización
						</Text>
					</Flex>
					<Flex
						direction="column"
						justify="between"
						className="bg-pink-9 rounded-3xl p-[2.188rem]"
					>
						<Text weight="medium">
							Brinda nuevas experiencias a tus clientes.
						</Text>
						<Text className="tracking-tighter" size="7">
							Transformación
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Grid>
	);
}
