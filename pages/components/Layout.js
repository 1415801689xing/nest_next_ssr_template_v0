import { NavBar, Icon, WingBlank } from 'antd-mobile';
import { withRouter } from 'next/router';
import Head from 'next/head';

export default withRouter(({ router, children, title }) => (
	<div>
		<Head>
			<title> Website</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
			/>
			<link
				rel="shortcut icon"
				type="image/x-icon"
				href="/static/favicon.ico"
				rel="external nofollow"
			/>
		</Head>
		<NavBar
			mode="light"
			icon={<Icon type="left" />}
			onLeftClick={() => router.back()}>
			Ant Design Mobile example
		</NavBar>
		<WingBlank>{children}</WingBlank>
	</div>
));
