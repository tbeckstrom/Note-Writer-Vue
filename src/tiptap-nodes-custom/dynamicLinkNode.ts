import { Node } from "tiptap";
import DynamicLink from "../components/DynamicLink.vue";
import { Fragment, Node as pmNode } from "prosemirror-model";
import { wrappingInputRule, toggleWrap, replaceText } from "tiptap-commands";
import DynamicLinkNode from "./shims-dynamicLinkNode";

export default class DynamicLinkNodeComponent extends Node {
  get name() {
    return "dynamic-link";
  }

  get schema() {
    return {
      attrs: {
        linkRef: {
          default: "🤖",
        },
      },
      group: "inline",
      inline: true,
      // inlineContent: true,
      content: "inline*",
      selectable: false,
      atom: true,
      //   defining: false,
      draggable: true,
      parseDOM: [
        {
          tag: "span",
          class: this.name,
          getAttrs: (dom) => ({
            linkRef: dom.getAttribute("linkRef"),
            // linkRef: "whatever",
          }),
          getContent: (dom, schema) => {
            console.log(dom);
            return Fragment.fromJSON(schema, [
              {
                type: "text",
                text: dom.innerText,
              },
            ]);
          },
        },
      ],
      // this is how this node will be rendered
      // in this case a blockquote tag with a class called `awesome-blockquote` will be rendered
      // the '0' stands for its text content inside
      toDOM: (node) => [
        "span",
        { linkRef: node.attrs.linkRef, class: "dynamic-link, woop" },
      ],
    };
  }

  commands({ type }) {
    return (attrs) => replaceText(null, type, attrs);
  }

  keys({ node, schema }) {
    const name = this.name;
    return {
      "Mod-q": function(attrs, node) {
        console.log(attrs);
        return replaceText(null, schema.nodes[name], attrs);
      },
    };
  }

  get view() {
    return DynamicLink;
  }
}
