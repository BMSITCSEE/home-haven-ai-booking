
import React from 'react';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

export interface Category {
  id: string;
  name: string;
  icon: string; // URL to icon image
}

export interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="border-b pb-4">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-6 px-1 py-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center space-y-1 min-w-[56px] transition-opacity ${
                activeCategory === category.id 
                  ? 'opacity-100 border-b-2 border-black pb-2' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={category.icon} 
                alt={category.name} 
                className="h-6 w-6"
              />
              <span className="text-xs truncate max-w-[80px]">{category.name}</span>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
