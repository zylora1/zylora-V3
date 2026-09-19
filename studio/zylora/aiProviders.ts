export type AIProviderFamily = 'openai' | 'anthropic' | 'google' | 'openrouter' | 'azure-openai' | 'ollama' | 'custom';

export type AIProviderCapability = 'chat' | 'vision' | 'tools' | 'structured-output' | 'streaming' | 'code-edit';

export interface ZyloraAIModel {
  id: string;
  label: string;
  family: AIProviderFamily;
  capabilities: AIProviderCapability[];
  enabled?: boolean;
}

export interface ZyloraAIContext {
  siteId?: string;
  pageId?: string;
  selectedNodeIds: string[];
  selectedNodeSummaries?: Array<{ id: string; type: string; name?: string; text?: string }>;
  sourceRevision?: number;
  assetIds?: string[];
  prompt: string;
}

export interface ZyloraAIEditPreview {
  requestId?: string;
  model?: string;
  operations: Array<{ type: string; nodeId?: string; summary?: string; [key: string]: unknown }>;
  document?: unknown;
}

/**
 * UI metadata only. Secrets and provider authorization stay server-side in
 * HostedAIService; this registry prevents the sidebar from coupling itself to
 * a single vendor while keeping unsupported models out of the picker.
 */
export const ZYLORA_AI_MODELS: ZyloraAIModel[] = [
  { id: 'gpt-4.1', label: 'GPT-4.1', family: 'openai', capabilities: ['chat', 'vision', 'tools', 'structured-output', 'streaming', 'code-edit'] },
  { id: 'claude-sonnet', label: 'Claude Sonnet', family: 'anthropic', capabilities: ['chat', 'vision', 'tools', 'structured-output', 'streaming', 'code-edit'] },
  { id: 'gemini-pro', label: 'Gemini Pro', family: 'google', capabilities: ['chat', 'vision', 'tools', 'structured-output', 'streaming', 'code-edit'] },
  { id: 'openrouter/auto', label: 'OpenRouter Auto', family: 'openrouter', capabilities: ['chat', 'vision', 'tools', 'structured-output', 'streaming', 'code-edit'] },
  { id: 'ollama-local', label: 'Local Ollama', family: 'ollama', capabilities: ['chat', 'structured-output', 'streaming', 'code-edit'], enabled: false },
];

export function enabledZyloraAIModels(): ZyloraAIModel[] {
  return ZYLORA_AI_MODELS.filter((model) => model.enabled !== false);
}

export function buildAIContext(input: Omit<ZyloraAIContext, 'prompt'> & { prompt: string }): ZyloraAIContext {
  return {
    ...input,
    selectedNodeIds: Array.from(new Set(input.selectedNodeIds.filter(Boolean))).slice(0, 50),
    prompt: input.prompt.trim().slice(0, 12000),
  };
}
