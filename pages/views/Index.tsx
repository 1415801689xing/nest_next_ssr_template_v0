import * as React from 'react';

import { Button, List } from 'antd-mobile';
import Layout from '../components/Layout';
// import Desert from '../static/Desert.jpg';

interface InitialProps {
	query: [];
	test: string;
}

interface Props extends InitialProps {}

class Index extends React.Component<Props> {
	props: any;
	public static getInitialProps({ query }: InitialProps) {
		const test: string = '555';
		return { query, test };
	}

	public render() {
		return (
			<Layout>
				{this.props.query.map((item, index) => (
					<div key={index}>{item.a}</div>
				))}
				<Button>{this.props.test}</Button>

				<List>
					<List.Item extra="" onClick={() => {}}>
						Click to disable
					</List.Item>
					<List.Item>
						<select defaultValue="1">
							<option value="1">Html select element</option>
							<option value="2" disabled>
								Unable to select
							</option>
							<option value="3">option 3</option>
						</select>
					</List.Item>
				</List>
			</Layout>
		);
	}
}

export default Index;
