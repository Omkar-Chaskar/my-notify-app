import React from "react";
import {
  NotesProvider,
  ArchiveProvider,
  TrashProvider,
  AuthProvider,
} from "../context";

const CombinedProvider = ({ children }) => {
  return (
    <TrashProvider>
      <ArchiveProvider>
        <NotesProvider>
          <AuthProvider>{children}</AuthProvider>
        </NotesProvider>
      </ArchiveProvider>
    </TrashProvider>
  );
};
export { CombinedProvider };
