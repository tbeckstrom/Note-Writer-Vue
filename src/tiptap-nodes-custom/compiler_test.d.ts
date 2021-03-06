export function insertText(text?: string): (state: any, dispatch: any) => boolean;
export function markInputRule(regexp: any, markType: any, getAttrs: any): InputRule<any>;
export function markPasteRule(regexp: any, type: any, getAttrs: any): Plugin<any, any>;
export function nodeInputRule(regexp: any, type: any, getAttrs: any): InputRule<any>;
export function pasteRule(regexp: any, type: any, getAttrs: any): Plugin<any, any>;
export function removeMark(type: any): (state: any, dispatch: any) => any;
export function replaceText(range: any, type: any, attrs?: {}): (state: any, dispatch: any) => boolean;
export function setInlineBlockType(type: any, attrs?: {}): (state: any, dispatch: any) => boolean;
export function splitToDefaultListItem(itemType: any): (state: any, dispatch: any) => boolean;
export function toggleBlockType(type: any, toggletype: any, attrs?: {}): (state: any, dispatch: any, view: any) => any;
export function toggleList(listType: any, itemType: any): (state: any, dispatch: any, view: any) => any;
export function toggleWrap(type: any, attrs?: {}): (state: any, dispatch: any, view: any) => any;
export function updateMark(type: any, attrs: any): (state: any, dispatch: any) => any;
import { InputRule } from "prosemirror-inputrules";
import { Plugin } from "prosemirror-state";
export { textblockTypeInputRule, wrappingInputRule } from "prosemirror-inputrules";
