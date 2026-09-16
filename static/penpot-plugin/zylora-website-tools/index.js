/* Zylora Website Tools bridge contract.
 * The Penpot host supplies the authenticated fetch implementation. Provider
 * credentials never enter plugin state; all writes go through the canonical
 * Zylora command/mutation boundary.
 */
(function (global) {
  // The authenticated registry endpoint is the single source of truth. The
  // plugin starts empty so it cannot drift from the backend schema.
  let COMPONENT_REGISTRY = [];
  let COMPONENT_ALIASES = {};
  const componentTypes = () => COMPONENT_REGISTRY.map((item) => item.type);
  const normalizeComponentType = (value) => {
    const candidate = String(value || '').trim().toLowerCase().replace(/_/g, '-');
    return COMPONENT_ALIASES[candidate] || candidate;
  };
  const makeInstanceId = (seed) => {
    const clean = String(seed || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);
    if (clean) return `zl_cmp_${clean}`;
    const uuid = global.crypto?.randomUUID ? global.crypto.randomUUID().replace(/[^A-Za-z0-9]/g, '') : `${Date.now()}${Math.random()}`;
    return `zl_cmp_${uuid.slice(0, 32)}`;
  };

  function semanticMetadata(componentType, config = {}, options = {}) {
    const normalizedType = normalizeComponentType(componentType);
    if (COMPONENT_REGISTRY.length && !componentTypes().includes(normalizedType)) throw new Error(`Unsupported Zylora component type: ${componentType}`);
    return {
      schemaVersion: 1,
      componentType: normalizedType,
      instanceId: options.instanceId || makeInstanceId(options.seed),
      runtimeConfig: { ...(config.runtimeConfig || {}) },
      bindings: { ...(config.bindings || {}) },
      actions: Array.isArray(config.actions) ? config.actions.slice() : (config.action ? [config.action] : []),
      responsive: { ...(config.responsive || {}) },
      accessibility: { ...(config.accessibility || {}) },
      seo: { ...(config.seo || {}) },
      metadata: { ...(config.metadata || {}) }
    };
  }

  function duplicateSemanticMetadata(metadata, destinationSeed) {
    if (!metadata || typeof metadata !== 'object') throw new Error('Semantic metadata is required');
    const duplicate = { ...metadata, instanceId: makeInstanceId(destinationSeed) };
    duplicate.runtimeConfig = { ...(metadata.runtimeConfig || {}) };
    duplicate.bindings = { ...(metadata.bindings || {}) };
    duplicate.actions = Array.isArray(metadata.actions) ? metadata.actions.map((action) => ({ ...action })) : [];
    duplicate.responsive = { ...(metadata.responsive || {}) };
    duplicate.accessibility = { ...(metadata.accessibility || {}) };
    duplicate.seo = { ...(metadata.seo || {}) };
    duplicate.metadata = { ...(metadata.metadata || {}) };
    return duplicate;
  }

  function createZyloraWebsiteTools({ siteId, csrfToken, fetchImpl }) {
    if (!siteId || typeof fetchImpl !== 'function') throw new Error('Authenticated Zylora bridge context is required');
    const request = (path, options = {}) => fetchImpl(`/api/sites/${encodeURIComponent(siteId)}${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken || '', ...(options.headers || {}) }
    });
    return {
      get componentTypes() { return componentTypes(); },
      get componentRegistry() { return COMPONENT_REGISTRY.slice(); },
      schemaVersion: 1,
      semanticMetadata,
      duplicateSemanticMetadata,
      getComponentRegistry: () => request('/studio/semantic-registry'),
      loadComponentRegistry: () => request('/studio/semantic-registry').then((response) => response.json ? response.json() : response).then((payload) => {
        COMPONENT_REGISTRY = Array.isArray(payload?.components) ? payload.components.map((item) => Object.freeze({ ...item })) : [];
        COMPONENT_ALIASES = payload?.aliases && typeof payload.aliases === 'object' ? { ...payload.aliases } : {};
        return { ...payload, components: COMPONENT_REGISTRY.slice() };
      }),
      getProjection: (pageId) => request(`/studio/penpot-projection${pageId ? `?page_id=${encodeURIComponent(pageId)}` : ''}`),
      applyInteraction: (interaction) => request('/studio/penpot-interaction', { method: 'POST', body: JSON.stringify({ interaction }) }),
      addComponent: (componentType, options = {}) => request('/studio/penpot-interaction', {
        method: 'POST',
        body: JSON.stringify({ interaction: {
          type: 'add_component',
          pageId: options.pageId,
          parentId: options.parentId,
          nodeId: options.nodeId,
          componentType,
          config: options.config || {},
          geometry: options.geometry || {}
        } })
      }),
      setComponentConfig: (nodeId, config, pageId) => request('/studio/penpot-interaction', {
        method: 'POST',
        body: JSON.stringify({ interaction: { type: 'set_component_config', nodeId, pageId, config } })
      }),
      // Site validation/publish actions are intentionally not guessed here;
      // the bridge exposes only routes that exist in the current Zylora API.
      metadataContract: 'zylora-website-tools/schema.json'
    };
  }

  global.ZyloraWebsiteTools = { create: createZyloraWebsiteTools, get componentTypes() { return componentTypes(); } };
})(typeof window !== 'undefined' ? window : globalThis);
