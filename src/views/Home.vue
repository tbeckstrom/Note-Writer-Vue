<template>
  <div>
    <div class="">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">
          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <v-icon>mdi-format-bold</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.bold"
          >
            <v-icon>mdi-format-italic</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <v-icon>mdi-format-strikethrough</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <v-icon>mdi-format-underline</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <v-icon>mdi-format-paragraph</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            <v-icon>mdi-format-header-1</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <v-icon>mdi-format-header-2</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <v-icon>mdi-format-header-3</v-icon>
          </v-btn>

          <!-- <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <icon name="code" />
          </button> -->

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <v-icon>mdi-format-quote-close</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            @click="commands.horizontal_rule"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            @click="commands.undo"
          >
            <v-icon>mdi-undo</v-icon>
          </v-btn>

          <v-btn
            icon
            plain
            tile
            color="primary"
            class="menubar__button"
            @click="commands.redo"
          >
            <v-icon>mdi-redo</v-icon>
          </v-btn>

          <!-- <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <icon name="code" />
          </button> -->
        </div>
      </editor-menu-bar>

      <editor-content class="editor__content" :editor="editor" />
    </div>
    <v-card v-for="t in templates" :key="t.id">
      <v-card-title primary-title>
        {{ t.name }}
      </v-card-title>
      <v-card-text>
        {{ t.text }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapActions, Store } from "vuex";
import store from "../store";
// import Icon from "Components/Icon";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import DynamicLinkNodeComponent from "../tiptap-nodes-custom/dynamicLinkNode";

import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";

export default {
  name: "Home",
  components: {
    EditorContent,
    EditorMenuBar
    // Icon
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new DynamicLinkNodeComponent()
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular <span class="dynamic-link" linkRef="🤖">whatever</span>items
            </li>
          </ul>
          
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `
      })
    };
  },
  methods: {
    insertDynamicLink: function(state, dispatch) {
      const type = this.editor.nodes["dynamic-link"];
      const { $from } = state.selection;
      if (!$from.parent.canReplaceWith($from.index(), $from.index(), type))
        return false;
      dispatch(state.tr.replaceSelectionWith(type.create()));
      return true;
    }
  },
  computed: {
    ...mapGetters(["templates"]),
    ...mapActions(["bindTemplates"]),
    templates() {
      return store.state.templates;
    }
  },
  created: function() {
    store.dispatch("bindTemplates");
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
