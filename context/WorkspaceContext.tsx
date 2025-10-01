"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import user1 from "@/assets/users/user1.jpg";
import user2 from "@/assets/users/user2.jpg";
import user3 from "@/assets/users/user3.jpg";
import { StaticImageData } from "next/image";

interface User {
  id: number;
  name: string;
  avatarUrl: StaticImageData;
}

interface WorkspaceContextType {
  currentUser: User;
  switchUser: (user: User) => void;
  allUsers: User[];
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
  undefined
);

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  // Fake users for now
  const allUsers: User[] = [
    { id: 1, name: "Chuks", avatarUrl: user1 },
    { id: 2, name: "Kayode", avatarUrl: user2 },
    { id: 3, name: "Ada", avatarUrl: user3 },
  ];

  const [currentUser, setCurrentUser] = useState<User>(allUsers[0]);

  const switchUser = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <WorkspaceContext.Provider value={{ currentUser, switchUser, allUsers }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }
  return context;
};
