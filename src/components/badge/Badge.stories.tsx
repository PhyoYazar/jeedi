import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from '~/assets/icons';
import Badge from './Badge';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Badge',
	},
};

export const BadgeWithIcon: Story = {
	args: {
		rightIcon: <PlusIcon />,
		children: 'Icon Btn',
	}
}

export const IconBadge: Story = {
	args: {
		leftIcon: <PlusIcon />,
		// rightIcon: <ArrowPathIcon />,
		// children: 'Icon Btn',
	}
}