import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbCard } from '../src/components/AbCard';

export default {
    title: 'components/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>;

export const AbCardComponent = () => {
    return (
        <AbCard>
            <h1>Olá, eu sou um card</h1>
        </AbCard>)
};
