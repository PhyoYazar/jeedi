import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';


const meta = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		groupType: 'attached',
		children: <><Button variant='outlined'>1</Button><Button variant='outlined'>1</Button><Button variant='outlined'>1</Button></>,
	},
};
