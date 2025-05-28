"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { getBlogPosts, blogCategories } from "@/lib/blog";

interface SearchFiltersProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onTagsChange: (tags: string[]) => void;
  selectedCategory: string;
  selectedTags: string[];
}

export default function SearchFilters({
  onSearchChange,
  onCategoryChange,
  onTagsChange,
  selectedCategory,
  selectedTags,
}: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  useEffect(() => {
    // Get all unique tags from blog posts
    const allPosts = getBlogPosts();
    const uniqueTags = Array.from(
      new Set(allPosts.flatMap((post) => post.tags))
    );
    setAvailableTags(uniqueTags);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(newTags);
  };

  const clearFilters = () => {
    setSearchQuery("");
    onSearchChange("");
    onCategoryChange("");
    onTagsChange([]);
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            placeholder="Search articles, use cases, and insights..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange("")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === ""
                  ? "bg-primary-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              All
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-primary-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Filters */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-primary-100 text-primary-800 border border-primary-300"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {(searchQuery || selectedCategory || selectedTags.length > 0) && (
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {selectedTags.length > 0 || selectedCategory || searchQuery
                ? "Filters applied"
                : ""}
            </p>
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
