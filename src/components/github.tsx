"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import BlurFade from "./magicui/blur-fade";

interface GitHubHeatmapProps {
  username: string;
  delay?: number;
}

const GitHubHeatmap: React.FC<GitHubHeatmapProps> = ({ username  ,delay}) => {
  return (
    <BlurFade delay={Number(delay)}>
      <div className="bg-transparent text-center">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          fontSize={10}
          blockSize={8}
          blockMargin={3}
        />
      </div>
    </BlurFade>
  );
};

export default GitHubHeatmap;
