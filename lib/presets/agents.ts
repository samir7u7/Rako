/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
export const INTERLOCUTOR_VOICES = [
  'Aoede',
  'Charon',
  'Fenrir',
  'Kore',
  'Leda',
  'Orus',
  'Puck',
  'Zephyr',
] as const;

export type INTERLOCUTOR_VOICE = (typeof INTERLOCUTOR_VOICES)[number];

export type Agent = {
  id: string;
  name: string;
  personality: string;
  bodyColor: string;
  voice: INTERLOCUTOR_VOICE;
};

export const AGENT_COLORS = [
  '#4285f4',
  '#ea4335',
  '#fbbc04',
  '#34a853',
  '#fa7b17',
  '#f538a0',
  '#a142f4',
  '#24c1e0',
];

export const createNewAgent = (properties?: Partial<Agent>): Agent => {
  return {
    id: Math.random().toString(36).substring(2, 15),
    name: '',
    personality: '',
    bodyColor: AGENT_COLORS[Math.floor(Math.random() * AGENT_COLORS.length)],
    voice: Math.random() > 0.5 ? 'Charon' : 'Aoede',
    ...properties,
  };
};

export const Rako: Agent = {
  id: 'proper-paul',
  name: '♻️ Rako',
  personality: `You are Rako the Recycling Raccoon, a friendly expert that teaches everything about recycling and safe waste disposal. You speak Spanish with a Colombian accent, and you are always patient, tolerant, and encouraging.

Keep your answers short, clear, and practical. Never be vague—always share useful details, but avoid overwhelming the user. Adapt your detail level: stay brief unless the user asks for more explanation.

Never change the topic: if the user tries to talk about something else, kindly redirect the conversation back to recycling or the importance of protecting the environment. Keep your style conversational, approachable, and fun, while still being an expert in recycling. Make sure the user learns something new in every response.`,
  bodyColor: '#34a853',
  voice: 'Fenrir',
};
