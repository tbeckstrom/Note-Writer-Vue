import { Node } from "tiptap";
import { wrappingInputRule, toggleWrap } from "tiptap-commands";
import { Schema } from "prosemirror-model";

// export default class DynamicLinkNode extends Node {
//   get name() {
//     return "dynamicLink";
//   }

//   get schema() {
//     return {
//       content: "block+",
//       group: "block",
//       defining: false,
//       draggable: false,
//       parseDOM: [{ tag: "dynamic-link" }],
//       // this is how this node will be rendered
//       // in this case a blockquote tag with a class called `awesome-blockquote` will be rendered
//       // the '0' stands for its text content inside
//       toDOM: function() {
//         return ["dynamic-link", { class: "dynamic-link" }, 0];
//       },
//     };
//   }

//   // this command will be called from menus to add a blockquote
//   // `type` is the prosemirror schema object for this blockquote
//   // `schema` is a collection of all registered nodes and marks
//   commands({ type, schema }) {
//     return () => toggleWrap(type);
//   }

//   // here you can register some shortcuts
//   // in this case you can create a blockquote with `ctrl` + `>`
//   keys({ type }) {
//     return {
//       "Ctrl->": toggleWrap(type),
//     };
//   }
// }
