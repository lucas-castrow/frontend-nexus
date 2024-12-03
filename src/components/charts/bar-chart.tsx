import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface BarChartComponentProps {
	data: Array<{ month: string; entry: number; exit: number }>;
	config: {
		entry: {
			label: string;
			color: string;
		};
		exit: {
			label: string;
			color: string;
		};
	};
	title?: string;
	description?: string;
}

export const BarChartComponent: React.FC<BarChartComponentProps> = ({
	data,
	config,
	title = "",
	description = "",
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={config}>
					<BarChart data={data}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey="entry" fill={config.entry.color} radius={4} />
						<Bar dataKey="exit" fill={config.exit.color} radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>

		</Card>
	);
};