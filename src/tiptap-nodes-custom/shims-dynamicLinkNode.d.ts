import { NodeSpec, SchemaSpec } from "prosemirror-model";
import { Node } from "tiptap";
import { wrappingInputRule, toggleWrap } from "tiptap-commands";

export default class DynamicLinkNode extends Node {
  get name(): () => string;

  get schema(): () => NodeSpec;

  get view(): () => void;
}
