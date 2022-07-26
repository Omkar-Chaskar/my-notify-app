import React from "react";
import {
  FilterProvider,
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
          <FilterProvider>
          <AuthProvider>{children}</AuthProvider>
          </FilterProvider>
        </NotesProvider>
      </ArchiveProvider>
    </TrashProvider>
  );
};
export { CombinedProvider };
