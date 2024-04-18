import { create } from 'zustand';

interface AppState {
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: (open: boolean) => void;

    fileId: string | null;
    setFileId: (fileId: string) => void;

    filename: string;
    setFilename: (filename: string) => void;
}


export const useAppStore = create<AppState>((set) => ({
    
    fileId: null,
    setFileId: (fileId: string) => set({ fileId }),

    filename: '',
    setFilename: (filename: string) => set((state) => ({ filename })),

    isDeleteModalOpen: false,
    setIsDeleteModalOpen: (open) => set((state) => ({ isDeleteModalOpen: open })),

}));