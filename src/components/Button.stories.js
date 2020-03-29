import CmButton from './CmButton';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Button',
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onClick: action('click'),
};

const buttonTemplate = '<CmButton @click="onClick">BUTTON</CmButton>'

export const Primary = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="primary">PRIMARY</CmButton>',
    methods: actionsData,
  }
);

export const Success = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="success">SUCCESS</CmButton>',
    methods: actionsData,
  }
);

export const Warning = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="warning">WARNING</CmButton>',
    methods: actionsData,
  }
);

export const Danger = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="danger">DANGER</CmButton>',
    methods: actionsData,
  }
);

export const Info = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="info">INFO</CmButton>',
    methods: actionsData,
  }
);

export const Control = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="control">CONTROL</CmButton>',
    methods: actionsData,
  }
);

export const Basic = () => (
  {
    components: { CmButton },
    template: '<CmButton @click="onClick" type="basic">BASIC</CmButton>',
    methods: actionsData,
  }
);


export const Disabled = () => (
  {
    components: { CmButton },
    template: buttonTemplate,
    methods: actionsData,
    props: {
      disabled: {
        default: boolean('disabled?', true)
      }
    }
  }
)