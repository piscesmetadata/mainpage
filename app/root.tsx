import {
	json,
	Links,
	Meta,
	MetaFunction,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunction } from '@remix-run/node';

import tailwind from './tailwind.css?url';
import { ThemeProvider } from 'next-themes';
import { Flex, Theme } from '@radix-ui/themes';
import MenuNav from '~/components/shared/MenuNav';

export const loader: LoaderFunction = async () => {
	return json({
		appName: process.env.APP_NAME,
		keywords: process.env.APP_KEYWORDS,
		description: process.env.APP_DESCRIPTION,
		author: process.env.APP_AUTHOR,
		version: process.env.APP_VERSION,
	});
};

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: tailwind },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap',
	},
];

export const meta: MetaFunction = () => {
	const { appName, keywords, description, author, version } =
		useLoaderData<typeof loader>();

	return [
		{ title: appName },
		{ keywords: keywords },
		{ description: description },
		{ author: author },
		{ version: version },
		// og
		{ property: 'og:title', content: appName },
		{ property: 'og:description', content: description },
	];
};

export function Layout({ children }: { children: React.ReactNode }) {
	const { appName, keywords, description, author, version } =
		useLoaderData<typeof loader>();

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
				<meta name="author" content={author} />
				<meta name="version" content={version} />
				<Meta />
				<Links />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Theme
						accentColor="yellow"
						grayColor="gray"
						panelBackground="solid"
						radius="none"
						scaling="105%"
					>
						<main className="min-h-screen h-full w-full max-w-[1440px] overflow-x-hidden mx-auto font-zen-maru-gothic">
							<Flex
								direction="column"
								className="py-[42px] w-full h-full"
								gapY="9"
							>
								<header className="mx-auto max-w-[1200px] w-full flex">
									<MenuNav title={appName} />
								</header>
								<section className="flex-1 h-full w-full">{children}</section>
							</Flex>
						</main>
					</Theme>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
