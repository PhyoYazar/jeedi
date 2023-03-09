import type { Meta, StoryObj } from '@storybook/react';
import { ArrowPathIcon, ThunderIcon } from '~/assets/icons';

import Button from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Button',
	},
};

export const IconButton: Story = {
	args: {
		leftIcon: <ThunderIcon />,
		rightIcon: <ArrowPathIcon />,
		children: 'Icon Btn',
	}
}