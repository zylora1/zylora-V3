(ns zylora.workspace
  (:require [app.main.ui.workspace :as workspace]
            [app.main.store :as store]
            [app.main.data.workspace :as dw]
            [goog.object :as gobj]
            [app.util.dom :as dom]
            [rum.core :as rum]))

;; This module exposes the Penpot workspace mounting function to Zylora's React app
;; and sets up listeners to synchronize the Penpot Potok store with Zylora's TypeScript bridge.

(defn ^:export init [container-id initial-edn callbacks]
  (let [container (dom/get-element-by-id container-id)]
    ;; Hide Penpot's native dashboard/top toolbar by default
    (dom/add-class container "zylora-penpot-host")
    
    (when container
      ;; We mount the actual Penpot workspace UI, stripping any dashboard wrappers.
      ;; workspace/workspace-page* is the root Rum component for the workspace.
      (rum/mount (workspace/workspace-page* {}) container)
      
      ;; TODO: Add Potok store subscriptions to invoke JS callbacks on selection/autosave
      (js/console.log "Zylora: Penpot ClojureScript Workspace mounted successfully."))))
