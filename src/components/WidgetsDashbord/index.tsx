import React from 'react';
import { WidgetDashboardItem } from './types';
import LinkCard from './components/LinkCard';
import { Styled, Title, Widgets } from './styled';

type WidgetsDashbordProps = {
  widgets: WidgetDashboardItem[];
};

const WidgetsDashbord = (props: WidgetsDashbordProps) => {
  const { widgets } = props;

  return (
    <Styled>
      <Title>EMAIL ACTIVITY WIDGETS</Title>
      <Widgets>
        {
          widgets.map((widget, index) => (
            <LinkCard key={index} widget={widget} />
          ))
        }
      </Widgets>
    </Styled>
  );
};

export default WidgetsDashbord;
