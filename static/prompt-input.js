/**
 * PromptInput - Advanced AI Chat Input Component
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-dom'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'), require('react-dom'));
  } else {
    root.PromptInputModule = factory(root.React, root.ReactDOM);
  }
})(typeof self !== 'undefined' ? self : this, function (React, ReactDOM) {
  if (!React || !ReactDOM) {
    console.warn('PromptInputModule: React or ReactDOM not found.');
    return { mount: function() {} };
  }

  const { useState, useEffect, useRef, useCallback } = React;
  const e = React.createElement;

  function ModelIcon({ model }) {
    const icons = {
      "Composer 2.5": "https://cdn.21st.dev/assets/mirror/7d/7dc00bc09f225fcda46cbc9c6b669c69c025a231877d6c17baa6a003f04f02b2.svg",
      "Gemini 3.5 Flash": "https://cdn.21st.dev/assets/mirror/cd/cda2df6631d5fa227de3fa04ed78cf354f910ba92a9f086e7455655c10ad9d09.svg",
      "GPT 5.5": "https://cdn.21st.dev/assets/mirror/b9/b93fa7942be639a1dae60194ff12141145d7d9fd59581582d6ff23335755f19c.svg",
      "Opus 4.8": "https://cdn.21st.dev/assets/mirror/5d/5de1221c77cc91e748066fd642ad0eee1c1fa65328814f5178166f901e599709.svg",
      "GLM 5.2": "https://cdn.21st.dev/assets/mirror/b2/b2a6c0ff63efd8a555edf8a174ea6fcfeca120ac1595a2d461ca11d3ae89276c.svg"
    };
    const src = icons[model] || icons["GPT 5.5"];
    return e('img', { src, alt: model, className: 'model-icon-img' });
  }

  function DynamicBarsIcon({ level }) {
    const isMediumOrHigh = level === "Medium" || level === "Max Effort";
    const isHigh = level === "Max Effort";
    return e('svg', { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", 'aria-hidden': 'true' },
      e('rect', { x: 1.5, y: 8, width: 2.5, height: 4.5, rx: 1, fill: "currentColor", opacity: 1 }),
      e('rect', { x: 5.75, y: 5, width: 2.5, height: 7.5, rx: 1, fill: "currentColor", opacity: isMediumOrHigh ? 1 : 0.3 }),
      e('rect', { x: 10, y: 2, width: 2.5, height: 10.5, rx: 1, fill: "currentColor", opacity: isHigh ? 1 : 0.3 })
    );
  }

  function ArrowUpIcon() {
    return e('svg', { width: 12, height: 12, viewBox: "0 0 14 14", fill: "none", 'aria-hidden': 'true' },
      e('path', { d: "M7 12V2M7 2L2.5 6.5M7 2L11.5 6.5", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })
    );
  }

  function MicIcon() {
    return e('svg', { width: 13, height: 13, viewBox: "0 0 14 14", fill: "none", 'aria-hidden': 'true' },
      e('rect', { x: 5, y: 1, width: 4, height: 7, rx: 2, stroke: "currentColor", strokeWidth: 1.5 }),
      e('path', { d: "M2.75 6.5V7a4.25 4.25 0 0 0 8.5 0v-.5M7 11.25V13", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" })
    );
  }

  function StopIcon() {
    return e('svg', { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", 'aria-hidden': 'true' },
      e('rect', { x: 3.5, y: 3.5, width: 7, height: 7, rx: 1.5, fill: "currentColor" })
    );
  }

  function PlusIcon() {
    return e('svg', { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", 'aria-hidden': 'true' },
      e('path', { d: "M7 2.5V11.5M2.5 7H11.5", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" })
    );
  }

  function CloseIcon() {
    return e('svg', { width: 9, height: 9, viewBox: "0 0 14 14", fill: "none", 'aria-hidden': 'true' },
      e('path', { d: "M2.5 2.5L11.5 11.5M11.5 2.5L2.5 11.5", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })
    );
  }

  function PromptInputComponent({
    onSubmit,
    placeholder = "Ask anything or describe your website…",
    models = ["GPT 5.5", "Opus 4.8", "Gemini 3.5 Flash", "Composer 2.5", "GLM 5.2"],
    efforts = ["Low", "Medium", "Max Effort"],
    defaultValue = "",
    value: controlledValue,
    onChange,
    maxAttachments = 6
  }) {
    const [expanded, setExpanded] = useState(false);
    const [localValue, setLocalValue] = useState(defaultValue);
    const [selectedModel, setSelectedModel] = useState(models[0]);
    const [effortIndex, setEffortIndex] = useState(1);
    const [isModelSelectOpen, setIsModelSelectOpen] = useState(false);
    const [attachments, setAttachments] = useState([]);
    const [activeAttachment, setActiveAttachment] = useState(null);

    const [isRecording, setIsRecording] = useState(false);
    const [audioData, setAudioData] = useState([0, 0, 0, 0, 0]);

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : localValue;
    const hasValue = value.trim() !== "" || attachments.length > 0;
    const hasAttachments = attachments.length > 0;

    const textareaRef = useRef(null);
    const internalContainerRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleValueChange = useCallback((val) => {
      if (!isControlled) setLocalValue(val);
      if (onChange) onChange(val);
    }, [isControlled, onChange]);

    useEffect(() => {
      function handleClickOutside(event) {
        if (internalContainerRef.current && !internalContainerRef.current.contains(event.target)) {
          setIsModelSelectOpen(false);
        }
      }
      if (isModelSelectOpen) document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isModelSelectOpen]);

    const handleSubmit = () => {
      if (value.trim() === "" && !hasAttachments) return;
      if (onSubmit) {
        onSubmit(value, {
          model: selectedModel,
          effort: efforts[effortIndex],
          attachments: attachments.map(a => a.file)
        });
      }
      handleValueChange("");
      attachments.forEach(a => URL.revokeObjectURL(a.url));
      setAttachments([]);
      setIsModelSelectOpen(false);
    };

    const cycleEffort = (e) => {
      e.stopPropagation();
      setEffortIndex((prev) => (prev + 1) % efforts.length);
    };

    const openFileChooser = (e) => {
      e.stopPropagation();
      fileInputRef.current?.click();
    };

    const handleFilesChosen = (ev) => {
      const files = Array.from(ev.target.files || []).filter(f => f.type.startsWith("image/"));
      ev.target.value = "";
      if (files.length === 0) return;
      setExpanded(true);
      const room = Math.max(0, maxAttachments - attachments.length);
      for (const file of files.slice(0, room)) {
        const url = URL.createObjectURL(file);
        const id = `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
        setAttachments(prev => [...prev, { id, file, url, name: file.name }]);
      }
    };

    const removeAttachment = (id) => {
      setAttachments(prev => {
        const t = prev.find(a => a.id === id);
        if (t) URL.revokeObjectURL(t.url);
        return prev.filter(a => a.id !== id);
      });
    };

    const toggleRecording = () => {
      if (isRecording) {
        setIsRecording(false);
        setAudioData([0, 0, 0, 0, 0]);
      } else {
        setExpanded(true);
        setIsRecording(true);
        const interval = setInterval(() => {
          setAudioData([
            Math.random() * 0.8 + 0.2,
            Math.random() * 0.9 + 0.1,
            Math.random() * 0.95 + 0.1,
            Math.random() * 0.7 + 0.2,
            Math.random() * 0.6 + 0.1
          ]);
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
          setIsRecording(false);
          setAudioData([0, 0, 0, 0, 0]);
          handleValueChange(value + (value ? " " : "") + "Build a modern high-converting website with booking, services, and testimonials.");
        }, 3000);
      }
    };

    return e('div', {
      className: 'prompt-input-wrapper ' + (expanded ? 'expanded' : ''),
      ref: internalContainerRef
    },
      e('input', {
        ref: fileInputRef,
        type: 'file',
        accept: 'image/*',
        multiple: true,
        onChange: handleFilesChosen,
        style: { display: 'none' }
      }),

      hasAttachments && e('div', { className: 'prompt-attachment-tab' },
        attachments.map(att =>
          e('div', { key: att.id, className: 'prompt-thumb-item', onClick: () => setActiveAttachment(att) },
            e('img', { src: att.url, alt: att.name }),
            e('button', {
              type: 'button',
              className: 'prompt-thumb-del',
              onClick: (e) => { e.stopPropagation(); removeAttachment(att.id); }
            }, e(CloseIcon))
          )
        )
      ),

      e('div', {
        className: 'prompt-input-card',
        onClick: () => {
          if (!expanded) setExpanded(true);
          textareaRef.current?.focus();
        }
      },
        e('textarea', {
          ref: textareaRef,
          className: 'prompt-textarea',
          value,
          placeholder: placeholder,
          onFocus: () => setExpanded(true),
          onChange: (e) => handleValueChange(e.target.value),
          onKeyDown: (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }
        }),

        expanded && e('div', { className: 'prompt-toolbar-row' },
          e('div', { className: 'model-select-rel' },
            e('button', {
              type: 'button',
              className: 'prompt-pill-btn',
              onClick: (e) => { e.stopPropagation(); setIsModelSelectOpen(!isModelSelectOpen); }
            },
              e(ModelIcon, { model: selectedModel }),
              e('span', null, selectedModel),
              e('span', { style: { fontSize: 10, opacity: 0.6 } }, '▾')
            ),
            isModelSelectOpen && e('div', { className: 'model-dropdown-menu' },
              models.map(m =>
                e('button', {
                  key: m,
                  type: 'button',
                  className: 'model-item-btn ' + (m === selectedModel ? 'selected' : ''),
                  onClick: (e) => { e.stopPropagation(); setSelectedModel(m); setIsModelSelectOpen(false); }
                },
                  e(ModelIcon, { model: m }),
                  e('span', null, m)
                )
              )
            )
          ),

          e('button', {
            type: 'button',
            className: 'prompt-pill-btn',
            onClick: cycleEffort
          },
            e(DynamicBarsIcon, { level: efforts[effortIndex] }),
            e('span', null, efforts[effortIndex])
          ),

          e('button', {
            type: 'button',
            className: 'prompt-icon-btn',
            onClick: openFileChooser,
            title: 'Attach reference image'
          }, e(PlusIcon))
        ),

        isRecording && e('div', { className: 'prompt-audio-wave' },
          audioData.map((v, i) =>
            e('span', {
              key: i,
              className: 'audio-bar',
              style: { height: `${Math.max(4, v * 22)}px` }
            })
          )
        ),

        e('button', {
          type: 'button',
          className: 'prompt-action-btn ' + (isRecording ? 'recording' : hasValue ? 'send' : 'mic'),
          onClick: (e) => {
            e.stopPropagation();
            if (isRecording) toggleRecording();
            else if (hasValue) handleSubmit();
            else toggleRecording();
          }
        },
          isRecording ? e(StopIcon) : hasValue ? e(ArrowUpIcon) : e(MicIcon)
        )
      ),

      activeAttachment && e('div', { className: 'prompt-modal-lightbox', onClick: () => setActiveAttachment(null) },
        e('div', { className: 'prompt-lightbox-content', onClick: (e) => e.stopPropagation() },
          e('img', { src: activeAttachment.url, alt: activeAttachment.name }),
          e('button', { type: 'button', className: 'lightbox-close-btn', onClick: () => setActiveAttachment(null) }, '✕')
        )
      )
    );
  }

  return {
    PromptInput: PromptInputComponent,
    mount: function (container, options) {
      if (!container) return;
      ReactDOM.render(e(PromptInputComponent, options || {}), container);
    }
  };
});
