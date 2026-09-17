/**
 * Zylora Studio - Transactional Undo / Redo Stack
 * Derived from Penpot common/src/app/common/logic/undo_stack.cljc
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

export interface HistoryEntry<T> {
  state: T;
  description?: string;
  timestamp: number;
}

export class TransactionalHistoryStack<T> {
  private undoStack: HistoryEntry<T>[] = [];
  private redoStack: HistoryEntry<T>[] = [];
  private maxEntries: number;
  private currentTransaction: { initial: T; description: string } | null = null;

  constructor(maxEntries: number = 60) {
    this.maxEntries = maxEntries;
  }

  public push(state: T, description?: string): void {
    if (this.currentTransaction) {
      // In an active transaction, don't push intermediary states to the main stack
      return;
    }
    this.undoStack.push({
      state,
      description,
      timestamp: Date.now(),
    });
    if (this.undoStack.length > this.maxEntries) {
      this.undoStack.shift();
    }
    this.redoStack = [];
  }

  public beginTransaction(initialState: T, description: string = 'Composite change'): void {
    if (!this.currentTransaction) {
      this.currentTransaction = { initial: initialState, description };
    }
  }

  public commitTransaction(finalState: T): void {
    if (this.currentTransaction) {
      this.undoStack.push({
        state: this.currentTransaction.initial,
        description: this.currentTransaction.description,
        timestamp: Date.now(),
      });
      if (this.undoStack.length > this.maxEntries) {
        this.undoStack.shift();
      }
      this.redoStack = [];
      this.currentTransaction = null;
    }
  }

  public rollbackTransaction(): T | null {
    if (this.currentTransaction) {
      const rollbackState = this.currentTransaction.initial;
      this.currentTransaction = null;
      return rollbackState;
    }
    return null;
  }

  public undo(currentState: T): T | null {
    const entry = this.undoStack.pop();
    if (!entry) return null;

    this.redoStack.push({
      state: currentState,
      description: entry.description,
      timestamp: Date.now(),
    });
    return entry.state;
  }

  public redo(currentState: T): T | null {
    const entry = this.redoStack.pop();
    if (!entry) return null;

    this.undoStack.push({
      state: currentState,
      description: entry.description,
      timestamp: Date.now(),
    });
    return entry.state;
  }

  public canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  public canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  public clear(): void {
    this.undoStack = [];
    this.redoStack = [];
    this.currentTransaction = null;
  }
}
