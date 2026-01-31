import { Button } from '@/shared/ui/button';
import { ButtonGroup } from '@/shared/ui/button-group';

import { panelConfig } from '@/entities/filter-panel/model';

export const FilterPanel = () => {
  return (
    <ButtonGroup className={'hidden md:block mx-auto'}>
      {Object.values(panelConfig).map((item) => (
        <Button key={item} variant="outline" size="lg">
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );
};
