"use client";

import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useWorkspace } from "@/context/WorkspaceContext";
import { Avatar } from "../common/Avatar";

export const WorkSpace = () => {
  const { currentUser, switchUser, allUsers } = useWorkspace();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Avatar src={currentUser.avatarUrl} />
        <span className="hidden [@media(min-width:425px)]:block text-accent text-lg font-bold truncate max-w-[100px] ">
          {currentUser.name}
        </span>
        <RiArrowDownSLine className="hidden [@media(min-width:425px)]:block text-accent text-lg font-bold" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-48 bg-surface shadow-lg rounded-xl border border-muted z-10"
          >
          {allUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => {
                switchUser(user);
                setOpen(false);
              }}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer"
            >
              <Avatar src={user.avatarUrl} size="sm" />
              <span className="truncate">{user.name}</span>
            </div>
          ))}
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

