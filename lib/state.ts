/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { create } from 'zustand';
import { Agent, Rako } from './presets/agents';

/**
 * User
 */
// FIX: Add setter methods to User type and implement them in useUser store to fix errors in UserSettings.tsx.
export type User = {
  name?: string;
  info?: string;
  setName: (name: string) => void;
  setInfo: (info: string) => void;
};

export const useUser = create<User>(set => ({
  name: '',
  info: '',
  setName: (name: string) => set({ name }),
  setInfo: (info: string) => set({ info }),
}));

/**
 * Agents
 */
// FIX: Add update method to useAgent store to fix error in AgentEdit.tsx.
export const useAgent = create<{
  current: Agent;
  update: (id: string, adjustments: Partial<Agent>) => void;
}>(set => ({
  current: Rako,
  update: (id: string, adjustments: Partial<Agent>) =>
    set(state => ({
      current: { ...state.current, ...adjustments },
    })),
}));

/**
 * UI
 */
// FIX: Add showUserConfig and setShowUserConfig to the UI store to fix error in UserSettings.tsx.
// FIX: Add showAgentEdit and setShowAgentEdit to useUI store to fix error in AgentEdit.tsx.
export const useUI = create<{
  showUserConfig: boolean;
  setShowUserConfig: (show: boolean) => void;
  showAgentEdit: boolean;
  setShowAgentEdit: (show: boolean) => void;
}>(set => ({
  showUserConfig: false,
  setShowUserConfig: (show: boolean) => set({ showUserConfig: show }),
  showAgentEdit: false,
  setShowAgentEdit: (show: boolean) => set({ showAgentEdit: show }),
}));
