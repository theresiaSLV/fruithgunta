
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Category } from '@/types';

interface CategoryFilterProps {
  currentCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({ currentCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Fruits' },
    { value: 'berries', label: 'Berries' },
    { value: 'citrus', label: 'Citrus' },
    { value: 'tropical', label: 'Tropical' },
    { value: 'exotic', label: 'Exotic' },
  ];

  return (
    <div className="flex overflow-x-auto pb-2 space-x-2 md:flex-wrap md:space-x-0 md:space-y-0 md:gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={currentCategory === category.value ? "default" : "outline"}
          size="sm"
          className="whitespace-nowrap"
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
