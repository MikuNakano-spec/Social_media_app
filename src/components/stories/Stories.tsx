import Image from "next/image";
import { useState } from "react";

interface Story {
  id: string;
  user: {
    username: string;
    avatarUrl: string;
  };
  storyImageUrl: string;
}

const stories: Story[] = [
  {
    id: "1",
    user: {
      username: "Nakano",
      avatarUrl: "https://picsum.photos/50", 
    },
    storyImageUrl: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    user: {
      username: "Nhat",
      avatarUrl: "https://picsum.photos/50/50",
    },
    storyImageUrl: "https://picsum.photos/200/301",
  },
];

export default function StoriesBoard() {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateStory = () => {
    setIsCreating(true);
    console.log("Create story clicked");
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="flex gap-4 overflow-x-auto">
        {/* Create Story Button */}
        <div
          onClick={handleCreateStory}
          className="group relative flex h-40 w-24 flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-200"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500">
              <span className="text-xl text-white -mt-1 font-bold">+</span>
            </div>
            <span className="mt-2 text-sm font-medium text-white">
              Create Story
            </span>
          </div>
        </div>

        {/* Existing Stories with Background Images */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="group relative h-40 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
          >
            {/* Story background image */}
            <Image
              src={story.storyImageUrl}
              alt={`${story.user.username}'s story`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* User avatar */}
            <div className="absolute left-2 top-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-blue-500 bg-white">
              <Image
                src={story.user.avatarUrl}
                alt={`${story.user.username}'s avatar`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>

            {/* Username */}
            <span className="absolute bottom-2 left-2 text-sm font-medium text-white">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
