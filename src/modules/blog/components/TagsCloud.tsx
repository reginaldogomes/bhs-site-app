"use client";

interface TagsCloudProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const tags = [
  "React",
  "Next.js",
  "UI/UX",
  "JavaScript",
  "TypeScript",
  "Design",
  "Frontend",
  "Backend",
  "Node.js",
];

const TagsCloud = ({ selectedTag, onTagClick }: TagsCloudProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer ${
              selectedTag === tag ? "bg-primary text-primary-foreground" : ""
            }`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsCloud;