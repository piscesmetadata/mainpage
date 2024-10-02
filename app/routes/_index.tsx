import { Button, Flex, Grid, Text } from '@radix-ui/themes';
import CallToAction from './_components/Card__CallToAction';
import PrettyChip from '~/components/shared/PrettyChips';

/**
 * Index page.
 * Can be accessed at http://localhost:3000/ as example.
 * @returns {React.ReactNode} - The Index page
 */
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
				className="w-full bg-zinc-800 p-[1.588rem] md:p-[3.188rem] rounded-3xl col-span-12 lg:col-span-7 gap-1"
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
				<Flex gapX="9" className="mt-6 bounds:mt-0">
					<Flex direction="column" gap="2">
						<Flex gapX="3" align="center" className="bounds:mt-4">
							<Text color="yellow" className="text-3xl bounds:text-5xl">
								Business Growth Plan
							</Text>
							<svg className="h-[28px] w-[33px] sm:h-12 sm:w-16 bounds:h-auto bounds:w-auto">
								<use
									href="/sprites.svg#decorator_1"
									className="text-yellow-9"
								/>
							</svg>
						</Flex>

						<Text
							weight="light"
							size={{
								initial: '3',
								md: '5',
							}}
							asChild
							className="sm:mt-4 bounds:mt-0"
						>
							<span>
								Queremos involucrarnos en el{' '}
								<mark className="bg-yellow-9 font-medium">
									crecimiento de tu negocio
								</mark>{' '}
								a nivel operativo y tecnológico.
							</span>
						</Text>
					</Flex>
				</Flex>
				<Flex justify="between" align="center" className="mt-4 bounds:mt-8">
					<Text
						//className="max-w-[31.375rem]"
						color="yellow"
						weight="medium"
						size={{
							initial: '3',
							md: '4',
						}}
						asChild
					>
						<span>
							El software a la medida está transformando radicalmente la manera
							en que las empresas optimizan sus procesos, integrando
							herramientas que automatizan y agilizan sus operaciones
							comerciales de forma eficiente.
						</span>
					</Text>
					<Button className="hidden">Solicite información</Button>
				</Flex>
			</Flex>
			<Flex
				className="w-full h-full mt-1 lg:mt-0 lg:pt-[5.875rem] col-span-12 lg:col-span-5 md:gap-1 relative"
				direction={{
					initial: 'column-reverse',
					sm: 'row',
					md: 'column',
				}}
			>
				<CallToAction
					title="Innovación"
					description="Alcanzado a través de una variedad de métodos, incluyendo la
						experimentación y la resolución creativa de problemas."
					extraClasses="relative -top-16 md:-top-0 text-pink-9 z-10 pb-[2.188rem]"
				/>
				<Flex
					gap="1"
					direction={{
						initial: 'column-reverse',
						sm: 'column',
						md: 'row',
					}}
				>
					<CallToAction
						color="blue"
						title="Automatización"
						description="Deja de preocuparte por la eficiencia de tu negocio."
						extraClasses="relative -top-8 md:-top-0"
					/>
					<CallToAction
						color="pink"
						title="Transformación"
						description="Brinda nuevas experiencias a tus clientes."
					/>
				</Flex>
			</Flex>
			<Flex
				direction="column"
				className="w-full h-full p-[1.588rem] md:p-[3.188rem] rounded-3xl col-span-12 md:col-start-2 md:col-span-10"
			>
				<Grid columns="10" gap="1" className="border-b pb-8">
					<Text className="col-span-12 md:col-span-5 text-3xl bounds:text-5xl tracking-tighter">
						Una solución para cada necesidad de tu negocio
					</Text>
					<Text
						className="col-span-12 md:col-span-5 my-auto"
						size={{
							initial: '4',
						}}
					>
						Creemos firmemente que la tecnología es una herramienta poderosa que
						puede transformar la forma en que las empresas operan y se
						relacionan con sus clientes.
					</Text>
				</Grid>
				<Grid columns="10" gap="1" className="pt-8 border-t">
					<div className="col-span-12 md:col-span-5">
						<Flex direction="row" align="center" gap="2" className="flex-wrap">
							<PrettyChip title="Innovación" />
							<PrettyChip title="Automatización" />
							<PrettyChip title="Transformación" />
							<PrettyChip title="Experiencia de usuario" />
							<PrettyChip title="IA Generativa" />
						</Flex>
					</div>
					<Flex
						direction="column"
						gap="2"
						className="col-span-12 md:col-span-5"
					>
						<Text size="7" className="tracking-tighter">
							Nuestra especialidad
						</Text>
						<Text>
							Nuestro equipo de expertos en transformación digital trabaja
							estrechamente con nuestros clientes para entender sus necesidades
							específicas y desarrollar soluciones personalizadas que les
							permitan alcanzar sus objetivos.
						</Text>
					</Flex>
				</Grid>
			</Flex>
		</Grid>
	);
}
