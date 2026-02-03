import { buildCategoryNavigation } from '@/shared/lib/utils/buildCategoryNavigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';

import { categoriesService } from '@/entities/category/api';
import { CategoryLink } from '@/entities/category/ui';

export const CategoryBar = async () => {
  const apiCategories = await categoriesService.getAllCategories();
  const navigation = buildCategoryNavigation({ apiCategories });

  return (
    <div className="hidden md:block w-full max-w-50 p-4">
      <h2 className="mb-4 text-sm text-foreground tracking-tight">
        Categories
      </h2>
      <Accordion type="multiple" className="w-full">
        {navigation.map((section) => (
          <AccordionItem key={section.label} value={section.label}>
            <AccordionTrigger className="text-sm font-medium hover:no-underline">
              {section.label}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2 ml-2 border-l pl-4">
                {'groups' in section
                  ? section.groups.map((group) => (
                      <div key={group.label} className="py-2">
                        <span className="text-xs font-bold uppercase text-muted-foreground">
                          {group.label}
                        </span>
                        <div className="mt-2 flex flex-col gap-1">
                          {group.items.map((item) => (
                            <CategoryLink key={item.slug} item={item} />
                          ))}
                        </div>
                      </div>
                    ))
                  : section.items.map((item) => (
                      <CategoryLink key={item.slug} item={item} />
                    ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
