import Row from './Row.jsx';
import Button from '../Button/Button.jsx';
import { View } from '@lightningtv/solid';

const meta = {
  title: 'Components/Row',
  component: Row,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'items inside a Row',
      table: {
        defaultValue: { summary: '[]' }
      }
    },
    scroll: {
      control: { type: 'radio' },
      options: ['auto', 'edge', 'always', 'none'],
      description: 'determines when to scroll',
      table: {
        defaultValue: { summary: false }
      }
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'the focus will loop back to the beginning of the list after reaching the last item',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
};

export default meta;

// create an array of buttons to use in Row
const createItems = (length: number) => {
  return Array.from({ length }).map((_, i) => (
    <Button width={300} height={100}>
      Button {(i + 1).toString()}
    </Button>
  ));
};

const buttons = () => createItems(8);

export const Basic = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    wrap: false,
    scroll: 'edge',
    x: 30
  }
};

export const edgeScroll = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'edge',
    wrap: false,
    x: 100
  }
};

export const AlwaysScroll = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'always',
    wrap: false,
    x: 0
  }
};

export const NoneScroll = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scroll: 'edge',
    wrap: false,
    x: 0
  }
};

export const ScrollIndex = {
  render: args => {
    return (
      <View width={2000} height={720}>
        <Row autofocus {...args}>
          {buttons}
        </Row>
      </View>
    );
  },
  args: {
    children: buttons,
    scrollIndex: 4,
    wrap: false,
    x: 0
  }
};
